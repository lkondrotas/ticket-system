import React from "react";
import Ticket from "./ticketComponent"
import NotFound from "../containers/404"
import data from "../data/dummyTicket.json"
import ExampleTicket from "../containers/ticketExample"

class TicketHandler extends React.Component {

    state = {
        ticketExist: false,
    };

    ID = window.location.pathname.substring(9);
    

  render(){
    return (
        this.ID === "123456" ? <Ticket ticketData={data} merchantData={data} /> : <NotFound />
        )
  }
}

export default TicketHandler;
