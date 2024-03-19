import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = ({navBarTitle, navBarHome, navBarLink}) => {
    return (
        <>
            <div>
            <Navbar expand="lg" className="fixed-top navStyle">
            <Container>
                <Navbar.Brand href="#home">{navBarTitle}</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">{navBarHome}</Nav.Link>
                    <Nav.Link href="#link">{navBarLink}</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
            </Navbar>
            </div>
        </>
    )
}

export default NavBar