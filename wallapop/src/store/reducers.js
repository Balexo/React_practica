import { AUTH_LOGIN, AUTH_LOGOUT, ADS_CREATED, ADS_LOADED } from "./types";

export const defaultState = {
  auth: false,
  ads: [],
};

export default function reducer(state = defaultState, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return { auth: true, ads: state.ads };
    case AUTH_LOGOUT:
      return { auth: false, ads: state.ads };
    case ADS_CREATED:
      return { auth: state.auth, ads: [...state.ads, action.payload] };
    case ADS_LOADED:
      return { auth: state.auth, ads: action.payload };
    default:
      return defaultState;
  }
}
