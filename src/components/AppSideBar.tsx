import { Link } from "react-router"
import { routeConfig } from "@/RouterConfig/routeConfig";
import { useAuth } from "@/RouterConfig/Context/authContext";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "./ui/sidebar";


export function AppSidebar() {
  const { user } = useAuth();
  const sidebarRoutes = routeConfig.filter(
    (route) =>
      route.showInSidebar &&
      (!route.allowedRoles || route.allowedRoles.includes(user?.role??"user"))
  );
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>FrontEndLab</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {sidebarRoutes.map((item) => (
                <SidebarMenuItem key={item.path}>
                  <SidebarMenuButton asChild>
                    <Link to={item.path}>
                      <span>{item.label}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
