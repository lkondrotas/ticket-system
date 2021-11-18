import { Col, Button, Collapse, Row, Fade } from "react-bootstrap";
import React from "react";
import "../css/nav.css";
import arrow from "../images/arrow.svg";

class SideMenu extends React.Component {
  state = {
    open: true,
  };

  render() {
    return (
      <React.Fragment>
        <Col xs={3} className="vh-100  colExpHov">
          <Collapse
            in={this.state.open}
            aria-controls="sideMenu"
            aria-expanded={this.state.open}
            dimension="width"
          >
            <Row className="bg-secondary" id="sideMenu">
              <Col></Col>
              <Col xs="1">
                <a href="#sideMenu">
                  <div
                    onClick={() => this.setState({ open: false })}
                    className="colExp"
                  >
                    <img src={arrow} alt="Arrow" className="center" />
                  </div>
                </a>
              </Col>
            </Row>
          </Collapse>
        </Col>
        <Fade
          in={!this.state.open}
          aria-controls="sideBar"
          aria-expanded={!this.state.open}
        >
          <div id="sideBar">
            <br></br>
            <br></br>
            <br></br>
            <Button onClick={() => this.setState({ open: true })}></Button>
          </div>
        </Fade>
      </React.Fragment>
    );
  }
}

export default SideMenu;
