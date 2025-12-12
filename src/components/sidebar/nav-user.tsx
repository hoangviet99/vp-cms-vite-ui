"use client";

import { useTypedTranslation } from "@/hooks/useTypedTranslation";
import { ChevronsUpDownIcon, LogOutIcon, UserIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";
import { useNavigate } from "react-router-dom";
import { RouteAppPath, RouteUserPath } from "@/constant/RouteConst";

export function NavUser({
  user: defaultUser,
  onLogout,
}: {
  user?: {
    name: string;
    email: string;
    avatar: string;
  };
  onLogout: () => void;
}) {
  const { t } = useTypedTranslation();
  // const navigate = useNavigate();
  const { isMobile } = useSidebar();
  // const dispatch = useDispatch();
  // const [doLogout, { isSuccess }] = useLogoutMutation();
  // const { theme, setTheme } = useTheme();

  // const handleLogout = async () => {
  //   await doLogout();
  // };

  // useEffect(() => {
  //   if (isSuccess) {
  //     dispatch(logout());
  //     onLogout();
  //   }
  // }, [isSuccess]);

  // Use store user if available, otherwise use default user
  const userName = defaultUser?.name || "";
  const navigate = useNavigate();
  const userEmail = defaultUser?.email || "";
  const userAvatar = defaultUser?.avatar || "";

  // Get initials for avatar fallback
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const initials = getInitials(userName);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
              <Avatar className="h-8 w-8 rounded-lg">
                {userAvatar ? (
                  <AvatarImage
                    className="object-cover"
                    src={userAvatar}
                    alt={userName}
                  />
                ) : null}
                <AvatarFallback className="rounded-lg">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">{userName}</span>
                <span className="truncate text-xs">{userEmail}</span>
              </div>
              <ChevronsUpDownIcon className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}>
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  {userAvatar ? (
                    <AvatarImage
                      className="object-cover"
                      src={userAvatar}
                      alt={userName}
                    />
                  ) : null}
                  <AvatarFallback className="rounded-lg">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">{userName}</span>
                  <span className="truncate text-xs">{userEmail}</span>
                </div>
              </div>
            </DropdownMenuLabel>

            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() =>
                navigate(
                  `/${RouteAppPath.User}/${RouteUserPath.Users}/${RouteUserPath.UserProfile}`
                )
              }>
              <UserIcon className="mr-2 h-4 w-4" />
              <span>{t("breadcrumb.profile")}</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            // onClick={handleLogout}
            >
              <LogOutIcon className="mr-2 h-4 w-4" />
              <span>{t("common.logout")}</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
