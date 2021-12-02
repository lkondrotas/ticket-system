import { Col, Collapse } from "react-bootstrap";
import React from "react";
import "../css/nav.css";
import arrow from "../images/arrow.svg";
import arrow2 from "../images/arrow2.svg";

class SideMenu extends React.Component {
  state = {
    open: true,
  };

  render() {
    return (
      <React.Fragment>
        <Collapse in={this.state.open} dimension="width">
          <Col id="sideMenu" xs={2} className="vh-100 bg-secondary">
            <div
              style={{ width: "calc((100vw / 12)*2)", height: "80px" }}
            ></div>
            {/* Place filers content here <Filers /> */}
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
            <h2>filters | preferences</h2>
          </div>
        </a>
      </React.Fragment>
    );
  }
}

export default SideMenu;
