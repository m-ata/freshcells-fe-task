import { AuthContextType } from '@/interfaces/auth.interface';
import { useContext } from 'react';
import { AuthContext } from '.';

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
