"use client";

import * as React from "react";
import {
    BarChart3,
    Calendar,
    ChevronRight,
    FileText,
    History,
    Home,
    LayoutDashboard,
    LogOut,
    Settings,
    Target,
} from "lucide-react";

import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
    SidebarRail,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { usePathname } from "next/navigation";

const data = {
    user: {
        name: "Client Admin",
        email: "admin@example.com",
        avatar: "/avatars/client.jpg",
    },
    navMain: [
        {
            title: "Dashboard",
            url: "/home",
            icon: LayoutDashboard,
            isActive: true,
        },
        {
            title: "Pipeline",
            url: "/pipeline",
            icon: Target,
        },
        {
            title: "Oportunidades",
            url: "/opportunities",
            icon: BarChart3,
        },
        {
            title: "Reuniones",
            url: "/meetings",
            icon: Calendar,
        },
        {
            title: "Archivo",
            url: "/history",
            icon: History,
        },
        {
            title: "Reportes",
            url: "/reports",
            icon: FileText,
        },
    ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    const pathname = usePathname();

    return (
        <Sidebar collapsible="icon" {...props} className="border-r-0">
            <SidebarHeader className="h-16 flex items-center px-6">
                <div className="flex items-center gap-3">
                    <div className="bg-primary aspect-square size-8 flex items-center justify-center rounded-lg">
                        <Target className="text-primary-foreground size-5" />
                    </div>
                    <div className="flex flex-col gap-0.5 leading-none">
                        <span className="font-semibold text-lg tracking-tight">Vox Pipeline</span>
                        <span className="text-xs text-muted-foreground">OS v1.0</span>
                    </div>
                </div>
            </SidebarHeader>
            <SidebarContent>
                <SidebarMenu className="px-3 gap-2 py-4">
                    {data.navMain.map((item) => (
                        <SidebarMenuItem key={item.title}>
                            <SidebarMenuButton
                                asChild
                                tooltip={item.title}
                                isActive={pathname === item.url}
                                className="h-11 px-4 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                            >
                                <Link href={item.url}>
                                    <item.icon className="size-5" />
                                    <span className="font-medium">{item.title}</span>
                                </Link>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    ))}
                </SidebarMenu>
            </SidebarContent>
            <SidebarFooter className="p-4 border-t border-border/50">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton className="h-12 w-full gap-3 px-3">
                            <Avatar className="size-8 rounded-lg">
                                <AvatarImage src={data.user.avatar} alt={data.user.name} />
                                <AvatarFallback className="rounded-lg">CA</AvatarFallback>
                            </Avatar>
                            <div className="flex flex-col items-start leading-tight">
                                <span className="font-medium text-sm truncate w-32">{data.user.name}</span>
                                <span className="text-xs text-muted-foreground truncate w-32">{data.user.email}</span>
                            </div>
                            <LogOut className="ml-auto size-4 text-muted-foreground" />
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    );
}
