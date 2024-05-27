import { LanguageConfig } from "@/interfaces/language.interface";
import germanLocales from "../translations/de-DE.json";
import englishLocales from "../translations/en-US.json";
import polishLocales from "../translations/pl-PL.json";
// all available languages
const config: Record<string, LanguageConfig> = {
  de: {
    code: "de-DE",
    locale: germanLocales,
  },
  en: {
    code: "en-US",
    locale: englishLocales,
  },
  pl: {
    code: "pl-PL",
    locale: polishLocales,
  },
};

/**
 * Helper function to return language from above config
 *
 * @param {*} language
 */
export const getLanguageConfig = (language: string): LanguageConfig => {
  const lang = language?.substring(0, 2);
  return config[lang];
};
