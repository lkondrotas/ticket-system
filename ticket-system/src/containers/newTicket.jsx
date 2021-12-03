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

class NewTicket extends React.Component {
  state = {
    open: true,
    value: null,
    mi: null,
  };

  value;
  mi;

  render() {
    return (
      <Container fluid as={Form}>
        <Row>
          <React.Fragment>
            <Collapse in={this.state.open} dimension="width">
              <Col id="sideMenu" xs={2} className="vh-100 bg-secondary">
                <div
                  style={{ width: "calc((100vw / 12)*2)", height: "80px" }}
                ></div>
                {/* Sidebar content */}
                <Form.Group className="m-3">
                  <InputGroup>
                    <Form.Control
                      type="text"
                      placeholder="Enter merchant identifier"
                      onChange={(e) => (this.value = e.target.value)}
                    ></Form.Control>
                    <Button
                      onClick={() =>
                        this.setState({ mi: this.Merchantinfo(this.value) })
                      }
                    >
                      Search
                    </Button>
                  </InputGroup>
                  <br />
                  {this.state.mi}
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
          <Col style={{ paddingTop: "75px" }} className="overflow-auto">
            <Container fluid>
              <Row></Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

  Merchantinfo(value) {
    if (value) {
      return (
        <React.Fragment>
          <FloatingLabel label="DBA">
            <Form.Control
              className="rounded-0"
              disabled
              value="VILNIUS TEST ACCOUNT 4"
            ></Form.Control>
          </FloatingLabel>
          <FloatingLabel label="MID/SN">
            <Form.Control
              className="rounded-0"
              disabled
              value="21224567"
            ></Form.Control>
          </FloatingLabel>
          <FloatingLabel label="Email">
            <Form.Control
              className="rounded-0"
              disabled
              value="lkondrotas@shift4.com"
            ></Form.Control>
          </FloatingLabel>
          <FloatingLabel label="Phone Number">
            <Form.Control
              className="rounded-0"
              disabled
              value="888-351-2808"
            ></Form.Control>
          </FloatingLabel>
          <br />
          <FloatingLabel label="Test">
            <Form.Control
              className="border-0 rounded-0"
              disabled
              value="Test Test"
            ></Form.Control>
          </FloatingLabel>
        </React.Fragment>
      );
    }
  }
}

export default NewTicket;
