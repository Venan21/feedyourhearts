import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Nav.css'
function BasicExample() {


  
  return (
    <>
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container>
        <Navbar.Brand href="#home">Feed your Heats</Navbar.Brand>
        <div className='flex'>
        <div id='donate-left' className='donate-left'>Donate Now</div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            
          </Nav>
          <Nav>
          <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Donate now</Nav.Link>
          </Nav>
          

        </Navbar.Collapse>

        </div>
        

      </Container>
    </Navbar>
    </>
  );
}

export default BasicExample;


