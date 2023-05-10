import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTickets from "./containers/allTickets";
import MyTickets from "./containers/myTickets";
import Profile from "./containers/profile";
import NotFound from "./containers/404"
import Ticket from "./components/ticketComponent"
import Adminpage from "./containers/adminContainers/adminMain"

ReactDOM.render(
  <BrowserRouter>
    <NavTop></NavTop>
    <Routes>
      <Route path="/" element={<AllTickets />}></Route>
      <Route path="tickets" element={<AllTickets />} />
      <Route path="mytickets" element={<MyTickets />}></Route>
      {/* <Route path="tickets/new" element={<Ticket />} /> */}
      <Route path="profile" element={<Profile />}></Route>
      <Route path="tickets/:ticketId" element={<Ticket />}></Route> {/*  */}
      <Route path="admin" element={<Adminpage />} />
      <Route path="*" element={<NotFound />}></Route> {/* 404 page */}
      <Route path="404" element={<NotFound />}></Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
