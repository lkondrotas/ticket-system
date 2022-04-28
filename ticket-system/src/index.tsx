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
import Example from "./containers/ticketExample"
import NotFound from "./containers/404"

const auth: boolean = true;

ReactDOM.render(
  <BrowserRouter>
    <NavTop></NavTop>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="tickets" element={<AllTickets />} />
      <Route path="mytickets" element={<MyTickets />}></Route>
      <Route path="reports" element={<Reports />}></Route>
      <Route path="exports" element={<Exports />}></Route>
      <Route path="tickets/newticket" element={<NewTicket />} />
      <Route path="tickets/123456" element={<Example />} />
      <Route path="profile" element={<Profile />}></Route>
      <Route path="tickets/*" element={<Exports />}></Route> {/* 404 page for tickets */}
      <Route path="*" element={<NotFound />}></Route> {/* 404 page */}
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
