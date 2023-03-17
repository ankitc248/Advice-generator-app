import App from "./App";
import React from "react";
import ReactDOM from "react-dom/client";
import QueryProvider from "./components/provider/QueryProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <QueryProvider>
      <App />
    </QueryProvider>
  </React.StrictMode>
);
