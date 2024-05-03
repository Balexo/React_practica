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

export const logout = () => {
  return Promise.resolve().then(() => {
    removeAuthorizationHeader();
    storage.remove("auth");
  });
};

export const getAdverts = () => {
  return client.get("/api/v1/adverts");
};

export const getUniqueAdvert = (advertId) => {
  return client.get(`/api/v1/adverts/${advertId}`);
};

export const newAd = (advert) => {
  const dataNewAdd = {
    name: advert.name,
    sale: advert.sale,
    price: advert.price,
    tags: [advert.tags],
    photo: advert.photo,
  };
  console.log("Esto es el advert que le llega a service", advert);
  console.log("Esto es newAdvert transformado en service", dataNewAdd);
  return client.post("/api/v1/adverts", dataNewAdd);
};
