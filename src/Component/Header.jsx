import { Container, Navbar, Nav,} from 'react-bootstrap';
import '../assets/css/header.css'
function Header() {
  return (
    <div>
    <Navbar  collapseOnSelect expand="lg" className="navbar-bg py-3" fixed='top'>
    <Container fluid>
      <Navbar.Brand href="#home">New Website</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">About</Nav.Link>
          <Nav.Link href="#pricing">Portfolio</Nav.Link>
          <Nav.Link href="#pricing">Contact</Nav.Link>
          <Nav.Link className='signupBtn me-2 my-2 my-lg-0' href="#pricing">Sign Up</Nav.Link>
          <Nav.Link className='loginBtn ms- lg-2 ' href="#pricing">Login</Nav.Link>





        </Nav>

      </Navbar.Collapse>
    </Container>
  </Navbar>
      
    </div>
  )
}

export default Header
