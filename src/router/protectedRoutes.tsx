import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PUBLIC_ROUTES } from '@/constants';
import { RouteProps } from '@interfaces/routes.interface';

const ProtectedRoute: FC<RouteProps> = ({ component }) => {
  const { isAuthenticated } = useAuth();
  const { login } = PUBLIC_ROUTES;

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={login} state={{ from: location }} />;
  }

  return <>{component}</>;
};

export default ProtectedRoute;
