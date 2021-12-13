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
import dummyTicket from "../data/dummyTicket.json";
import probcat from "../data/probCat.json";

class NewTicket extends React.Component {
  state = {
    open: true,
    selectedReq: null,
    selectedProd: null,
    selectedCat: null,
    selectedSub: null,
  };

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
                    <Form.Control
                      placeholder="Subject"
                      value={dummyTicket.subject}
                    ></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Description
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      placeholder="Write description of the issue here..."
                      style={{ minHeight: "300px", maxHeight: "600px" }}
                      value={dummyTicket.description}
                    ></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Date and time
                    </InputGroup.Text>
                    <Form.Control
                      placeholder=""
                      value={dummyTicket.dateAndTime}
                    ></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Error message
                    </InputGroup.Text>
                    <Form.Control
                      placeholder="Error message"
                      value={dummyTicket.error}
                    ></Form.Control>
                  </InputGroup>
                  <InputGroup className="mb-2">
                    <InputGroup.Text className="ig-width">
                      Action plan
                    </InputGroup.Text>
                    <Form.Control
                      as="textarea"
                      placeholder="Action plan"
                      style={{ minHeight: "70px", maxHeight: "200px" }}
                      value={dummyTicket.actionPlan}
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
                    value={dummyTicket.solution}
                  ></Form.Control>
                </InputGroup>
                <Form.Group>
                  <Form.Text>Notes</Form.Text>
                  <InputGroup>
                    {dummyTicket.notes.map((note) => (
                      <Card>
                        <Card.Header className="align-content-end">
                          <span className="fw-bold">{note.user}</span>{" "}
                          <span className="fw-light">{note.dateAndTime}</span>
                        </Card.Header>
                        <Card.Body>{note.note}</Card.Body>
                      </Card>
                    ))}
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
                <Form.Control as="text">{dummyTicket.created}</Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Updated
                </InputGroup.Text>
                <Form.Control as="text">{dummyTicket.updated}</Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Source
                </InputGroup.Text>
                <Form.Control as="select" value={dummyTicket.source}>
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
                <Form.Control as="text">{dummyTicket.createdBy}</Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Dept
                </InputGroup.Text>
                <Form.Control as="select" value={dummyTicket.dept}>
                  <option>Advance Support</option>
                  <option>Customer Service</option>
                  <option>Technical Services</option>
                </Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Dept
                </InputGroup.Text>
                <Form.Control as="select" value={dummyTicket.group}>
                  <option>AS POS/PMS</option>
                  <option>AS Advanced</option>
                  <option>AS Audit</option>
                </Form.Control>
              </InputGroup>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Asignee
                </InputGroup.Text>
                <Form.Control as="select" value={dummyTicket.asignee}>
                  <option>Lukas Kondrotas</option>
                  <option>Donatas Ladyas</option>
                  <option>Vardenis Pavardenis</option>
                </Form.Control>
              </InputGroup>
            </Form.Group>

            {/* Problem categories */}
            <Form.Group className="mb-5">
              <Form.Text style={{ color: "#fff" }}>Problem category</Form.Text>
              <InputGroup className="mb-1">
                <InputGroup.Text className="ig-width-side">
                  Request type
                </InputGroup.Text>
                <Form.Control
                  as="select"
                  id="reqtype"
                  onChange={(e) =>
                    this.setState({
                      selectedReq: Number(e.target.value),
                      selectedProd: null,
                      selectedSub: null,
                      selectedCat: null,
                    })
                  }
                >
                  <option value={null} label="Select"></option>
                  {probcat.requestType.map((item) => (
                    <option value={item.id} label={item.name}></option>
                  ))}
                </Form.Control>
              </InputGroup>
              {this.state.selectedReq ? (
                <InputGroup className="mb-1">
                  <InputGroup.Text className="ig-width-side">
                    Product
                  </InputGroup.Text>
                  <Form.Control
                    as="select"
                    onChange={(e) =>
                      this.setState({
                        selectedProd: Number(e.target.value),
                        selectedSub: null,
                        selectedCat: null,
                      })
                    }
                  >
                    <option value={null} label="Select"></option>
                    {probcat.product.map((item) =>
                      this.state.selectedReq === item.idf ? (
                        <option value={item.id} label={item.name}>
                          {item.name}
                        </option>
                      ) : (
                        ""
                      )
                    )}
                  </Form.Control>
                </InputGroup>
              ) : (
                ""
              )}
              {this.state.selectedProd ? (
                <InputGroup className="mb-1">
                  <InputGroup.Text className="ig-width-side">
                    Category
                  </InputGroup.Text>
                  <Form.Control
                    as="select"
                    id="category"
                    onChange={(e) =>
                      this.setState({
                        selectedCat: Number(e.target.value),
                        selectedSub: null,
                      })
                    }
                  >
                    <option value={null} label="Select"></option>
                    {probcat.category.map((item) =>
                      this.state.selectedProd === item.idf ? (
                        <option value={item.id} label={item.name}>
                          {item.name}
                        </option>
                      ) : (
                        ""
                      )
                    )}
                  </Form.Control>
                </InputGroup>
              ) : (
                ""
              )}
              {this.state.selectedCat ? (
                <InputGroup className="mb-1">
                  <InputGroup.Text className="ig-width-side">
                    Subcategory
                  </InputGroup.Text>
                  <Form.Control as="select" id="subcat">
                    <option value={null} label="Select"></option>
                    {probcat.subcategory.map((item) =>
                      this.state.selectedCat === item.idf ? (
                        <option value={item.id} label={item.name}>
                          {item.name}
                        </option>
                      ) : (
                        ""
                      )
                    )}
                  </Form.Control>
                </InputGroup>
              ) : (
                ""
              )}
            </Form.Group>
            <Button type="submit" className="col-12 btn-lg">
              Create ticket
            </Button>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NewTicket;
