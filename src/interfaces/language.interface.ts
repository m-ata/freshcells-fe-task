export interface LanguageConfig {
  code: string;
  locale: Record<string, string>;
}

export interface LocaleContextType {
  language: string;
  // eslint-disable-next-line no-unused-vars
  setLocale: (lang: string) => void;
  getLocale: () => string;
}

export interface LocaleProviderProps {
  children: React.ReactNode;
}
