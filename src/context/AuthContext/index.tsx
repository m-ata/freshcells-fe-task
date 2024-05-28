import { AuthContextType, AuthProviderProps } from '@/interfaces/auth.interface';
import { createContext, useState, useEffect, FC } from 'react';

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!localStorage.getItem('jwt'));

  const setJwtToken = (jwt: string) => {
    localStorage.setItem('jwt', jwt);
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem('jwt');
    setIsAuthenticated(false);
  };

  const setUserId = (userId: string) => {
    localStorage.setItem('userId', userId);
  };

  const getUserId = () => {
    return localStorage.getItem('userId');
  };

  useEffect(() => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsAuthenticated(true);
    }
  }, [localStorage.getItem('jwt')]);

  return (
    <AuthContext.Provider value={{ isAuthenticated, setJwtToken, logout, setUserId, getUserId }}>
      {children}
    </AuthContext.Provider>
  );
};
