import { Link, useLocation } from 'react-router-dom';
import { routeConfig } from '../RouterConfig/routeConfig';
import { useAuth } from '../RouterConfig/Context/authContext';

const Sidebar = () => {
  const { user } = useAuth();
  const location = useLocation();

  if (!user) return null;

  const sidebarRoutes = routeConfig.filter(
    (route) =>
      route.showInSidebar &&
      (!route.allowedRoles || route.allowedRoles.includes(user.role))
  );
//TODO: can make component according to this SideBar
  return (
    <aside className="w-64 bg-white shadow p-4">
      <ul className="space-y-2">
        {sidebarRoutes.map((route) => (
          <li key={route.path}>
            <Link
              to={route.path}
              className={`block p-2 rounded ${
                location.pathname === route.path ? 'bg-blue-100' : ''
              }`}
            >
              {route.label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
