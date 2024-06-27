import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import * as reducers from "./reducer";
import * as actionCreators from "./actions";
import { thunk } from "redux-thunk";

const reducer = combineReducers(reducers);

const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action, store.getState());
  const result = next(action);
  console.log("final state", store.getState());
  console.groupEnd();
  return result;
};

const timestamp = (store) => (next) => (action) => {
  const newAction = {
    ...action,
    meta: {
      ...action.meta,
      timestamp: new Date(),
    },
  };
  return next(newAction);
};
const composeEnhancers = composeWithDevTools({ actionCreators });

export default function configureStore(preloadedState) {
  const store = createStore(
    reducer,
    preloadedState,
    composeEnhancers(applyMiddleware(thunk, timestamp, logger)),
  );
  return store;
}
