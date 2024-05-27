export interface LoginFormInputs {
  identifier: string;
  password: string;
}

export interface AuthContextType {
  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  setJwtToken: (jwt: string) => void;
  logout: () => void;
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
