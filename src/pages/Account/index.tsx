import './styles.scss';

const AccountPage = () => {

  return (
    <div className="account-page">
      <h2>Account Information</h2>
      <div className="account-field">
        <label>First Name</label>
        <input type="text" value={'Muhammad'} readOnly />
      </div>
      <div className="account-field">
        <label>Last Name</label>
        <input type="text" value={'Ata'} readOnly />
      </div>
    </div>
  );
};

export default AccountPage;
