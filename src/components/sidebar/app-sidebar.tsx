"use client";

import * as React from "react";
import { useTranslation } from "react-i18next";
import type { TFunction } from "i18next";
import { LayoutDashboardIcon, UserIcon } from "lucide-react";

import { NavMain } from "@/components/sidebar/nav-main";
import { NavUser } from "@/components/sidebar/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { ClientLogo } from "./client-logo";
import { cn } from "@/lib/utils";
import { RouteAppPath, RouteUserPath } from "@/constant/RouteConst";

// This is sample data.
const getNavMain = (t: TFunction) => {
  const menuItems = [
    {
      title: t("sidebar.dashboard", "Dashboard"),
      url: `/${RouteAppPath.Dashboard}`,
      icon: LayoutDashboardIcon,
    },
    {
      title: t("sidebar.users"),
      url: `/${RouteAppPath.User}`,
      icon: UserIcon,
      items: [
        {
          title: t("sidebar.user", "Users"),
          url: `/${RouteAppPath.User}/${RouteUserPath.Users}`,
        },
        {
          title: t("sidebar.roles", "Roles"),
          url: `/${RouteAppPath.User}/${RouteUserPath.Roles}`,
        },
        {
          title: t("sidebar.permissions", "Permissions"),
          url: `/${RouteAppPath.User}/${RouteUserPath.Permissions}`,
        },
      ],
    },
  ];
  return menuItems;
};

export function AppSidebar({
  onLogout,
  ...props
}: React.ComponentProps<typeof Sidebar> & { onLogout: () => void }) {
  // const location = useLocation();
  const { t } = useTranslation();
  const navMain = getNavMain(t);
  const client = {
    code: "VP",
    name: "VP CMS MANAGEMENT",
  };
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <div className="flex gap-2 items-center">
                <ClientLogo code={client.code} name={client.name} size="sm" />
                <div
                  className={cn("grid flex-1 text-left text-sm leading-tight")}>
                  <span className="truncate font-medium">{client.name}</span>
                </div>
              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser
          user={{
            name: "Viet",
            email: "viet@gmail.com",
            avatar: "src/assets/roof-piece-luffy.gif",
          }}
          onLogout={onLogout}
        />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
