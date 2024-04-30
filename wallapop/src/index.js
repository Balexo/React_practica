import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import storage from "./utils/storage";
import { setAuthorizationHeader } from "./api/client";

const accesToken = storage.get("auth");

if (accesToken) {
  setAuthorizationHeader(accesToken);
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App isDefaultLogged={!!accesToken} />
  </React.StrictMode>,
);
