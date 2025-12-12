import { ReactNode } from "react";
import { AppSidebar } from "@/components/sidebar/app-sidebar";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
// import LanguageSwitcher from "@/components/LanguageSwitcher";
// import DynamicBreadcrumbs from "@/components/common/DynamicBreadcrumbs";

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  // useEffect(() => {
  //   if (!isAuthenticated) {
  //     navigate("/login");
  //   }
  // }, [isAuthenticated, navigate, user]);

  return (
    <>
      <SidebarProvider>
        <AppSidebar onLogout={() => {}} />
        <SidebarInset className="overflow-hidden">
          <div className="flex flex-col h-full">
            <header className="flex h-14 shrink-0 items-center justify-between gap-2 bg-background sticky inset-x-0 top-0 isolate z-[1] border-b">
              <div className="flex items-center gap-2 px-4">
                <SidebarTrigger className="-ml-1" />
                <Separator orientation="vertical" className="mr-2 h-4" />
                {/* <DynamicBreadcrumbs /> */}
              </div>
              {/* <div className="flex items-center pr-4">
                <LanguageSwitcher />
              </div> */}
            </header>{" "}
            <div className="flex-1 flex flex-col mx-auto p-4 w-full">
              {children}
            </div>
          </div>
        </SidebarInset>
      </SidebarProvider>
    </>
  );
}
