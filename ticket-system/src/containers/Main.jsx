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

class Main extends React.Component {
  state = {};

  render() {
    return (
      <Col className="vh-100">
        <Container fluid>
          <Row>
            <div style={{ height: "75px" }}></div>
          </Row>
          <Row className="p-1">
            <Col xs="4">
              <InputGroup>
                <Button variant="primary">Search</Button>
                <FormControl />
              </InputGroup>
            </Col>
          </Row>
          <hr></hr>
          <Row
            style={{ maxHeight: "83vh", maxWidth: "77.5vw" }}
            className="p-1 overflow-auto"
          >
            <Col>
              <Table striped hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                  </tr>
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
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                    <td>Larry the Bird</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                  </tr>
                </tbody>
              </Table>
            </Col>
          </Row>
        </Container>
      </Col>
    );
  }
}

export default Main;
