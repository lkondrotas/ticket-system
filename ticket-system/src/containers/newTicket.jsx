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
      <Container fluid as={Form} method="_POST">
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
                    // onClick={() =>
                    //   this.setState({ mi: this.Merchantinfo(this.value) })
                    // }
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
              <Row>{this.MerchantSelection(2)}</Row>
            </Container>
          </Col>
        </Row>
      </Container>
    );
  }

  MerchantSelection(value) {
    let list = testMids.filter((test) => test.mid == value);
    const merchants = list.map((listItem) => ({
      dba: listItem.dba,
      mid: listItem.mid,
      email: listItem.email,
      phone: listItem.phone,
      tba: listItem.tba,
    }));
    return (
      <Form.Control as="select" custom onChange={(e) => this.Merchantinfo(e)}>
        <option value={null}>Test</option>
        {merchants.map((merchant) => (
          <option value={merchant}>{merchant.dba}</option>
        ))}
      </Form.Control>
    );
  }

  Merchantinfo(merchant) {
    console.log(merchant);
    if (merchant) {
      this.setState({
        mi: (
          <React.Fragment>
            <FloatingLabel label="DBA">
              <Form.Control
                className="rounded-0"
                disabled
                value={merchant.dba}
              ></Form.Control>
            </FloatingLabel>
            <FloatingLabel label="MID/SN">
              <Form.Control
                className="rounded-0"
                disabled
                value={merchant.mid}
              ></Form.Control>
            </FloatingLabel>
            <FloatingLabel label="Email">
              <Form.Control
                className="rounded-0"
                disabled
                value={merchant.email}
              ></Form.Control>
            </FloatingLabel>
            <FloatingLabel label="Phone Number">
              <Form.Control
                className="rounded-0"
                disabled
                value={merchant.phone}
              ></Form.Control>
            </FloatingLabel>
            <br />
            <FloatingLabel label="Test">
              <Form.Control
                className="border-0 rounded-0"
                disabled
                value={merchant.tba}
              ></Form.Control>
            </FloatingLabel>
          </React.Fragment>
        ),
      });
    }
  }
}

export default NewTicket;
