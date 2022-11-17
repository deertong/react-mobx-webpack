import React from "react";
import { createRoot } from "react-dom/client";
import Main from "./router/mian.jsx";
import { BrowserRouter } from "react-router-dom";

import "./style.less";

const App = (props) => {
  return (
    <BrowserRouter>
      <Main />
    </BrowserRouter>
  );
};
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
