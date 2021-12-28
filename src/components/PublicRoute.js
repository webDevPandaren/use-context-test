import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import AuthContext from '../context/auth-context';

export const PublicRoute = ({ children, restricted = false }) => {
  const { isLoggedIn } = useContext(AuthContext);
  const shouldRedirect = isLoggedIn && restricted;
  return shouldRedirect ? <Navigate to="/about" /> : children;
};
