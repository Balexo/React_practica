export const getIsLogged = (state) => state.auth;
export const getListAds = (state) => state.ads;

export const getAd = (adId) => (state) => {
  const ad = state.ads.find((ad) => ad.id === adId);
  console.log(state);
  console.log(ad);
  return ad;
};

export const getUi = (state) => state.ui;
