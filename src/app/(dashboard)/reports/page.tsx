"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileDown, FileSpreadsheet, FileText, Share2 } from "lucide-react";

export default function ReportsPage() {
    const reports = [
        {
            title: "Pipeline Completo",
            description: "Listado detallado de todas las empresas en el embudo.",
            icon: FileSpreadsheet,
            format: "CSV / Excel"
        },
        {
            title: "Oportunidades Calificadas",
            description: "Resumen de leads de alto valor con notas de preventa.",
            icon: FileText,
            format: "PDF / Word"
        },
        {
            title: "Reporte de Reuniones",
            description: "Bitácora de citas, status y próximos pasos.",
            icon: FileText,
            format: "PDF"
        }
    ];

    return (
        <div className="flex flex-col gap-6">
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Reportes</h1>
                <p className="text-muted-foreground mt-1">
                    Descarga y exporta la información de tus campañas en diferentes formatos.
                </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {reports.map((report) => (
                    <Card key={report.title} className="border-none shadow-sm h-full flex flex-col hover:bg-muted/30 transition-colors">
                        <CardHeader>
                            <div className="size-10 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                                <report.icon className="h-5 w-5 text-primary" />
                            </div>
                            <CardTitle>{report.title}</CardTitle>
                            <CardDescription>{report.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="mt-auto pt-4 flex items-center justify-between border-t">
                            <span className="text-xs font-medium text-muted-foreground uppercase">{report.format}</span>
                            <Button size="sm" variant="ghost" className="gap-2">
                                Descargar <FileDown className="h-4 w-4" />
                            </Button>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="border-none shadow-sm bg-primary/5">
                <CardContent className="flex flex-col md:flex-row items-center justify-between p-6 gap-6">
                    <div className="space-y-1">
                        <h3 className="text-lg font-bold">Solicitar Reporte Personalizado</h3>
                        <p className="text-sm text-muted-foreground">
                            ¿Necesitas información específica para tu comité de ventas? Nosotros lo preparamos.
                        </p>
                    </div>
                    <Button className="gap-2 bg-primary hover:bg-primary/90">
                        Contactar a Vox Media <Share2 className="h-4 w-4" />
                    </Button>
                </CardContent>
            </Card>
        </div>
    );
}
