import React, { useEffect, useState, useImperativeHandle, forwardRef } from "react";
import { Col, Collapse, FloatingLabel, Form } from "react-bootstrap";
import arrow from "../images/arrow.svg";
import arrow2 from "../images/arrow2.svg";
import AsyncSelect from "react-select/async"

const MerchantInfo = forwardRef((props: any, ref) => {

  const [open, setOpen] = useState(true)
  const [selectedMerchant, setMerchant] = useState<any>()
  const { serial, reporterData } = props
  const [loading, setLoading] = useState<boolean>(true)
  const [reporter, setReporter] = useState<any>({})

  useEffect(() => {
    if (!serial) return;
    fetch(`/merchants/${serial}`)
      .then(response => response.json())
      .then(data => {
        setMerchant(data)
        setReporter(reporterData)
        setLoading(false)
      })
      // eslint-disable-next-line
  }, [serial])

  const handleChange = value => {
    setMerchant(value);
  }

  const loadOptions = (searchQuery) => {
    if (searchQuery === "") return;
    const list = fetch(`/merchants/search/${searchQuery}`).then(response => response.json())
    setLoading(false)
    return list
  }

  useImperativeHandle(ref, () => ({
    getData: () => {
      return {
        merchant: {
          SN: selectedMerchant?.serial
        },
        reporter
      };
    },
  }));

  return (
    <React.Fragment>
      <Collapse in={open} dimension="width">
        <Col id="sideMenu" xl={2} xs={3} className="vh-100 bg-secondary">
          <div
            style={{ width: "calc((100vw / 12)*2)", height: "80px" }}
          ></div>
          {/* Sidebar content */}
          <Form.Group className="m-3">
            <span><b>Merchant information</b></span>
            <AsyncSelect
              cacheOptions
              getOptionLabel={e => e.DBA}
              getOptionValue={e => e.serial}
              loadOptions={loadOptions}
              defaultOptions
              value={selectedMerchant}
              onChange={handleChange}
              isLoading={loading}
            />
            <br />
            <React.Fragment>
              <FloatingLabel label="DBA">
                <Form.Control
                  className="border-0 rounded-0"

                  disabled
                  defaultValue={selectedMerchant?.DBA}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Account Number">
                <Form.Control
                  className="border-0 rounded-0"

                  disabled
                  defaultValue={selectedMerchant?.serial}
                  name="merchant/SN"
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Email">
                <Form.Control
                  className="border-0 rounded-0"

                  disabled
                  defaultValue={selectedMerchant?.email}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Phone Number">
                <Form.Control
                  className="border-0 rounded-0"

                  disabled
                  defaultValue={selectedMerchant?.phonenumber}
                ></Form.Control>
              </FloatingLabel>
              <br />
              <span><b>Reporter information</b></span>
              <FloatingLabel label="Name" controlId="floatingInput">
                <Form.Control

                  className="border-0 rounded-0"
                  defaultValue={reporter?.name}
                  onChange={(e) => setReporter({ ...reporter, name: e.target.value })}
                ></Form.Control>
              </FloatingLabel>
              <FloatingLabel label="Position">
                <Form.Control

                  className="border-0 rounded-0"
                  defaultValue={reporter?.position}
                  onChange={(e) => setReporter({ ...reporter, position: e.target.value })}
                ></Form.Control>
                <FloatingLabel label="Email">
                  <Form.Control
                    className="border-0 rounded-0"

                    defaultValue={reporter?.email}
                    onChange={(e) => setReporter({ ...reporter, email: e.target.value })}
                  ></Form.Control>
                  <FloatingLabel label="Phone Number">
                    <Form.Control
                      className="border-0 rounded-0"

                      defaultValue={reporter?.phonenumber}
                      onChange={(e) => setReporter({ ...reporter, phonenumber: e.target.value })}
                    ></Form.Control>
                    <FloatingLabel label="Verified?">
                      <Form.Select
                        className="border-0 rounded-0"
                        value={reporter?.verified}
                        onChange={(e) => setReporter({ ...reporter, verified: e.target.value })}
                      >
                        <option value=""></option>
                        <option value="true">Verified</option>
                        <option value="false">Unverified</option>
                      </Form.Select>
                    </FloatingLabel>
                  </FloatingLabel>
                </FloatingLabel>
              </FloatingLabel>
            </React.Fragment>
          </Form.Group>
        </Col>
      </Collapse>

      <a
        id="sideBar"
        href="#sidebar"
        style={{ cursor: "pointer" }}
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
})

export default MerchantInfo;