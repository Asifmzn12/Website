import { useState } from 'react';
import { Container, Navbar, Nav, Offcanvas } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  const handleOffcanvasToggle = () => {
    setShowOffcanvas((prev) => !prev);
  };

  return (
    <>
      <div className="bg-body-tertiary">
        <Container fluid>
          <Navbar expand="lg" fixed="top">
            <Container >
              <Navbar.Brand href="#">Offcanvas navbar</Navbar.Brand>
              <Navbar.Toggle
                aria-controls="navbarSupportedContent"
                onClick={handleOffcanvasToggle}
              />
              <Navbar.Collapse id="navbarSupportedContent">
                <Nav className="ms-auto mb-2 mb-lg-0 d-lg-flex d-none">
                  <Nav.Link >
                    Home
                  </Nav.Link>
                  <Nav.Link>About Us</Nav.Link>
                  <Nav.Link>Services</Nav.Link>
                  <Nav.Link>Contact Us</Nav.Link>
                  <Nav.Link>Login</Nav.Link>
                  <Nav.Link>Signup</Nav.Link>

                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Container>
      </div>

      <Offcanvas
        show={showOffcanvas}
        onHide={() => setShowOffcanvas(false)}
        placement="end"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="d-flex flex-column">
            <Nav.Link >
              Home
            </Nav.Link>
            <Nav.Link>About Us</Nav.Link>
            <Nav.Link>Services</Nav.Link>
            <Nav.Link>Contact Us</Nav.Link>
            <Nav.Link>Login</Nav.Link>
            <Nav.Link>Signup</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Header;
