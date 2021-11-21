import React from "react";
import {
  Form,
  Button,
  InputGroup,
  FormControl,
  Row,
  Col,
} from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

class SideForms extends React.Component {
  state = {
    selectedValues: [],
  };
  render() {
    const { formFields } = this.props;
    return (
      <React.Fragment>
        {/* <FloatingLabel className="text-white pb-1" label={label}>
          <Form.Control
            as="select"
            data-live-search
            multiple
            value={this.state.selectedValues}
            className="border-0 fields rounded-0 bg-dark text-light"
            placeholder={placeHolder}
          >
            {options.map((option) => (
              <option>{option}</option>
            ))}
          </Form.Control>
        </FloatingLabel> */}
        <Form>
          <Form.Group>
            {/* <Typeahead multiple options={formFields.options} placeholder={formFields.placeHolder} /> */}
            {formFields.map((field) => (
              <Typeahead
                className="forms"
                multiple
                options={field.options}
                placeholder={field.placeHolder}
              />
            ))}
            <Row className="forms">
              <Col xs="3">
                <Button className="" as="submit">
                  Filter
                </Button>
              </Col>
              <Col xs="9">
                <InputGroup className="">
                  <Button variant="primary" id="saveAs">
                    Save as
                  </Button>
                  <FormControl
                    placeholder="Name"
                    aria-label="Save filters"
                    aria-describedby="saveAs"
                  />
                </InputGroup>
              </Col>
            </Row>
          </Form.Group>
        </Form>
      </React.Fragment>
    );
  }
}

export default SideForms;
