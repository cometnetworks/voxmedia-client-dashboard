"use client";

import { useQuery } from "convex/react";
import { api } from "convex/_generated/api";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, MessageCircle, MoreVertical } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function OpportunitiesPage() {
    const opportunities = useQuery(api.pipelinedb.getPipeline, {
        clientId: "j970etx9pqv3y0zydy5d1d7pbx828b1t" as any
    })?.filter(item => item.status === "Oportunidad" || item.status === "Interesado");

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Oportunidades Liberadas</h1>
                <p className="text-muted-foreground mt-1">
                    Estas son las oportunidades calificadas listas para ser contactadas por tu equipo comercial.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {opportunities === undefined ? (
                    Array.from({ length: 3 }).map((_, i) => (
                        <Card key={i} className="border-none shadow-sm">
                            <CardHeader>
                                <Skeleton className="h-6 w-3/4 mb-2" />
                                <Skeleton className="h-4 w-1/2" />
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <Skeleton className="h-20 w-full" />
                                <Skeleton className="h-10 w-full" />
                            </CardContent>
                        </Card>
                    ))
                ) : opportunities.length === 0 ? (
                    <div className="col-span-full h-64 flex flex-col items-center justify-center text-muted-foreground border-2 border-dashed rounded-xl">
                        <p>Aún no hay oportunidades liberadas.</p>
                        <p className="text-sm">El equipo de Vox Media está trabajando en ello.</p>
                    </div>
                ) : (
                    opportunities.map((item) => (
                        <Card key={item._id} className="border-none shadow-sm hover:ring-2 hover:ring-primary/20 transition-all group">
                            <CardHeader className="flex flex-row items-start justify-between pb-2">
                                <div className="space-y-1">
                                    <CardTitle className="text-xl font-bold">{item.companyName}</CardTitle>
                                    <CardDescription>{item.contactName} • {item.contactPosition}</CardDescription>
                                </div>
                                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none">
                                    Nivel Alto
                                </Badge>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="bg-muted/40 p-4 rounded-lg text-sm">
                                    <p className="font-semibold mb-1 text-primary">Problema Identificado</p>
                                    <p className="text-muted-foreground leading-relaxed">
                                        Buscan optimizar sus procesos de logística mediante integraciones SaaS.
                                        Actualmente usan herramientas legacy que les generan cuellos de botella.
                                    </p>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant="default" className="flex-1 gap-2 shadow-sm font-semibold">
                                        Ver Detalles <ExternalLink className="h-4 w-4" />
                                    </Button>
                                    <Button variant="outline" size="icon" className="group-hover:text-primary transition-colors">
                                        <MessageCircle className="h-4 w-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))
                )}
            </div>
        </div>
    );
}
