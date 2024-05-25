export interface AuthContextType {
  isAuthenticated: boolean;
  // eslint-disable-next-line no-unused-vars
  login: (token: string) => void;
  logout: () => void;
}
