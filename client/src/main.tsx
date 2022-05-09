import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import PhotoProvider from "./context/PhotoContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PhotoProvider>
      <App />
    </PhotoProvider>
  </React.StrictMode>
);
