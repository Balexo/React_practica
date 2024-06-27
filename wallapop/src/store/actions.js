import {
  AUTH_LOGOUT,
  ADS_CREATED,
  AUTH_LOGIN_PENDING,
  AUTH_LOGIN_FULFILLED,
  AUTH_LOGIN_REJECTED,
  UI_RESET_ERROR,
  ADS_LOADED_PENDING,
  ADS_LOADED_FULFILLED,
  ADS_LOADED_REJECTED,
} from "./types";

import { getAdverts, login } from "../pages/service";
import { areAdsLoaded } from "./selectors";

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

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const adsCreated = (ad) => ({
  type: ADS_CREATED,
  payload: ad,
});

export const adsLoadedPending = (ads) => ({
  type: ADS_LOADED_PENDING,
});

export const adsLoadedFulfilled = (ads) => ({
  type: ADS_LOADED_FULFILLED,
  payload: ads,
});

export const adsLoadedRejected = (ads) => ({
  type: ADS_LOADED_REJECTED,
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
export const uiResetError = () => ({
  type: UI_RESET_ERROR,
});
