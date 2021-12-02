import React from "react";
import {
  Col,
  Button,
  Container,
  Row,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import CustomTable from "./table";
import data from "../data/data.json";

class Main extends React.Component {
  state = {};

  columns = [
    {
      Header: "Name",
      accessor: "name",
    },
    {
      Header: "Email",
      accessor: "email",
    },
    {
      Header: "Country",
      accessor: "country",
    },
    {
      Header: "Region",
      accessor: "region",
    },
    {
      Header: "Address",
      accessor: "address",
    },
    {
      Header: "Phone",
      accessor: "phone",
    },
    {
      Header: "Zip",
      accessor: "postalZip",
    },
  ];

  //const {getTableProps, getTableBodyProps, headerGroups, rows, prepareRow} = useTable({columns, data});

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
          {/* <Row>
            <Col xs="4">
              <InputGroup>
                <Button variant="primary">Search</Button>
                <FormControl />
              </InputGroup>
            </Col>
          </Row>
          <hr></hr> */}
          <Row>
            <CustomTable columns={this.columns} data={data} />
          </Row>
        </Container>
      </Col>
    );
  }
}

export default Main;
