import { useParams } from 'react-router-dom';
import './styles.scss';
import { useUser } from '@/hooks/useUser';
import Loader from '@/components/Loader';

const AccountPage = () => {
  const { userId } = useParams();

  const { user, loading, error } = useUser(userId as string);

  if (loading) return <Loader />;

  if (error) return <div className="error-message">Error: {error.message}</div>;

  return (
    <div className="account-page">
      <h2>Account Information</h2>
      <div className="account-field">
        <label>First Name</label>
        <input type="text" value={user?.firstName || ''} readOnly />
      </div>
      <div className="account-field">
        <label>Last Name</label>
        <input type="text" value={user?.lastName || ''} readOnly />
      </div>
    </div>
  );
};

export default AccountPage;
