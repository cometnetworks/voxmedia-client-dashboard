"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { History, Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function HistoryPage() {
    const archives = [
        { id: 1, company: "RetailForce", industry: "Retail", ops: 4, meetings: 2, status: "Cerrada", date: "Jan 2024" },
        { id: 2, company: "LogiTech SA", industry: "Logistics", ops: 2, meetings: 1, status: "Cerrada", date: "Feb 2024" },
        { id: 3, company: "Finansys", industry: "Finance", ops: 8, meetings: 4, status: "Activa", date: "Mar 2024" },
    ];

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Archivo Histórico</h1>
                    <p className="text-muted-foreground mt-1">
                        Historial completo de campañas y resultados acumulados.
                    </p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar en historial..." className="pl-10" />
                </div>
            </div>

            <Card className="border-none shadow-sm">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="font-semibold">Campaña / Empresa</TableHead>
                                <TableHead className="font-semibold">Oportunidades</TableHead>
                                <TableHead className="font-semibold">Reuniones</TableHead>
                                <TableHead className="font-semibold">Periodo</TableHead>
                                <TableHead className="font-semibold text-right">Estado</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {archives.map((item) => (
                                <TableRow key={item.id}>
                                    <TableCell className="font-medium">
                                        <div>
                                            {item.company}
                                            <p className="text-xs text-muted-foreground font-normal">{item.industry}</p>
                                        </div>
                                    </TableCell>
                                    <TableCell>{item.ops}</TableCell>
                                    <TableCell>{item.meetings}</TableCell>
                                    <TableCell className="text-muted-foreground">{item.date}</TableCell>
                                    <TableCell className="text-right">
                                        <Badge variant={item.status === "Activa" ? "default" : "outline"}>
                                            {item.status}
                                        </Badge>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
