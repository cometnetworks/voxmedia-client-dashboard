"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
    Building2,
    CheckCircle2,
    MessageSquare,
    Calendar,
    Clock,
    History as HistoryIcon
} from "lucide-react";

export function ActivityLog() {
    const activities = [
        {
            id: 1,
            date: "12 Mar",
            action: "Empresa X contactada",
            icon: MessageSquare,
            color: "bg-blue-500/10 text-blue-500"
        },
        {
            id: 2,
            date: "14 Mar",
            action: "Empresa Y interesada",
            icon: CheckCircle2,
            color: "bg-green-500/10 text-green-500"
        },
        {
            id: 3,
            date: "16 Mar",
            action: "Reunión agendada con CIO",
            icon: Calendar,
            color: "bg-purple-500/10 text-purple-500"
        }
    ];

    return (
        <Card className="border-none shadow-sm">
            <CardHeader>
                <CardTitle className="text-lg font-bold flex items-center gap-2">
                    <HistoryIcon className="h-5 w-5 text-primary" />
                    Registro de Actividad
                </CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {activities.map((activity, i) => (
                        <div key={activity.id} className="relative flex gap-4">
                            {i !== activities.length - 1 && (
                                <div className="absolute left-[17px] top-9 h-full w-px bg-border" />
                            )}
                            <div className={`size-9 rounded-full flex items-center justify-center shrink-0 z-10 ${activity.color}`}>
                                <activity.icon className="h-4 w-4" />
                            </div>
                            <div className="flex flex-col gap-1 pt-0.5">
                                <span className="text-sm font-bold">{activity.action}</span>
                                <span className="text-xs text-muted-foreground flex items-center gap-1">
                                    <Clock className="h-3 w-3" /> {activity.date}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    );
}
