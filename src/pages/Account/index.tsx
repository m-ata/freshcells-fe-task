import { useParams } from 'react-router-dom';
import './styles.scss';
import { useUser } from '@hooks/useUser';
import Loader from '@components/Loader';
import { useFormatMessage } from '@hooks/useFormatMessage';

const AccountPage = () => {
  const formatMessage = useFormatMessage();
  const { userId } = useParams();

  const { user, loading, error } = useUser(userId as string);

  if (loading) return <Loader />;

  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <div className="account-page">
      <h2> {formatMessage({ id: '_page.account.heading' })} </h2>
      <div className="account-field">
        <label> {formatMessage({ id: '_page.account.field.firstName' })} </label>
        <input type="text" value={user?.firstName || ''} readOnly />
      </div>
      <div className="account-field">
        <label> {formatMessage({ id: '_page.account.field.firstName' })} </label>
        <input type="text" value={user?.lastName || ''} readOnly />
      </div>
    </div>
  );
};

export default AccountPage;
