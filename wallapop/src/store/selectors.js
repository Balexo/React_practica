export const getIsLogged = (state) => state.auth;
export const getListAds = (state) => state.ads.data;
export const getAds = (state) => state.ads.data;
export const areAdsLoaded = (state) => state.ads.loaded;
export const getListTags = (state) => state.tags;

export const getAd = (adId) => (state) => {
  const ad = state.ads.data.find((ad) => ad.id === adId);
  console.log(state.ads.data);
  console.log(ad);
  return ad;
};

export const getUi = (state) => state.ui;
