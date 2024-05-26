import { ReactNode } from "react";

export interface LoginFormInputs {
  identifier: string;
  password: string;
}

export interface Auth {
  jwt: string;
  user: {
    id: string;
  };
}

export interface AuthContextType {
  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  setJwtToken: (jwt: string) => void;
  logout: () => void;
}

export interface AuthProviderProps {
  children: ReactNode;
}
