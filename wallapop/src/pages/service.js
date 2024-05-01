import {
  client,
  setAuthorizationHeader,
  removeAuthorizationHeader,
} from "../api/client";
import storage from "../utils/storage";

export const login = (credentials) => {
  return client.post("api/auth/login", credentials).then(({ accessToken }) => {
    setAuthorizationHeader(accessToken);
    storage.set("auth", accessToken);
  });
};

export const getAdverts = () => {
  return client.get("/api/v1/adverts").catch((error) => {
    if (error.response) {
      // La solicitud se hizo y el servidor respondió con un código de estado
      // que cae fuera del rango de 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // La solicitud se hizo pero no se recibió ninguna respuesta
      console.log(error.request);
    } else {
      // Algo sucedió en la configuración de la solicitud que provocó un error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });
};

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};
