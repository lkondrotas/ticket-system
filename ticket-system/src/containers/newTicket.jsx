import {
  Container,
  Row,
  Col,
  Collapse,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
} from "react-bootstrap";
import "../css/nav.css";
import React from "react";
import arrow from "../images/arrow.svg";
import arrow2 from "../images/arrow2.svg";
import testMids from "../data/testMids.json";

class NewTicket extends React.Component {
  state = {
    open: true,
    value: null,
    mi: null,
  };

  value;

  render() {
    return (
      <Container fluid as={Form}>
        <Row>
          <React.Fragment>
            <Collapse in={this.state.open} dimension="width">
              <Col id="sideMenu" xl={2} xs={3} className="vh-100 bg-secondary">
                <div
                  style={{ width: "calc((100vw / 12)*2)", height: "80px" }}
                ></div>
                {/* Sidebar content */}
                <Form.Group className="m-3">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter merchant identifier"
                    ></Form.Control>
                    <Button>Search</Button>
                  </InputGroup>
                  <br />
                  <React.Fragment>
                    <FloatingLabel label="DBA">
                      <Form.Control
                        className="rounded-0"
                        disabled
                        value={testMids[0].dba}
                      ></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel label="MID/SN">
                      <Form.Control
                        className="rounded-0"
                        disabled
                        value={testMids[0].mid}
                      ></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel label="Email">
                      <Form.Control
                        className="rounded-0"
                        disabled
                        value={testMids[0].email}
                      ></Form.Control>
                    </FloatingLabel>
                    <FloatingLabel label="Phone Number">
                      <Form.Control
                        className="rounded-0"
                        disabled
                        value={testMids[0].phone}
                      ></Form.Control>
                    </FloatingLabel>
                    <br />
                    <FloatingLabel label="Test">
                      <Form.Control
                        className="border-0 rounded-0"
                        disabled
                        value={testMids[0].tba}
                      ></Form.Control>
                    </FloatingLabel>
                  </React.Fragment>
                </Form.Group>
              </Col>
            </Collapse>

            <a
              id="sideBar"
              href="javascript:void(0)"
              className="bg-secondary text-uppercase text-decoration-none text-nowrap"
              onClick={() => {
                this.state.open
                  ? this.setState({ open: false })
                  : this.setState({ open: true });
              }}
            >
              <div>
                <img
                  src={this.state.open ? arrow : arrow2}
                  alt="Arrow"
                  className="closeImage"
                />
                <h2>Merchant Information</h2>
              </div>
            </a>
          </React.Fragment>
          <Col style={{ paddingTop: "75px" }}>
            <Container fluid>
              <Row className="overflow-scroll" style={{ maxHeight: "90vh" }}>
                <React.Fragment>
                  <Form.Label>Test</Form.Label>
                  <Form.Control as="textarea"></Form.Control>
                </React.Fragment>
              </Row>
            </Container>
          </Col>
          <Col xl={2} xs={3} className="vh-100 bg-secondary shadow-sm">
            <div style={{ height: "80px" }}></div>
            <div>Test</div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewTicket;
