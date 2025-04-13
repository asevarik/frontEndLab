// src/components/AuthRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';
import Layout from '@/components/Layout';

interface AuthRouteProps {
    children: React.ReactElement;
    allowedRoles?: string[];
    isSideBarEnabled?:boolean;
  }
export const AuthRoute = ({ children,allowedRoles,isSideBarEnabled }: AuthRouteProps) => {
    const { user, isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Navigate to="/auth" replace />;
    if (allowedRoles && !allowedRoles.includes(user?.role ??"")) {
         return <Navigate to="/unauthorized" replace />;
  }
  if(isSideBarEnabled){
  return <Layout>
    {children}
  </Layout>
  }
  return children;
};
