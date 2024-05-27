import { FC, ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { PUBLIC_ROUTES } from '@/constants';

interface ProtectedRouteProps {
  component: ReactElement;
}

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component }) => {
  const { isAuthenticated } = useAuth();
  const { login } = PUBLIC_ROUTES;

  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to={login} state={{ from: location }} />;
  }

  return <>{component}</>;
};

export default ProtectedRoute;
