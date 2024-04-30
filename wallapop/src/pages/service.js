import { client, setAuthorizationHeader } from "../api/client";
import storage from "../utils/storage";

export const login = (credentials) => {
  return client.post("api/auth/login", credentials).then(({ accesToken }) => {
    setAuthorizationHeader(accesToken);
    storage.set("auth", accesToken);
  });
};
