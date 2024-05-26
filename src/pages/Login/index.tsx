import { useForm } from 'react-hook-form';
import emailIcon from '/public/icons/email.svg';
import eyeOffIcon from '/public/icons/eye-off.svg';
import spinner from '/public/gifs/spinner.svg';
import { LoginFormInputs } from '@/interfaces/auth.interface';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext/useAuth';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '@/graphql/auth/mutations';
// import styles
import './styles.scss';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const { setJwtToken } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (inputs: LoginFormInputs) => {
    try {
      const response = await login({
        variables: { identifier: inputs.identifier, password: inputs.password },
      });
      if (response?.data?.login) {
        const { jwt, user } = response.data.login;
        setJwtToken(jwt);
        navigate(`/account/${user.id}`);
      }
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="header">
          <h2> Login to your account </h2>
          <div className="underline-title" />
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>Email</label>
            <input
              {...register('identifier', {
                required: 'Email is required',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Invalid email address',
                },
              })}
            />
            <img className="user-icon" src={emailIcon} alt="username-icon" />
            {errors.identifier && <span>{errors.identifier.message}</span>}
          </div>
          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              {...register('password', { required: 'Password is required' })}
            />
            <button className="password-icon" type="button">
              <img src={eyeOffIcon} alt="eye" />
            </button>
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button
            disabled={loading}
            className={`submit-btn`}
            type="submit"
            name="submit"
          >
            {loading ? <img src={spinner} alt="eye" /> : <span>Login</span>}
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
