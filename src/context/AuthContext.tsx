import { createContext, useContext } from 'react';

type AuthContextType = {
  setIsShowLogin: (value: boolean) => void;
};

export const AuthContext = createContext<AuthContextType>({
  setIsShowLogin: () => {},
});

export const useAuth = () => useContext(AuthContext);
