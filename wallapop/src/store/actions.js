import {
  AUTH_LOGOUT,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  UI_RESET_ERROR,
  ADS_LOADED_PENDING,
  ADS_LOADED_FULFILLED,
  ADS_LOADED_REJECTED,
  ADS_CREATED_PENDING,
  ADS_CREATED_FULFILLED,
  ADS_CREATED_REJECTED,
  ADS_DELETED_PENDING,
  ADS_DELETED_FULFILLED,
  ADS_DELETED_REJECTED,
  ADS_TAGS_FULFILLED,
  ADS_TAGS_PENDING,
  ADS_TAGS_REJECTED,
} from "./types";

import { areAdsLoaded } from "./selectors";

//LOGIN

export const authLoginPending = () => ({
  type: AUTH_LOGIN_PENDING,
});

export const authLoginFulfilled = () => ({
  type: AUTH_LOGIN_FULFILLED,
});

export const authLoginRejected = (error) => ({
  type: AUTH_LOGIN_REJECTED,
  payload: error,
  error: true,
});

export const authLogin = (credentials) => {
  return async function (dispatch, _getState, { services: { auth }, router }) {
    try {
      dispatch(authLoginPending());
      await auth.login(credentials);
      dispatch(authLoginFulfilled());
      const to = router.state.location.state?.from || "/auth/login";
      router.navigate(to, { replace: true });
    } catch (error) {
      dispatch(authLoginRejected(error));
    }
  };
};

//LOGOUT

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

//ADSCREATED

export const adsCreatedPending = () => ({
  type: ADS_CREATED_PENDING,
});

export const adsCreatedFulfilled = (ad) => ({
  type: ADS_CREATED_FULFILLED,
  payload: ad,
});

export const adsCreatedRejected = (error) => ({
  type: ADS_CREATED_REJECTED,
  payload: error,
  error: true,
});

export const createAds = (ad) => {
  return async function (dispatch, _getState, { services, router }) {
    try {
      dispatch(adsCreatedPending());
      const adCreated = await services.adverts.newAd(ad);
      dispatch(adsCreatedFulfilled(adCreated));
      router.navigate(`/v1/adverts/${adCreated.id}`);
      return adCreated;
    } catch (error) {
      dispatch(adsCreatedRejected(error));
      throw error;
    }
  };
};

//ADSLOADED

export const adsLoadedPending = () => ({
  type: ADS_LOADED_PENDING,
});

export const adsLoadedFulfilled = (ads) => ({
  type: ADS_LOADED_FULFILLED,
  payload: ads,
});

export const adsLoadedRejected = (error) => ({
  type: ADS_LOADED_REJECTED,
  payload: error,
  error: true,
});

export const loadAds = () => {
  return async function (dispatch, getState, { services }) {
    if (areAdsLoaded(getState())) {
      return;
    }
    try {
      dispatch(adsLoadedPending());
      const ads = await services.adverts.getAdverts();
      dispatch(adsLoadedFulfilled(ads));
    } catch (error) {
      dispatch(adsLoadedRejected(error));
      throw error;
    }
  };
};

//ADS DELETED
export const adsDeletedPending = () => ({
  type: ADS_DELETED_PENDING,
});

export const adsDeletedFulfilled = (adId) => ({
  type: ADS_DELETED_FULFILLED,
  payload: adId,
});

export const adsDeletedRejected = (error) => ({
  type: ADS_DELETED_REJECTED,
  payload: error,
  error: true,
});

export const deletedAd = (advertId) => {
  return async function (dispatch, _getState, { services, router }) {
    try {
      dispatch(adsDeletedPending());
      await services.adverts.deleteAd(advertId);
      dispatch(adsDeletedFulfilled(advertId));
      router.navigate("/v1/adverts");
    } catch (error) {
      dispatch(adsDeletedRejected(error));
      throw error;
    }
  };
};

//RESET ERROR

export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});

//TAGS
export const tagsPending = () => ({
  type: ADS_TAGS_PENDING,
});

export const tagsFulfilled = (tags) => ({
  type: ADS_TAGS_FULFILLED,
  payload: tags,
});

export const tagsRejected = (error) => ({
  type: ADS_TAGS_REJECTED,
  payload: error,
  error: true,
});

export const loadTags = () => {
  return async function (dispatch, _getState, { services }) {
    try {
      dispatch(tagsPending());
      const tags = await services.adverts.tagsAdvert();
      dispatch(tagsFulfilled(tags));
    } catch (error) {
      dispatch(tagsRejected());
      throw error;
    }
  };
};
