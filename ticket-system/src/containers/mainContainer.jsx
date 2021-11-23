import { Container, Row, Col } from "react-bootstrap";
import SideMenu from "./sideMenu";
import Main from "./Main";
import React from "react";

class MainContainer extends React.Component {
  state = {};

  render() {
    return (
      <Container fluid>
        <Row>
          <SideMenu />
          <Main />
        </Row>
      </Container>
    );
  }
}

export default MainContainer;
