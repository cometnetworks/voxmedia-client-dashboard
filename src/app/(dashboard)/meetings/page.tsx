"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarIcon, Clock, MapPin, Video, MoreHorizontal } from "lucide-react";

export default function MeetingsPage() {
    const meetings = [
        {
            id: 1,
            company: "TechCorp Global",
            contact: "Juan Perez",
            date: "15 de Abril, 2024",
            time: "10:00 AM",
            type: "Discovery",
            status: "Confirmada",
            location: "Google Meet"
        },
        {
            id: 2,
            company: "Innovate Solutions",
            contact: "Maria Garcia",
            date: "18 de Abril, 2024",
            time: "2:30 PM",
            type: "Demo",
            status: "Confirmada",
            location: "Zoom"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Reuniones Agendadas</h1>
                <p className="text-muted-foreground mt-1">
                    Calendario de citas confirmadas y realizadas.
                </p>
            </div>

            <div className="space-y-4">
                {meetings.map((meeting) => (
                    <Card key={meeting.id} className="border-none shadow-sm group">
                        <CardHeader className="flex flex-row items-center gap-6 py-4">
                            <div className="flex flex-col items-center justify-center bg-primary/10 text-primary rounded-xl px-4 py-2 min-w-24">
                                <span className="text-xs uppercase font-bold tracking-tighter">Abr</span>
                                <span className="text-2xl font-black">15</span>
                            </div>
                            <div className="flex-1">
                                <CardTitle className="text-lg font-bold">{meeting.company}</CardTitle>
                                <div className="flex flex-wrap gap-x-6 gap-y-1 mt-1 text-sm text-muted-foreground">
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <Clock className="h-4 w-4" /> {meeting.time}
                                    </div>
                                    <div className="flex items-center gap-1.5 whitespace-nowrap">
                                        <Video className="h-4 w-4" /> {meeting.location}
                                    </div>
                                    <div className="flex items-center gap-1.5">
                                        <Badge variant="outline" className="font-normal border-primary/20 bg-primary/5">
                                            {meeting.type}
                                        </Badge>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none px-3">
                                    {meeting.status}
                                </Badge>
                                <Button variant="ghost" size="icon">
                                    <MoreHorizontal className="h-4 w-4" />
                                </Button>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    );
}
