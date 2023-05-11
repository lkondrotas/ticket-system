import { Container, Row, Col } from "react-bootstrap";
import "../css/nav.css";
import React, { useState, useEffect } from "react";
import CustomTable from "../components/table";
import headers from "../data/headers.json";
import moment from 'moment'

function AllTickets() {
  const [tickets, setTickets] = useState<any>([{}]);

  useEffect(() => {
    fetch("/tickets")
      .then((response) => response.json())
      .then((data) => {
        const mappedData = data.map((item) => ({
          ticketId: item.ticketId,
          accountNumber: item.merchant.SN ? item.merchant.SN : "Not selected",
          subject: item.ticketBody.subject,
          asignee: item.departmentInfo.asignee?.firstName + " " + item.departmentInfo.asignee?.lastName,
          date: moment(item.ticketInfo.createdDate).format("YYYY-MM-DD h:mmA"),
          status: item.ticketInfo.ticketStatus,
          tbd: "",
        }));
        setTickets(mappedData);
      });
  }, []);

  return (
    <Container fluid>
      <Row>
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

export default AllTickets;