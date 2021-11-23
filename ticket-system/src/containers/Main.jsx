import React from "react";
import {
  Col,
  Button,
  Container,
  Row,
  InputGroup,
  FormControl,
  Table,
} from "react-bootstrap";
import ReactTable from "react-table-6";

class Main extends React.Component {
  state = {};

  data = [
    {
      name: "Test test",
      age: 26,
      position: "AS Audit",
      department: "Advanced support",
    },
    {
      name: "Lukas Kondrotas",
      age: 22,
      position: "ASER",
      department: "Advanced support",
    },
    {
      name: "Vardas pavardenis",
      age: 26,
      position: "AS POS",
      department: "Advanced support",
    },
    {
      name: "DX DX",
      age: 24,
      position: "CS Tier 1",
      department: "Customer service",
    },
  ];

  columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Age",
      accessor: "age",
    },
    {
      Header: "Position",
      accessor: "position",
    },
    {
      Header: "Department",
      accessor: "department",
    },
  ];

  render() {
    return (
      <Col
        style={{ maxHeight: "100vh", paddingTop: "75px" }}
        className="overflow-auto"
      >
        <Container fluid>
          {/* <Row>
            <div style={{ height: "75px" }}></div>
          </Row> */}
          <Row>
            <Col xs="4">
              <InputGroup>
                <Button variant="primary">Search</Button>
                <FormControl />
              </InputGroup>
            </Col>
          </Row>
          <hr></hr>
          <Row className="overflow-auto">
            {/* <Table striped hover>
              <thead>
                <th>Number</th>
                <th>Test</th>
                <th>Test</th>
                <th>Test</th>
              </thead>
              <tbody>
                <tr>
                  <td>111111</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>Larry the Bird</td>
                  <td>Thornton</td>
                  <td>@twitter</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              </tbody>
            </Table> */}

            <ReactTable data={this.data} columns={this.columns} />
          </Row>
        </Container>
      </Col>
    );
  }
}

export default Main;
