import { Container, Row, Col, Table } from "react-bootstrap";
import "../css/nav.css";
import React, { useState, useEffect } from "react";

function Statistics() {
  const [tickets, setTickets] = useState<any>([{}]);
  const [caseCount, setCaseCount] = useState<any>({})

  useEffect(() => {
    fetch("/tickets")
      .then((response) => response.json())
      .then((data) => {
        setTickets(data);

        const res = {};
        data.forEach(function(v) {
          res[v.merchant.SN] = (res[v.merchant.SN] || 0) + 1;
        })
        setCaseCount(res)

      });
  }, []);

  return (
    <Container fluid>
      <Row style={{ paddingTop: "75px" }}>
        <Col className="overflow-auto">
            <h4>Count of cases by status</h4>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Open</td>
                        <td>{tickets.filter((obj) => obj.ticketInfo?.ticketStatus === "open" || !obj.ticketInfo?.ticketStatus).length}</td>
                    </tr>
                    <tr>
                        <td>Resolved</td>
                        <td>{tickets.filter((obj) => obj.ticketInfo?.ticketStatus === "resolved").length}</td>
                    </tr>
                    <tr>
                        <td>Waiting for customer</td>
                        <td>{tickets.filter((obj) => obj.ticketInfo?.ticketStatus === "waiting").length}</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
        <Col className="overflow-auto">
            <h4>Count of cases by report type</h4>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Reported using</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Phone</td>
                        <td>{tickets.filter((obj) => obj.ticketInfo?.source === "Phone").length}</td>
                    </tr>
                    <tr>
                        <td>Email</td>
                        <td>{tickets.filter((obj) => obj.ticketInfo?.source === "Email").length}</td>
                    </tr>
                    <tr>
                        <td>Chat</td>
                        <td>{tickets.filter((obj) => obj.ticketInfo?.source === "Chat").length}</td>
                    </tr>
                </tbody>
            </Table>
        </Col>
        <Col className="overflow-auto">
            <h4>Top 5 merchants with most cases</h4>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>Account Number</th>
                        <th>Count</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.entries(caseCount).sort((a:any,b:any)=>{return b[1]-a[1]}).map(([key, value]:any, i)=>{
                        if(i>5) return null;
                        if(key==="undefined") return null;
                        return (<tr key={i}>
                            <td>{key}</td>
                            <td>{value}</td>
                        </tr>)
                    })}
                </tbody>
            </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default Statistics;