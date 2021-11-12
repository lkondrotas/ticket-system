import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavTop from "./containers/nav";
import SideMenu from "./containers/sideMenu";


ReactDOM.render(
  <React.StrictMode>
    <NavTop />
  </React.StrictMode>,
  document.getElementById("nav")
);

ReactDOM.render(
  <React.StrictMode>
    <SideMenu />
  </React.StrictMode>,
  document.getElementById("sideMenu")
);
