import React, {useState} from "react";
import { Button, Col, Collapse, FloatingLabel, Form, InputGroup } from "react-bootstrap";
import arrow from "../images/arrow.svg";
import arrow2 from "../images/arrow2.svg";

export default function MerchantInfo() {

    const [open, setOpen] = useState(true)

return (
<React.Fragment>
              <Collapse in={open} dimension="width">
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
                        ></Form.Control>
                      </FloatingLabel>
                      <FloatingLabel label="MID/SN">
                        <Form.Control
                          className="rounded-0"
                          disabled
                        ></Form.Control>
                      </FloatingLabel>
                      <FloatingLabel label="Email">
                        <Form.Control
                          className="rounded-0"
                          disabled
                        ></Form.Control>
                      </FloatingLabel>
                      <FloatingLabel label="Phone Number">
                        <Form.Control
                          className="rounded-0"
                          disabled
                        ></Form.Control>
                      </FloatingLabel>
                      <br />
                      <FloatingLabel label="Test">
                        <Form.Control
                          className="border-0 rounded-0"
                          disabled
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
                  open
                    ? setOpen(false)
                    : setOpen(true);
                }}
              >
                <div>
                  <img
                    src={open ? arrow : arrow2}
                    alt="Arrow"
                    className="closeImage"
                  />
                  <h2>Merchant Information</h2>
                </div>
              </a>
            </React.Fragment>
)
}