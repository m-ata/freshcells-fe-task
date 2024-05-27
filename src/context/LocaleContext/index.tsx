import {
  LocaleContextType,
  LocaleProviderProps,
} from '@/interfaces/language.interface';
import { getLanguageConfig } from '@/utils/localeConfig.util';
import { createContext, FC, useState } from 'react';
import { IntlProvider } from 'react-intl';

export const LocaleContext = createContext<LocaleContextType | null>(null);

const LocaleProvider: FC<LocaleProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<string>(
    localStorage.getItem('lang') || 'en-US',
  );
  const config = getLanguageConfig(language);
  const defaultConfig = getLanguageConfig('en-US');

  const setLocale = (lang: string) => {
    setLanguage(lang);
    localStorage.setItem('lang', lang);
  };

  const getLocale = () => localStorage.getItem('lang') || 'en-US';

  return (
    <LocaleContext.Provider value={{ language, setLocale, getLocale }}>
      <IntlProvider
        locale={language}
        messages={{ ...defaultConfig?.locale, ...config?.locale }}
        defaultLocale={defaultConfig?.code}
      >
        {children}
      </IntlProvider>
    </LocaleContext.Provider>
  );
};

export default LocaleProvider;
