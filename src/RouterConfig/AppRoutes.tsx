import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { routeConfig } from './routeConfig';
import { AuthRoute } from './Components/AuthRoute';

const router = createBrowserRouter(
  routeConfig.map(route => {
    const isProtected = route.allowedRoles !== undefined;

    return {
      path: route.path,
      element: isProtected ? (
        <AuthRoute allowedRoles={route.allowedRoles}>
          {route.element}
        </AuthRoute>
      ) : (
        route.element
      ),
    };
  })
);

export const AppRoutes = () => <RouterProvider router={router} />;
