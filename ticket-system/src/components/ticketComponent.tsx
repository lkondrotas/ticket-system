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
  import React, { useState } from "react";
  import arrow from "../images/arrow.svg";
  import arrow2 from "../images/arrow2.svg";
  import probcat from "../data/probCat.json";
  import MerchantInfo from "../containers/ticketMerchantInfo"
  
 function Ticket(ticketData, merchantData) {

    const [open, setOpen] = useState(true);
    const [selectedReq, setselectedReq] = useState(0);
    const [selectedProd, setselectedProd] = useState(0);
    const [selectedCat, setselectedCat] = useState(0);
    const [selectedSub, setselectedSub] = useState(0);

    const created = Date.now;
  
      return (
        <Container fluid as={Form}>
          <Row>
            <MerchantInfo />
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
                        value={ticketData.ticketData ? ticketData.ticketData.subject : null}
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
                      ></Form.Control>
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroup.Text className="ig-width">
                        Date and time
                      </InputGroup.Text>
                      <Form.Control
                        placeholder=""
                      ></Form.Control>
                    </InputGroup>
                    <InputGroup className="mb-2">
                      <InputGroup.Text className="ig-width">
                        Error message
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Error message"
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
                  <Form.Control as="text"></Form.Control>
                </InputGroup>
                <InputGroup className="mb-1">
                  <InputGroup.Text className="ig-width-side">
                    Updated
                  </InputGroup.Text>
                  <Form.Control as="text"></Form.Control>
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
                  <Form.Control as="text"></Form.Control>
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
                    onChange={(e) => {
                        setselectedReq(Number(e.target.value));
                        setselectedProd(0);
                        setselectedSub(0);
                        setselectedCat(0);
                    }
                    }
                  >
                    <option value={0} label="Select"></option>
                    {probcat.requestType.map((item) => (
                      <option value={item.id} label={item.name}></option>
                    ))}
                  </Form.Control>
                </InputGroup>
                {selectedReq ? (
                  <InputGroup className="mb-1">
                    <InputGroup.Text className="ig-width-side">
                      Product
                    </InputGroup.Text>
                    <Form.Control
                      as="select"
                      onChange={(e) => {
                          setselectedProd(Number(e.target.value));
                          setselectedSub(0);
                          setselectedCat(0);
                        }
                      }
                    >
                      <option value={0} label="Select"></option>
                      {probcat.product.map((item) =>
                        selectedReq === item.idf ? (
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
                {selectedProd ? (
                  <InputGroup className="mb-1">
                    <InputGroup.Text className="ig-width-side">
                      Category
                    </InputGroup.Text>
                    <Form.Control
                      as="select"
                      id="category"
                      onChange={(e) => {
                          setselectedCat(Number(e.target.value));
                          setselectedSub(0);
                        }
                      }
                    >
                      <option value={0} label="Select"></option>
                      {probcat.category.map((item) =>
                        selectedProd === item.idf ? (
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
                {selectedCat ? (
                  <InputGroup className="mb-1">
                    <InputGroup.Text className="ig-width-side">
                      Subcategory
                    </InputGroup.Text>
                    <Form.Control as="select" id="subcat">
                      <option value={0} label="Select"></option>
                      {probcat.subcategory.map((item) =>
                        selectedCat === item.idf ? (
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
  
  export default Ticket;
  