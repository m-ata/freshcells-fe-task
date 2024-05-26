import emailIcon from '/public/icons/email.svg';
import eyeOffIcon from '/public/icons/eye-off.svg';

import './styles.scss';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="header">
          <h2> Login to your account </h2>
          <div className="underline-title" />
        </div>
        <form className="form">
          <div className="input-group">
            <label>Email</label>
            <input
              autoComplete="off"
              className="form-content"
              type="text"
              name="username"
              required
            />
            <img className="user-icon" src={emailIcon} alt="username-icon" />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              className="form-content"
              type={'password'}
              name="password"
              required
              autoComplete="password"
            />
            <button className="password-icon" type="button">
              <img src={eyeOffIcon} alt="eye" />
            </button>
          </div>

          <button className={`submit-btn`} type="submit" name="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
