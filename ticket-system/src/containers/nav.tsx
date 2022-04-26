import React from "react";
import logo from "../images/logo2.svg";
import avatar from "../images/avatar.svg";
import { Navbar, Container, Nav, Dropdown, Button } from "react-bootstrap";
import { NavLink, Link } from "react-router-dom";
import menuList from "../data/menuList.json";
// import Button from "@restart/ui/esm/Button";

class NavTop extends React.Component {
  state = {
    userFullName: "Lukas Kondrotas",
  };

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img
              src={logo}
              alt="test"
              className="d-inline-block align-top"
              width="150"
              height="40"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            {menuList.map((name) => (
              <Nav.Link as={NavLink} to={name.href}>
                {name.name}
              </Nav.Link>
            ))}
          </Nav>
          <Nav className="justify-content-end">
            <Nav.Link
              as={Link}
              to="tickets/newticket"
              style={{ marginRight: "20px", padding: "12px 20px" }}
            >
              New Ticket
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle variant="primary" className="p-1">
                <img src={avatar} alt="test" width="50" height="40" />
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Header>{this.state.userFullName}</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item as={Link} to="profile">
                  Profile
                </Dropdown.Item>
                <Dropdown.Item href="#">Logout</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default NavTop;
