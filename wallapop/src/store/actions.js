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
} from "./types";

import { getAdverts, login } from "../pages/service";
import { areAdsLoaded } from "./selectors";
import { newAd, deleteAd } from "../pages/service";

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
  return async function (dispatch) {
    try {
      dispatch(authLoginPending());
      await login(credentials);
      dispatch(authLoginFulfilled());
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
  return async function (dispatch) {
    try {
      dispatch(adsCreatedPending());
      const adCreated = await newAd(ad);
      dispatch(adsCreatedFulfilled(adCreated));
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
  return async function (dispatch, getState) {
    if (areAdsLoaded(getState())) {
      return;
    }
    try {
      dispatch(adsLoadedPending());
      const ads = await getAdverts();
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
  return async function (dispatch) {
    try {
      dispatch(adsDeletedPending());
      await deleteAd(advertId);
      dispatch(adsDeletedFulfilled(advertId));
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
