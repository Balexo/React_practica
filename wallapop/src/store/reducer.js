import {
  AUTH_LOGOUT,
  ADS_CREATED_FULFILLED,
  AUTH_LOGIN_FULFILLED,
  ADS_LOADED_FULFILLED,
} from "./types";

export const defaultState = {
  auth: false,
  ads: {
    loaded: false,
    data: [],
  },
  ui: {
    pending: false,
    error: null,
  },
};

export function ads(state = defaultState.ads, action) {
  switch (action.type) {
    case ADS_CREATED_FULFILLED:
      return {
        ...state,
        data: [...state.data, action.payload],
      };
    case ADS_LOADED_FULFILLED:
      return { ...state, loaded: true, data: action.payload };
    default:
      return state;
  }
}

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN_FULFILLED:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

export function ui(state = defaultState.ui, action) {
  if (action.error) {
    return { ...state, pending: false, error: action.payload };
  }
  if (action.type === "UI_RESET_ERROR") {
    return { ...state, error: null };
  }
  if (action.type.endsWith("/pending")) {
    return { ...state, pending: true };
  }
  if (action.type.endsWith("/fulfilled")) {
    return { ...state, pending: false, error: null };
  }
  return state;
}
