import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import * as reducers from "./reducer";
import * as actionCreators from "./actions";
import { thunk, withExtraArgument } from "redux-thunk";
import * as auth from "../pages/auth/service";
import * as adverts from "../pages/service";
import { failureRedirects } from "./middleware";
import { timestamp, logger } from "./middleware";

const reducer = combineReducers(reducers);

const composeEnhancers = composeWithDevTools({ actionCreators });

export default function configureStore(preloadedState, { router }) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(
      applyMiddleware(
        withExtraArgument({ services: { auth, adverts }, router }),
        timestamp,
        failureRedirects(router, {
          401: "/auth/login",
          404: "/404",
        }),
        logger,
      ),
    ),
  );
  return store;
}
