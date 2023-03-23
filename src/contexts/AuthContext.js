import { createContext, useEffect, useState } from "react";
import { Token, User } from "@/api";

const tokenCtrl = new Token();
const useCtrl = new User();

export const AuthContext = createContext();

export function AuthProvider(props) {
  const { children } = props;
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const token = tokenCtrl.getToken();
      console.log(token);
      if (!token) {
        logout();
        setLoading(false);
        return;
      }
      if (tokenCtrl.hasExpired(token)) {
        logout();
      } else {
        await login(token);
      }
    })();
    return () => {};
  }, []);

  const login = async (token) => {
    try {
      //SETEO EL TOKEN EN LOCALSTORAGE
      tokenCtrl.setToken(token);
      //SETEO TOKEN EN EL ESTADO
      setToken(token);
      //OBTENGO EL USUARIO Y LO SETEO EN EL ESTADO
      const response = await useCtrl.getMe();
      setUser(response);
      //LOADING EN FALSE
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const logout = () => {
    tokenCtrl.removeToken();
    setToken(null);
    setUser(null);
  };

  const updateUser = (key, value) => {
    setUser({
      ...user,
      [key]: value,
    });
  };

  const data = {
    accessToken: token,
    user,
    login,
    logout,
    updateUser,
  };
  if (loading) return null;
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}
