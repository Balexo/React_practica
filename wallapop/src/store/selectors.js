export const getIsLogged = (state) => state.auth;
export const getListAds = (state) => state.ads.data;
export const getAds = (state) => state.ads.data;
export const areAdsLoaded = (state) => state.ads.loaded;

export const getAd = (adId) => (state) => {
  const ad = state.ads.find((ad) => ad.id === adId);
  console.log(state);
  console.log(ad);
  return ad;
};

export const getUi = (state) => state.ui;
