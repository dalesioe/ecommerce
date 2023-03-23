import { Token } from "@/api";

export async function AuthFetch(url, params) {
  const tokenCrtl = new Token();
  const token = tokenCrtl.getToken();

  const logout = () => {
    tokenCrtl.removeToken();
    window.location.replace("/");
  };

  if (!token) {
    logout();
  } else {
    if (tokenCrtl.hasExpired(token)) {
      logout();
    } else {
      const paramsTemp = {
        ...params,
        headers: {
          ...params?.headers,
          Authorization: `bearer ${token}`,
        },
      };
      try {
        return await fetch(url, paramsTemp);
      } catch (error) {
        throw error;
      }
    }
  }
}
