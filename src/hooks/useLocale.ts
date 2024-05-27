import { useContext } from 'react';
import { LocaleContextType } from '@/interfaces/language.interface';
import { LocaleContext } from '@/context/LocaleContext';

export const useLocale = (): LocaleContextType => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within an AuthProvider');
  }
  return context;
};
