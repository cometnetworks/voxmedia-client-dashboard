"use client";

import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

export default function PipelinePage() {
    // Using a hardcoded ID for now until Auth is implemented
    // In a real app, this would come from the session
    const pipeline = useQuery(api.pipelinedb.getPipeline, {
        clientId: "j970etx9pqv3y0zydy5d1d7pbx828b1t" as any
    });

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Pipeline</h1>
                    <p className="text-muted-foreground mt-1">
                        Listado completo de empresas prospectadas y su estado actual.
                    </p>
                </div>
                <div className="relative w-full md:w-80">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input placeholder="Buscar empresa o contacto..." className="pl-10" />
                </div>
            </div>

            <Card className="border-none shadow-sm overflow-hidden">
                <CardContent className="p-0">
                    <Table>
                        <TableHeader className="bg-muted/50">
                            <TableRow>
                                <TableHead className="font-semibold">Empresa</TableHead>
                                <TableHead className="font-semibold">Industria</TableHead>
                                <TableHead className="font-semibold">Contacto</TableHead>
                                <TableHead className="font-semibold">Cargo</TableHead>
                                <TableHead className="font-semibold text-center">Estado</TableHead>
                                <TableHead className="font-semibold text-right">Última Interacción</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {pipeline === undefined ? (
                                Array.from({ length: 5 }).map((_, i) => (
                                    <TableRow key={i}>
                                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-24" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-28" /></TableCell>
                                        <TableCell><Skeleton className="h-4 w-32" /></TableCell>
                                        <TableCell className="text-center"><Skeleton className="h-6 w-20 mx-auto" /></TableCell>
                                        <TableCell className="text-right"><Skeleton className="h-4 w-24 ml-auto" /></TableCell>
                                    </TableRow>
                                ))
                            ) : pipeline.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={6} className="h-32 text-center text-muted-foreground italic">
                                        No se encontraron registros en el pipeline.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                pipeline.map((item) => (
                                    <TableRow key={item._id} className="hover:bg-muted/30 transition-colors">
                                        <TableCell className="font-medium">{item.companyName}</TableCell>
                                        <TableCell className="text-muted-foreground">{item.industry}</TableCell>
                                        <TableCell>{item.contactName}</TableCell>
                                        <TableCell className="text-muted-foreground text-sm">{item.contactPosition}</TableCell>
                                        <TableCell className="text-center">
                                            <Badge
                                                variant={
                                                    item.status === "Oportunidad" ? "default" :
                                                        item.status === "Interesado" ? "secondary" :
                                                            item.status === "No interesado" ? "destructive" : "outline"
                                                }
                                                className="font-normal"
                                            >
                                                {item.status}
                                            </Badge>
                                        </TableCell>
                                        <TableCell className="text-right text-muted-foreground text-sm">
                                            {new Date(item.lastInteraction).toLocaleDateString()}
                                        </TableCell>
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
