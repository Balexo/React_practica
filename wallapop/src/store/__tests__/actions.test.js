import { authLoginPending, adsCreatedRejected } from "../actions";
import { AUTH_LOGIN_PENDING, ADS_CREATED_REJECTED } from "../types";

describe("authLoginPending", () => {
  test("should return an 'AUTH_LOGIN_PENDING' action", () => {
    const expectedAction = {
      type: AUTH_LOGIN_PENDING,
    };
    const action = authLoginPending();
    expect(action).toEqual(expectedAction);
  });
});

describe("adsCreatedRejected", () => {
  test("should return an 'ADS_CREATED_REJECTED' action", () => {
    const error = "error";
    const expectedAction = {
      type: ADS_CREATED_REJECTED,
      payload: error,
      error: true,
    };
    const action = adsCreatedRejected(error);
    expect(action).toEqual(expectedAction);
  });
});
