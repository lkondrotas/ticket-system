import logo from './logo.svg';
import avatar from './avatar.svg';
import {Navbar, Container, Nav, NavItem, Dropdown} from 'react-bootstrap';

let menuList = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'All tickets',
        href: '#alltickets',

    },
    {
        id: 3,
        name: 'My tickets',
        href: '#mytickets',
    },
    {
        id: 4,
        name: 'Reports',
        href: '#reports',
    },
    {
        id: 5,
        name: 'Exports',
        href: '#exports',
    }
];

let userFullName = "Lukas Kondrotas";

function NavTop() {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home"><img src={logo} alt="test" className="d-inline-block align-top" width="40" height="40"/></Navbar.Brand>
                <Nav className="me-auto">
                    {menuList.map(name => <Nav.Link href={name.href}>{name.name}</Nav.Link>)}
                </Nav>
                <Nav className="justify-content-end">
                    <Dropdown>
                        <Dropdown.Toggle variant="primary" className="p-1">
                            <img src={avatar} alt="test" width="50" height="40"/>
                        </Dropdown.Toggle>
                        <Dropdown.Menu variant="dark">
                            <Dropdown.Header>{userFullName}</Dropdown.Header>
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

export default NavTop;