import {
  Container,
  Row,
  Col,
  Collapse,
  Form,
  FloatingLabel,
  InputGroup,
  Button,
  Card,
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
          <Col style={{ padding: "67px 0px 0px 0px" }}>
            <Container fluid>
              <Row className="overflow-auto pt-2" style={{ maxHeight: "92vh" }}>
                <Form.Group className="pt-3 rounded mb-5">
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Subject
                    </InputGroup.Text>
                    <Form.Control placeholder="Subject"></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Description
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      placeholder="Write description of the issue here..."
                      style={{ minHeight: "300px", maxHeight: "600px" }}
                    ></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Date and time
                    </InputGroup.Text>
                    <Form.Control placeholder=""></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Error message
                    </InputGroup.Text>
                    <Form.Control placeholder="Error message"></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Action plan
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      placeholder="Action plan"
                      style={{ minHeight: "70px", maxHeight: "200px" }}
                    ></Form.Control>
                  </InputGroup>
                </Form.Group>
                <InputGroup className="mb-3">
                  <InputGroup.Text className="ig-width">
                    Solution
                  </InputGroup.Text>
                  <Form.Control
                    as="textarea"
                    placeholder="Write solution how you fixed this issue..."
                    style={{ minHeight: "100px", maxHeight: "200px" }}
                  ></Form.Control>
                </InputGroup>
                <Form.Group>
                  <Form.Text>Notes</Form.Text>
                  <InputGroup>
                    <Card>
                      <Card.Header className="align-content-end">
                        <span className="fw-bold">Lukas Kondrotas</span>{" "}
                        <span className="fw-light">12/7/2021 3:13 PM</span>
                      </Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Doloremque quidem nulla autem necessitatibus
                        tempore quos quas magni consequuntur veritatis
                        accusantium laudantium ea blanditiis quasi dolorum, nisi
                        quaerat fuga obcaecati aliquid. Lorem ipsum, dolor sit
                        amet consectetur adipisicing elit. Voluptate dolorem
                        maiores ipsa ex labore aperiam in odit iusto,
                        laboriosam, molestias nesciunt sit et debitis unde est
                        ea corporis fuga eligendi? Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Tempora, laboriosam at.
                        Voluptatibus laborum velit sunt ea itaque, consectetur
                        architecto aliquam asperiores excepturi, voluptas eos.
                        Corrupti facere error voluptatum voluptates voluptate.
                      </Card.Body>
                    </Card>
                  </InputGroup>
                  <InputGroup>
                    <Card>
                      <Card.Header>
                        <span className="fw-bold">Donatas Ladysas</span>{" "}
                        <span className="fw-light">12/7/2021 4:55 PM</span>
                      </Card.Header>
                      <Card.Body>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Asperiores nobis incidunt dicta dolorum dolores error
                        iure repudiandae numquam, nemo quae distinctio suscipit
                        esse provident veniam debitis recusandae possimus odit
                        nulla? Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Ipsam blanditiis non quia dolor
                        perspiciatis illum alias numquam optio ducimus nisi
                        ratione rerum mollitia, nihil ea officiis doloremque
                        dolore! At, laboriosam? Lorem, ipsum dolor sit amet
                        consectetur adipisicing elit. Autem sit, corporis
                        officia, enim sunt perspiciatis iste ipsa laborum
                        facilis sequi vitae voluptate molestias exercitationem
                        ducimus veritatis quam maxime. Similique, repellat!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Aperiam vel fugit excepturi, tempora soluta dolorem, hic
                        mollitia repellat quae pariatur veniam provident est,
                        aliquam nesciunt? Quasi asperiores ex suscipit iusto!
                      </Card.Body>
                    </Card>
                  </InputGroup>
                  <InputGroup>
                    <Form.Control
                      as="textarea"
                      style={{ minHeight: "150px" }}
                    ></Form.Control>
                    <Button>Add Note</Button>
                  </InputGroup>
                </Form.Group>
              </Row>
            </Container>
          </Col>
          <Col xl={2} xs={3} className="vh-100 bg-secondary shadow-sm">
            <div style={{ height: "80px" }}></div>
            <Form.Group className="mb-2">
              <Form.Text style={{ color: "#fff" }}>
                Ticket Information
              </Form.Text>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Created
                </InputGroup.Text>
                <Form.Control as="text">12/7/2021 3:01 PM</Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Updated
                </InputGroup.Text>
                <Form.Control as="text">12/7/2021 4:55 PM</Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Source
                </InputGroup.Text>
                <Form.Control as="select">
                  <option>Phone</option>
                  <option>Chat</option>
                  <option>Email</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
            <Form.Group>
              <Form.Text style={{ color: "#fff" }}>
                Department and asignee
              </Form.Text>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Created
                </InputGroup.Text>
                <Form.Control as="text">Lukas Kondrotas</Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Dept
                </InputGroup.Text>
                <Form.Control as="select">
                  <option>Advance Support</option>
                  <option>Customer Service</option>
                  <option>Technical Services</option>
                </Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Dept
                </InputGroup.Text>
                <Form.Control as="select">
                  <option>AS POS/PMS</option>
                  <option>AS Advanced</option>
                  <option>AS Audit</option>
                </Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Asignee
                </InputGroup.Text>
                <Form.Control as="select">
                  <option>Lukas Kondrotas</option>
                  <option>Donatas Ladyas</option>
                  <option>Vardenis Pavardenis</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>
            <Button className="col-12 btn-lg">Create ticket</Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewTicket;
