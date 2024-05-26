import logoutIcon from '/public/icons/logout.svg';
import { useAuth } from '@/context/AuthContext/useAuth';

import './styles.scss';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  return (
    <header className="app-header">
      <div className="heading">Freshcell Task</div>
      <div>
        {isAuthenticated && (
          <button onClick={logout} className="btn btn-primary">
            <img src={logoutIcon} alt="Logout" />
          </button>
        )}
      </div>
    </header>
  );
};
