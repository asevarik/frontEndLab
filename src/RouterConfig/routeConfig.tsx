import Auth from "@/Pages/Auth/Auth";
import AdminPanel from "../Pages/Admin/Admin";
import Home from "../Pages/Home/Home";
import Unauthorized from "../Pages/UnAuthorized/UnAuthorized";


export type Role = 'user' | 'admin';

export interface AppRoute {
  path: string;
  element: React.ReactElement;
  label?: string;             // For sidebar
  showInSidebar?: boolean;    // Hide sidebar-only routes like login
  allowedRoles?: Role[];      // Who can see this?
}

export const routeConfig: AppRoute[] = [
  {
    path: '/auth',
    element: <Auth />,
    showInSidebar: false,
  },
  {
    path: '/unauthorized',
    element: <Unauthorized />,
    showInSidebar: false,
  },
  {
    path: '/',
    element: <Home />,
    label: 'Home',
    showInSidebar: true,
    allowedRoles: ['user', 'admin'],
  },
  {
    path: '/admin',
    element: <AdminPanel />,
    label: 'Admin Panel',
    showInSidebar: true,
    allowedRoles: ['admin'],
  },
];
