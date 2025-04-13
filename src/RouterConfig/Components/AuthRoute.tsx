// src/components/AuthRoute.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

interface AuthRouteProps {
    children: React.ReactElement;
    allowedRoles?: string[];
  }
export const AuthRoute = ({ children,allowedRoles }: AuthRouteProps) => {
    const { user, isAuthenticated } = useAuth();
    if (!isAuthenticated) return <Navigate to="/login" replace />;
    if (allowedRoles && !allowedRoles.includes(user?.role ??"")) {
         return <Navigate to="/unauthorized" replace />;
  }
  return children;
};
