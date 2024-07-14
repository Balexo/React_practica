export const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.info("dispatching", action, store.getState());
  const result = next(action);
  console.log("final state", store.getState());
  console.groupEnd();
  return result;
};

export const timestamp = (store) => (next) => (action) => {
  const newAction = {
    ...action,
    meta: {
      ...action.meta,
      timestamp: new Date(),
    },
  };
  return next(newAction);
};

export const failureRedirects =
  (router, redirectsMap) => (store) => (next) => (action) => {
    const result = next(action);

    if (!action.error) {
      return result;
    }

    const redirect = redirectsMap[action.payload.request.status];
    if (redirect) {
      router.navigate(redirect);
    }

    return result;
  };
