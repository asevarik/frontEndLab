import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

type JwtPayload = {
  id: string;
  role: string;
  exp: number;
  iat: number;
  // add other claims if needed
};
enum Cookie{
    
}
const useCookieParser = () => {
  const token = Cookies.get('access_token'); // name of the cookie storing JWT

  if (!token) return null;

  try {
    const decoded = jwtDecode<JwtPayload>(token);
    return decoded;
  } catch (err) {
    console.error('Invalid JWT token', err);
    return null;
  }
};
