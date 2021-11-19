import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";

class SideForms extends React.Component {
  state = {};
  render() {
    const { label, options, placeHolder } = this.props;
    return (
      <React.Fragment>
        <FloatingLabel className="text-secondary  pb-1" label={label}>
          <Form.Control
            as="select"
            data-live-search
            className="border-0 rounded-0 bg-dark text-light"
            placeholder={placeHolder}
          >
            {options.map((option) => (
              <option>{option}</option>
            ))}
          </Form.Control>
        </FloatingLabel>
      </React.Fragment>
    );
  }
}

export default SideForms;
