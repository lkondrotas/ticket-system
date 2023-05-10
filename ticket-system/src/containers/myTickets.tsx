import { Container, Row, Col } from "react-bootstrap";
import "../css/nav.css";
import React, { useState, useEffect } from "react";
import CustomTable from "../components/table";
import headers from "../data/headers.json";
// import arrow from "../images/arrow.svg";
// import arrow2 from "../images/arrow2.svg";
import moment from 'moment'

function MyTickets() {
  // const [open, setOpen] = useState(false);
  const [tickets, setTickets] = useState<any>([{}]);

  useEffect(() => {
    fetch("/tickets")
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.map((item) => ({
          ticketId: item.ticketId,
          subject: item.ticketBody.subject,
          asignee: item.departmentInfo.asignee?.firstName + " " + item.departmentInfo.asignee?.lastName,
          date: moment(item.ticketInfo.createdDate).format("YYYY-MM-DD h:mmA"),
          tags: item.ticketInfo.tags,
          status: item.ticketInfo.ticketStatus,
          tbd: "",
        }));
        setTickets(mappedData);
      });
  }, []); // only fetch data when component mounts

  return (
    <Container fluid>
      <Row>
        {/* <React.Fragment>
          <Collapse in={open} dimension="width">
            <Col id="sideMenu" xs={2} className="vh-100 bg-secondary">
              <div
                style={{ width: "calc((100vw / 12)*2)", height: "80px" }}
              ></div>
              <Dropdown>
                <Dropdown.Toggle variant="secondary" id="status-dropdown">
                  {statusFilter ? statusFilter.charAt(0).toUpperCase() + statusFilter.slice(1) : "Status"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onSelect={() => handleStatusFilter("open")}>Open</Dropdown.Item>
                  <Dropdown.Item onSelect={() => handleStatusFilter("closed")}>Closed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Collapse>

          <a
            id="sideBar"
            href="#sidebar"
            style={{cursor: "pointer"}}
            className="bg-secondary text-uppercase text-decoration-none text-nowrap"
            onClick={() => {
              open ? setOpen(false) : setOpen(true);
            }}
          >
            <div>
              <img
                src={open ? arrow : arrow2}
                alt="Arrow"
                className="closeImage"
              />
              <h2>filters | preferences</h2>
            </div>
          </a>
        </React.Fragment> */}
        <Col style={{ paddingTop: "75px" }} className="overflow-auto">
          <Container fluid>
            <Row>
              <h2>All tickets</h2>
              <CustomTable columns={headers} data={tickets} />
            </Row>
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default MyTickets;