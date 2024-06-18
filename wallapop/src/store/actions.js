import { AUTH_LOGIN, AUTH_LOGOUT, ADS_CREATED, ADS_LOADED } from "./types";

export const authLogin = () => ({
  type: AUTH_LOGIN,
});

export const authLogout = () => ({
  type: AUTH_LOGOUT,
});

export const adsCreated = (ad) => ({
  type: ADS_CREATED,
  payload: ad,
});

export const adsLoaded = (ads) => ({
  type: ADS_LOADED,
  payload: ads,
});
