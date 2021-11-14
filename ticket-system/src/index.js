import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./containers/nav";
import MainContainer from "./containers/mainContainer";

ReactDOM.render(
  <React.StrictMode>
    <NavTop />
  </React.StrictMode>,
  document.getElementById("nav")
);

ReactDOM.render(
  <React.StrictMode>
    <MainContainer />
  </React.StrictMode>,
  document.getElementById("MainContainer")
);
