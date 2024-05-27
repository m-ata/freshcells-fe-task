import { FC } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useSelector } from 'react-redux';
import { RootState } from '@redux/reducers/rootReducer';
import { RouteProps } from '@interfaces/routes.interface';

const PublicRoute: FC<RouteProps> = ({ component }) => {
  const { isAuthenticated } = useAuth();
  const user = useSelector((state: RootState) => state.user);

  const location = useLocation();

  if (isAuthenticated) {
    return (
      <Navigate to={`/account/${user.user.id}`} state={{ from: location }} />
    );
  }

  return <>{component}</>;
};

export default PublicRoute;
