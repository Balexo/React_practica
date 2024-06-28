import { client } from "../api/client";

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
    photo: advert.photo || null,
  };
  return client.post("/api/v1/adverts", dataNewAdd, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const tagsAdvert = () => {
  return client.get("/api/v1/adverts/tags");
};

export const deleteAd = (advertId) => {
  return client.delete(`/api/v1/adverts/${advertId}`);
};
