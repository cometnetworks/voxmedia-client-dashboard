import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  clients: defineTable({
    companyName: v.string(),
    contactName: v.string(),
    email: v.string(),
    role: v.union(v.literal("admin"), v.literal("client")),
  }).index("by_email", ["email"]),

  companies: defineTable({
    clientId: v.id("clients"),
    companyName: v.string(),
    industry: v.string(),
    country: v.string(),
    size: v.string(), // e.g. "11-50"
  }).index("by_client", ["clientId"]),

  contacts: defineTable({
    clientId: v.id("clients"),
    companyId: v.id("companies"),
    name: v.string(),
    position: v.string(),
    email: v.string(),
    phone: v.optional(v.string()),
  }).index("by_client", ["clientId"]),

  pipeline: defineTable({
    clientId: v.id("clients"),
    companyId: v.id("companies"),
    contactId: v.id("contacts"),
    status: v.union(
      v.literal("Prospectado"),
      v.literal("Investigación"),
      v.literal("Contactado"),
      v.literal("Conversación abierta"),
      v.literal("Interesado"),
      v.literal("Oportunidad"),
      v.literal("Reunión"),
      v.literal("No interesado")
    ),
    lastInteraction: v.string(), // ISO Date
    nextFollowup: v.optional(v.string()), // ISO Date
  }).index("by_client", ["clientId"]),

  opportunities: defineTable({
    clientId: v.id("clients"),
    companyId: v.id("companies"),
    contactId: v.id("contacts"),
    problem: v.string(),
    solution: v.string(),
    interestLevel: v.string(), // e.g. "High", "Medium", "Low"
    notes: v.optional(v.string()),
    timeline: v.optional(v.string()),
  }).index("by_client", ["clientId"]),

  meetings: defineTable({
    clientId: v.id("clients"),
    companyId: v.id("companies"),
    contactId: v.id("contacts"),
    date: v.string(),
    time: v.string(),
    type: v.union(v.literal("Discovery"), v.literal("Demo")),
    status: v.union(
      v.literal("Confirmada"),
      v.literal("Realizada"),
      v.literal("Reprogramada"),
      v.literal("Cancelada")
    ),
  }).index("by_client", ["clientId"]),

  activityLog: defineTable({
    clientId: v.id("clients"),
    action: v.string(),
    timestamp: v.string(),
    details: v.optional(v.string()),
  }).index("by_client", ["clientId"]),
});
