export const getIsLogged = (state) => state.auth;
export const getListAds = (state) => state.ads;

export const getAd = (adId) => (state) =>
  getListAds(state).find((ad) => ad.id === Number(adId));
