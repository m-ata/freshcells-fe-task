/* eslint-disable no-unused-vars */
export interface LoginFormInputs {
  identifier: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  setJwtToken: (jwt: string) => void;
  logout: () => void;
  setUserId: (userId: string) => void;
  getUserId: () => string | null;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface GraphQLErrorExtension {
  exception?: {
    data?: {
      data?: {
        messages?: { message: string }[];
      }[];
    }
  };
}
