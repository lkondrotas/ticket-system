import React, { Component } from "react";
import { Container, Row, Button } from "react-bootstrap";

class SavedFilters extends Component {
  state = {};

  render() {
    return (
      <React.Fragment>
        <Container className="forms">
          <br />
          <h5>Saved filters</h5>
          <div className="rounded p-1" style={{ backgroundColor: "#889199" }}>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              Labas As Krabas
            </Button>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              asssssssssss
            </Button>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              Test
            </Button>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              Lorum Ipsum
            </Button>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              awwwwwd
            </Button>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              awdawdawd
            </Button>
            <Button className="m-1 p-0 px-2" variant="outline-dark">
              Test
            </Button>
          </div>
        </Container>
      </React.Fragment>
    );
  }
}

export default SavedFilters;
