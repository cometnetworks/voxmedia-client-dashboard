"use client";

import { ActivityLog } from "@/components/activity-log";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
    Building2,
    Users,
    MessageSquare,
    Target,
    Calendar,
    TrendingUp,
    ArrowUpRight,
    TrendingDown
} from "lucide-react";

export default function HomePage() {
    const kpis = [
        { title: "Empresas analizadas", value: "325", sub: "+12% vs mes anterior", icon: Building2, color: "text-blue-600", trend: "up" },
        { title: "Contactos realizados", value: "148", sub: "45% tasa de apertura", icon: Users, color: "text-green-600", trend: "up" },
        { title: "Conversaciones activas", value: "32", sub: "-2 esta semana", icon: MessageSquare, color: "text-amber-600", trend: "down" },
        { title: "Oportunidades calificadas", value: "6", sub: "+1 hoy", icon: Target, color: "text-purple-600", trend: "up" },
        { title: "Reuniones agendadas", value: "3", sub: "Próxima: 15 Abr", icon: Calendar, color: "text-red-600", trend: "up" },
        { title: "Pipeline generado", value: "$3.2M", sub: "Valor potencial", icon: TrendingUp, color: "text-pink-600", trend: "up" },
    ];

    return (
        <div className="flex flex-col gap-8">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Bienvenido, Rogelio</h1>
                <p className="text-muted-foreground mt-1">Aquí tienes un resumen del avance de tus campañas en tiempo real.</p>
            </div>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {kpis.map((kpi) => (
                    <Card key={kpi.title} className="border-none shadow-sm hover:shadow-md transition-shadow group">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                                {kpi.title}
                            </CardTitle>
                            <div className={`p-1.5 rounded-lg bg-muted group-hover:bg-primary/10 transition-colors`}>
                                <kpi.icon className={`h-3.5 w-3.5 ${kpi.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-black">{kpi.value}</div>
                            <p className="text-[10px] text-muted-foreground mt-1 flex items-center gap-1">
                                {kpi.trend === "up" ? (
                                    <ArrowUpRight className="h-3 w-3 text-green-500" />
                                ) : (
                                    <TrendingDown className="h-3 w-3 text-red-500" />
                                )}
                                {kpi.sub}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4 border-none shadow-sm h-[450px]">
                    <CardHeader>
                        <CardTitle className="text-lg font-bold">Pipeline por Etapa</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col justify-center h-[350px]">
                        {/* Fake Chart bars */}
                        <div className="space-y-4 px-4">
                            {[
                                { label: "Prospectado", val: 325, percent: "100%", color: "bg-blue-500" },
                                { label: "Contactado", val: 148, percent: "45%", color: "bg-green-500" },
                                { label: "Interesado", val: 32, percent: "10%", color: "bg-amber-500" },
                                { label: "Oportunidad", val: 6, percent: "2%", color: "bg-purple-500" },
                                { label: "Reunión", val: 3, percent: "1%", color: "bg-red-500" },
                            ].map((item) => (
                                <div key={item.label} className="space-y-1">
                                    <div className="flex justify-between text-xs font-medium">
                                        <span>{item.label}</span>
                                        <span className="text-muted-foreground">{item.val} ({item.percent})</span>
                                    </div>
                                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                                        <div className={`h-full ${item.color}`} style={{ width: item.percent }} />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                <div className="col-span-3">
                    <ActivityLog />
                </div>
            </div>
        </div>
    );
}
