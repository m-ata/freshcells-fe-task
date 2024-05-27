import logoutIcon from '/public/icons/logout.svg';
import { useAuth } from '@/hooks/useAuth';

import './styles.scss';
import LanguageDropdown from '../LanguageDropdown';
import { useFormatMessage } from '@/hooks/useFormatMessage';

export const Header = () => {
  const { isAuthenticated, logout } = useAuth();
  const formatMessage = useFormatMessage();
  return (
    <header className="app-header">
      <div className="heading">
        {formatMessage({ id: '_component.header.heading' })}
      </div>
      <div className="lang-logout-container">
        <LanguageDropdown />
        {isAuthenticated && (
          <button onClick={logout} className="btn btn-primary">
            <img src={logoutIcon} alt="Logout" />
          </button>
        )}
      </div>
    </header>
  );
};
