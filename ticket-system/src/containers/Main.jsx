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

class Main extends React.Component {
  state = {};

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
          <Row>
            <Col xs="4">
              <InputGroup>
                <Button variant="primary">Search</Button>
                <FormControl />
              </InputGroup>
            </Col>
          </Row>
          <hr></hr>
          <Row>
            <CustomTable />
          </Row>
        </Container>
      </Col>
    );
  }
}

export default Main;
