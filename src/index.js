import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Page1 from "./Component.js/Pages/Page1/Page1";
import Page2 from "./Component.js/Pages/Page2/Page2";
import Page3 from "./Component.js/Pages/Page3/Page3";
import Page4 from "./Component.js/Pages/Page4/Page4";
import Page5 from "./Component.js/Pages/Page5/Page5";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <App />
   
   
   
   
   
   
   
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
