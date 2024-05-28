import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';

import { extractErrorMessage } from '@/utils/extractError.util';
import emailIcon from '/public/icons/email.svg';
import eyeOffIcon from '/public/icons/eye-off.svg';
import spinner from '/public/gifs/spinner.svg';
import { LoginFormInputs } from '@interfaces/auth.interface';
import { useAuth } from '@hooks/useAuth';
import { useFormatMessage } from '@hooks/useFormatMessage';
import { LOGIN_MUTATION } from '@/graphql/auth/mutations';
// import login styles
import './styles.scss';

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();
  const [login, { loading }] = useMutation(LOGIN_MUTATION);
  const { setJwtToken, setUserId } = useAuth();
  const formatMessage = useFormatMessage();
  const navigate = useNavigate();
  const [apiError, setApiError] = useState<string | null>(null);

  // Login submit handler
  const onSubmit = async (inputs: LoginFormInputs) => {
    setApiError(null);
    try {
      const response = await login({
        variables: { identifier: inputs.identifier, password: inputs.password },
      });
      if (response?.data?.login) {
        const { jwt, user } = response.data.login;
        setJwtToken(jwt);
        setUserId(user.id);
        navigate(`/account/${user.id}`);
      }
    } catch (err) {
      const errorMessage = extractErrorMessage(err as ApolloError);
      setApiError(errorMessage);
    }
  };
  return (
    <div className="login-container">
      <div className="login-sub-container">
        <div className="header">
          <h2> {formatMessage({ id: '_page.login.heading' })} </h2>
          <div className="underline-title" />
        </div>
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="input-group">
            <label>
              {' '}
              {formatMessage({ id: '_page.login.form.input.email' })}{' '}
            </label>
            <div className="input-container">
              <input
                autoComplete="off"
                {...register('identifier', {
                  required: formatMessage({
                    id: '_page.login.form.error.email.required',
                  }),
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: formatMessage({
                      id: '_page.login.form.error.email.invalid',
                    }),
                  },
                })}
              />
              <img className="user-icon" src={emailIcon} alt="username-icon" />
            </div>
            {errors.identifier && <span>{errors.identifier.message}</span>}
          </div>
          <div className="input-group">
            <label>
              {' '}
              {formatMessage({ id: '_page.login.form.input.password' })}{' '}
            </label>
            <div className="input-container">
              <input
                type="password"
                {...register('password', {
                  required: formatMessage({
                    id: '_page.login.form.error.password.required',
                  }),
                })}
              />
              <button className="password-icon" type="button">
                <img src={eyeOffIcon} alt="eye" />
              </button>
            </div>
            {errors.password && <span>{errors.password.message}</span>}
          </div>

          <button
            disabled={loading}
            className={`submit-btn`}
            type="submit"
            name="submit"
          >
            {loading ? (
              <img src={spinner} alt="eye" />
            ) : (
              <span>
                {' '}
                {formatMessage({ id: '_page.login.form.button.login' })}{' '}
              </span>
            )}
          </button>
          {apiError && <div className="api-error-message">{apiError}</div>}
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
