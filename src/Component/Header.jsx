import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; 
import '../assets/css/header.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-bg py-3 overflow-hidden" fixed="top">
      <Container fluid>
        <Navbar.Brand as={Link} to="#home">
          <img src='images/logo.png' alt='Logo' className="logoImg"></img> 
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="about">
              About
            </Nav.Link>
            <Nav.Link as={Link} to="portfolio">
              Portfolio
            </Nav.Link>
            <Nav.Link as={Link} to="contact">
              Contact
            </Nav.Link>
            <Nav.Link as={Link} to="login" key="login" className="loginBtn">
              Login
            </Nav.Link>
          </Nav>
            </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
