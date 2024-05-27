import logoutIcon from '/public/icons/logout.svg';
import logo from '/public/images/logo.svg';
import { useAuth } from '@/hooks/useAuth';
import LanguageDropdown from '../LanguageDropdown';
import { useState } from 'react';
import { LogoutModal } from '../LogoutModal';
//import header styles
import './styles.scss';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const handleLogout = () => {
    setShowLogoutModal(false);
    logout();
  };
  return (
    <header className="app-header">
      <div className="logo">
        <img src={logo} />
      </div>
      <div className="lang-logout-container">
        <LanguageDropdown />
        {isAuthenticated && (
          <button onClick={() => setShowLogoutModal(true)}>
            <img src={logoutIcon} alt="Logout" />
          </button>
        )}
      </div>
      {showLogoutModal && (
        <LogoutModal
          onCancel={() => setShowLogoutModal(false)}
          onApply={handleLogout}
        />
      )}
    </header>
  );
};
