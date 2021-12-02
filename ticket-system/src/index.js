import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./containers/nav";
import AllTickets from "./containers/mainContainer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <NavTop />
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Home />}></Route> */}
        <Route path="/" element={<AllTickets />}></Route>
        {/* <Route path="mytickets" element={<MyTickets />}></Route>
        <Route path="reports" element={<Reports />}></Route>
        <Route path="exports" element={<Exports />}></Route>
        <Route path="newticket" element={<NewTicket />}></Route>
        <Route path="profile" element={<Profile />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
