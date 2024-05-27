import { useFormatMessage } from '@/hooks/useFormatMessage';
import { LogoutModalProps } from '@/interfaces/logoutModal.interface';
import logoutIcon from '/public/icons/logout.svg';
// import logout modal style
import './styles.scss';

export const LogoutModal: React.FC<LogoutModalProps> = ({
  onCancel,
  onApply,
}) => {
  const formatMessage = useFormatMessage();

  return (
    <>
      <section className="modal">
        <div className="header">
          <div className="row">
            <span>
              <img src={logoutIcon} width="50px" height="50px" alt="user" />
              <h2>
                {' '}
                {formatMessage({ id: '_component.logoutModal.heading' })}{' '}
              </h2>
            </span>
            <button className="btn-close" onClick={onCancel}>
              ⨉
            </button>
          </div>
          <div className="horizontal-line" />
        </div>

        <div>
          <p>{formatMessage({ id: '_component.logoutModal.message' })}</p>
        </div>

        <div className="footer">
          <div className="horizontal-line" />
          <div className="action-buttons">
            <button className="cancel" onClick={onCancel}>
              {formatMessage({ id: '_component.confirmModal.button.cancel' })}
            </button>
            <button className="apply" onClick={onApply}>
              {formatMessage({ id: '_component.confirmModal.button.apply' })}
            </button>
          </div>
        </div>
      </section>

      <div className="overlay" onClick={onCancel} />
    </>
  );
};
