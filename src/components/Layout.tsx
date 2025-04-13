import { AppSidebar } from "@/components/AppSideBar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { ReactNode } from "react";
interface LayoutProps{
    children:ReactNode;
}
const Layout = ({children}:LayoutProps) => {
  return (
    <SidebarProvider>
    <div className="flex">
        <AppSidebar />
      <main className="p-6 flex-1">
        <SidebarTrigger/>
        {children}
      </main>
    </div>
    </SidebarProvider>
  );
};

export default Layout;
