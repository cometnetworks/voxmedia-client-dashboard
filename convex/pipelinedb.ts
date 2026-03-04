import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

export const getDashboardStats = query({
    args: { clientId: v.id("clients") },
    handler: async (ctx, args) => {
        const pipeline = await ctx.db
            .query("pipeline")
            .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
            .collect();

        const opportunities = await ctx.db
            .query("opportunities")
            .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
            .collect();

        const meetings = await ctx.db
            .query("meetings")
            .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
            .collect();

        // Simple counts for now
        return {
            companiesAnalyzed: pipeline.length,
            contactsMade: pipeline.filter(p => p.status !== "Prospectado").length,
            activeConversations: pipeline.filter(p => p.status === "Conversación abierta" || p.status === "Interesado").length,
            qualifiedOpportunities: opportunities.length,
            scheduledMeetings: meetings.filter(m => m.status === "Confirmada").length,
            pipelineValue: "$3.2M", // Placeholder for logic
        };
    },
});

export const getPipeline = query({
    args: { clientId: v.id("clients") },
    handler: async (ctx, args) => {
        const pipelineEntries = await ctx.db
            .query("pipeline")
            .withIndex("by_client", (q) => q.eq("clientId", args.clientId))
            .collect();

        const result = await Promise.all(
            pipelineEntries.map(async (entry) => {
                const company = await ctx.db.get(entry.companyId);
                const contact = await ctx.db.get(entry.contactId);
                return {
                    ...entry,
                    companyName: company?.companyName,
                    industry: company?.industry,
                    country: company?.country,
                    contactName: contact?.name,
                    contactPosition: contact?.position,
                };
            })
        );

        return result;
    },
});

// Seed data mutation for testing
export const seedDevData = mutation({
    handler: async (ctx) => {
        const clientId = await ctx.db.insert("clients", {
            companyName: "Roca Sistemas",
            contactName: "Rogelio",
            email: "rogelio@roca.com",
            role: "client",
        });

        const companyId = await ctx.db.insert("companies", {
            clientId,
            companyName: "TechCorp Global",
            industry: "Software",
            country: "Mexico",
            size: "501-1000",
        });

        const contactId = await ctx.db.insert("contacts", {
            clientId,
            companyId,
            name: "Juan Perez",
            position: "CTO",
            email: "juan@techcorp.com",
        });

        await ctx.db.insert("pipeline", {
            clientId,
            companyId,
            contactId,
            status: "Interesado",
            lastInteraction: new Date().toISOString(),
        });

        await ctx.db.insert("opportunities", {
            clientId,
            companyId,
            contactId,
            problem: "Need to modernize legacy ERP",
            solution: "Vox AI Integration Hub",
            interestLevel: "High",
        });

        await ctx.db.insert("meetings", {
            clientId,
            companyId,
            contactId,
            date: "2024-04-15",
            time: "10:00 AM",
            type: "Discovery",
            status: "Confirmada",
        });

        return { clientId };
    },
});
