import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavTop from "./components/nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AllTickets from "./containers/allTickets";
import MyTickets from "./containers/myTickets";
import NotFound from "./containers/404"
import Ticket from "./components/ticketComponent"
import Adminpage from "./containers/adminContainers/adminMain"
import Statistics from "./containers/statistics";

ReactDOM.render(
  <BrowserRouter>
    <NavTop></NavTop>
    <Routes>
      <Route path="/" element={<AllTickets />} />
      <Route path="tickets" element={<AllTickets />} />
      <Route path="mytickets" element={<MyTickets />} />
      <Route path="stats" element={<Statistics />} />
      <Route path="tickets/:ticketId" element={<Ticket />} />
      <Route path="admin" element={<Adminpage />} />
      <Route path="*" element={<NotFound />} /> {/* 404 page */}
      <Route path="404" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
