import React from "react";
import "./App.css";
import NavBar from "./Navbar/Navbar";

import { Routes, Route } from "react-router-dom";
import Page1 from "./Component.js/Pages/Page1/Page1";
import Page2 from "./Component.js/Pages/Page2/Page2";
import Page3 from "./Component.js/Pages/Page3/Page3";
import Page4 from "./Component.js/Pages/Page4/Page4";
import Page5 from "./Component.js/Pages/Page5/Page5";

function App() {
  return (
    <>
      <div className="App">
        <NavBar />
        <div className="box">
          <Routes>
            <Route exact path="/" element={<Page1 />}></Route>
            <Route path="/aboutus" element={<Page2 />}></Route>
            <Route path="/skills" element={<Page3 />}></Route>
            <Route path="/projects" element={<Page4 />}></Route>
            <Route path="/resume" element={<Page5 />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
