import { useContext } from 'react';
import AuthContext from '../context/auth-context';
import { Navigate } from 'react-router-dom';

export const PrivateRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);
  return isLoggedIn ? children : <Navigate to="/register" />;
};
