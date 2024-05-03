import {
  client,
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../api/client";
import storage from "../utils/storage";

export const login = (credentials, persist = true) => {
  return client.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    if (persist) {
      storage.set("auth", accessToken);
    }
  });
};

export const getAdverts = () => {
  return client.get("/api/v1/adverts");
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};
