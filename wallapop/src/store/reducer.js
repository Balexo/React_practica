import { AUTH_LOGIN, AUTH_LOGOUT, ADS_CREATED, ADS_LOADED } from "./types";

export const defaultState = {
  auth: false,
  ads: [],
};

export function ads(state = defaultState.ads, action) {
  switch (action.type) {
    case ADS_CREATED:
      return [...state.ads, action.payload];
    case ADS_LOADED:
      return action.payload;
    default:
      return state;
  }
}

export function auth(state = defaultState.auth, action) {
  switch (action.type) {
    case AUTH_LOGIN:
      return true;
    case AUTH_LOGOUT:
      return false;
    default:
      return state;
  }
}

// const reducer = combineReducers({ auth, ads });

// export default reducer;
