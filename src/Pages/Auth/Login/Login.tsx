// src/pages/Login.tsx
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../RouterConfig/Context/authContext';

const Login = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) return <Navigate to="/" replace />;

  const handleLogin = async () => {
    await fetch('/api/login', {
      method: 'POST',
      credentials: 'include',
    });
    location.reload(); // re-fetch user from /api/me
  };

  return (
    <div>
      <h2>Login</h2>
      <button onClick={handleLogin}>Login with Cookie</button>
    </div>
  );
};

export default Login;
