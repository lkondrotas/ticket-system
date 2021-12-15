import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./containers/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NewTicket from "./containers/newTicket";
import AllTickets from "./containers/allTickets";
import MyTickets from "./containers/myTickets";
import Home from "./containers/home";
import Reports from "./containers/reports";
import Exports from "./containers/exports";
import Profile from "./containers/profile";

ReactDOM.render(
  <BrowserRouter>
    <NavTop></NavTop>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="alltickets" element={<AllTickets />} />
      <Route path="mytickets" element={<MyTickets />}></Route>
      <Route path="reports" element={<Reports />}></Route>
      <Route path="exports" element={<Exports />}></Route>
      <Route path="newticket" element={<NewTicket />} />
      <Route path="profile" element={<Profile />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
