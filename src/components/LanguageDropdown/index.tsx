import './styles.scss';
import { useMemo } from 'react';
import { useLocale } from '@/hooks/useLocale';
import { locales } from '@/constants';
import { useFormatMessage } from '@/hooks/useFormatMessage';

const LanguageDropdown: React.FC = () => {
  const { language, setLocale } = useLocale();
  const formatMessage = useFormatMessage();

  // memoized selectedLocale based on the current selected language
  const selectedLocale = useMemo(() => {
    return locales.find((locale) => locale.locale === language);
  }, [language]);

  return (
    <div className="sl-nav">
      <img src={`/public/flags/${selectedLocale?.locale}.svg`} alt="flag" />
      <ul>
        <li>
          <b>
            {' '}
            {formatMessage({
              id: selectedLocale?.language,
            })}{' '}
          </b>
          <i className="fa fa-angle-down" aria-hidden="true" />
          <div className="triangle" />
          <ul>
            {locales.map((lang) => (
              <li key={lang.locale} onClick={() => setLocale(lang.locale)}>
                <img
                  src={`/public/flags/${lang.locale}.svg`}
                  alt={formatMessage({ id: lang.language })}
                />
                <span className={`${language === lang.locale ? 'active' : ''}`}>
                  {formatMessage({ id: lang.language })}
                </span>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default LanguageDropdown;
