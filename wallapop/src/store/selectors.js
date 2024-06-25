export const getIsLogged = (state) => state.auth;
export const getListAds = (state) => state.ads;

export const getAd = (adId) => (state) => {
  const adsArray = Object.values(state.ads.data);
  console.log(state);
  console.log(state.ads);
  console.log(getListAds(adId));
  const ad = adsArray.find((ad) => ad.id === adId);
  console.log(ad);
  return ad;
};

export const getUi = (state) => state.ui;
