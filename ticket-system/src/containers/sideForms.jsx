import React from "react";
import { Form, FloatingLabel } from "react-bootstrap";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

class SideForms extends React.Component {
  state = {
    selectedValues: [],
  };
  render() {
    const { label, options, placeHolder } = this.props;
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
        <Typeahead
          labelKey="name"
          multiple
          options={options}
          placeholder={placeHolder}
        />
      </React.Fragment>
    );
  }
}

export default SideForms;
