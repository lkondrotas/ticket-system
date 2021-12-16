import React from "react";
import {Container, Row, Col} from "react-bootstrap"

class Home extends React.Component {
  render() {
    return (
      <Container fluid style={{paddingTop: "80px"}}>
        <Row style={{height: "10vh"}}>
          <h2 className="text-center">This is a panel for selections</h2>
        </Row>
        <Row style={{height: "40vh"}}>
          <Col className="m-3 shadow-arround">Test</Col>
          <Col className="m-3 shadow-arround">Test</Col>
          <Col className="m-3 shadow-arround">Test</Col>
        </Row>
        <Row style={{height: "40vh"}}>
          <Col className="m-3 shadow-arround">Test</Col>
          <Col className="m-3 shadow-arround">Test</Col>
          <Col className="m-3 shadow-arround">Test</Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
