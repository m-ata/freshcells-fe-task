import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from '../constants';
import ProtectedRoute from './ProtectedRoute';
import { Layout } from '@/layout/Layout';

const LoginPage = lazy(() => import('@pages/Login'));
const AccountPage = lazy(() => import('@pages/Account'));

const AppRouter = () => {
  const { login, home } = PUBLIC_ROUTES;
  const { account } = PRIVATE_ROUTES;
  return (
    <BrowserRouter>
      <Routes>
        <Route path={login} element={<LoginPage />} />
        <Route path={home} element={<Layout />}>
        <Route path={account} element={<ProtectedRoute component={<AccountPage />} />} />
        </Route>
        <Route path="*" element={<ProtectedRoute component={<AccountPage />} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
