import {
  adsCreatedFulfilled,
  adsDeletedFulfilled,
  adsLoadedFulfilled,
  authLoginFulfilled,
  authLogout,
} from "../actions";
import { auth, defaultState, ads } from "../reducer";
const lifestyle = "lifestyle";

describe("auth", () => {
  test("should manage 'AUTH_LOGIN_FULFILLED'action", () => {
    const state = defaultState.auth;
    const action = authLoginFulfilled();
    expect(auth(state, action)).toBe(true);
  });

  test("should manage 'AUTH_LOGOUT' action", () => {
    const state = defaultState.auth;
    const action = authLogout();
    expect(auth(state, action)).toBe(false);
  });
  test("should manage 'ANY ACTION' action", () => {
    const state = defaultState.auth;
    const action = { type: "ANY" };
    expect(auth(state, action)).toBe(state);
  });
  test("should manage 'ANY' action when estate is not defined", () => {
    const state = undefined;
    const action = { type: "ANY" };
    expect(auth(state, action)).toBe(defaultState.auth);
  });
});

describe("ads", () => {
  test("should manage 'ADS_CREATED_FULFILLED' action", () => {
    const state = defaultState.ads;

    const newAd = {
      id: "1",
      name: "mesa",
      photo: "null",
      price: 4,
      sale: true,
      tags: [lifestyle],
    };
    const action = adsCreatedFulfilled(newAd);
    const expectedState = {
      ...state,
      data: [...state.data, newAd],
    };
    expect(ads(state, action)).toEqual(expectedState);
  });
  test("should manage 'ADS_DELETED_FULFILLED' action", () => {
    const state = {
      ...defaultState.ads,
      data: [
        {
          id: "1",
          name: "firstAd",
          photo: "null",
          price: 4,
          sale: true,
          tags: [lifestyle],
        },
        {
          id: "2",
          name: "secondAd",
          photo: "null",
          price: 5,
          sale: true,
          tags: [lifestyle],
        },
      ],
    };

    const action = adsDeletedFulfilled("1");
    const expectedState = {
      ...state,
      data: [
        {
          id: "2",
          name: "secondAd",
          photo: "null",
          price: 5,
          sale: true,
          tags: [lifestyle],
        },
      ],
    };
    expect(ads(state, action)).toEqual(expectedState);
  });
  test("should manage 'ADS_LOADED_FULFILLED' action", () => {
    const state = defaultState.ads;
    const newAd = {
      id: "1",
      name: "mesa",
      photo: "null",
      price: 4,
      sale: true,
      tags: ["lifestyle"],
    };
    const action = adsCreatedFulfilled(newAd);
    const expectedState = {
      ...state,
      data: [...state.data, newAd],
    };
    expect(ads(state, action)).toEqual(expectedState);
  });
  test("should manage 'ANY ACTION' action", () => {
    const state = defaultState.ads;
    const action = { type: "ANY" };
    expect(ads(state, action)).toBe(state);
  });
  test("should manage 'ANY' action when estate is not defined", () => {
    const state = undefined;
    const action = { type: "ANY" };
    expect(ads(state, action)).toEqual(defaultState.ads);
  });
});
