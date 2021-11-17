import React from "react";
import logo from "../images/logo2.svg";
import avatar from "../images/avatar.svg";
import { Navbar, Container, Nav, Dropdown } from "react-bootstrap";

class NavTop extends React.Component {
  state = {
    userFullName: "Lukas Kondrotas",
  };

  menuList = [
    {
      id: 1,
      name: "Home",
      href: "#home",
    },
    {
      id: 2,
      name: "All tickets",
      href: "#alltickets",
    },
    {
      id: 3,
      name: "My tickets",
      href: "#mytickets",
    },
    {
      id: 4,
      name: "Reports",
      href: "#reports",
    },
    {
      id: 5,
      name: "Exports",
      href: "#exports",
    },
  ];

  render() {
    return (
      <Navbar fixed="top" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src={logo}
              alt="test"
              className="d-inline-block align-top"
              width="150"
              height="40"
            />
          </Navbar.Brand>
          <Nav className="me-auto">
            {this.menuList.map((name) => (
              <Nav.Link href={name.href} key={name.id}>{name.name}</Nav.Link>
            ))}
          </Nav>
          <Nav className="justify-content-end">
            <Dropdown>
              <Dropdown.Toggle variant="primary" className="p-1">
                <img src={avatar} alt="test" width="50" height="40" />
              </Dropdown.Toggle>
              <Dropdown.Menu variant="dark">
                <Dropdown.Header>{this.state.userFullName}</Dropdown.Header>
                <Dropdown.Divider />
                <Dropdown.Item href="#">Profile</Dropdown.Item>
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
