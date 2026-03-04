"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <p className="text-muted-foreground animate-pulse">Cargando Vox Pipeline OS...</p>
    </div>
  );
}
