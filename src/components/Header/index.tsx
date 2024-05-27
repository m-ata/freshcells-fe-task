import logoutIcon from '/public/icons/logout.svg';
import { useAuth } from '@/hooks/useAuth';

import './styles.scss';
import LanguageDropdown from '../LanguageDropdown';
import { useFormatMessage } from '@/hooks/useFormatMessage';
import { useState } from 'react';
import { LogoutModal } from '../LogoutModal';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const [showLogoutModal, setShowLogoutModal] = useState<boolean>(false);
  const formatMessage = useFormatMessage();
  const handleLogout = () => {
    setShowLogoutModal(false);
    logout();
  };
  return (
    <header className="app-header">
      <div className="heading">
        {formatMessage({ id: '_component.header.heading' })}
      </div>
      <div className="lang-logout-container">
        <LanguageDropdown />
        {isAuthenticated && (
          <button
            onClick={() => setShowLogoutModal(true)}
            className="btn btn-primary"
          >
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
