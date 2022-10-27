import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.scss';

function OffcanvasExample() {
  return (
    <>
      <Navbar 
        key='md' 
        bg="light" 
        expand='md' 
        className="mb-3 custom_navbar"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            REACT.JS Beta
          </Navbar.Brand>
          <Navbar.Toggle 
            aria-controls={`offcanvasNavbar-expand-md`} 
          />

          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title 
                id={`offcanvasNavbarLabel-expand-md`}
              > Offcanvas NavBar
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Nav 
                className="justify-content-end flex-grow-1 pe-3"
              >
                <Nav.Link href="#action1">
                  HOME
                </Nav.Link>
                <Nav.Link href="#action2">
                  LINK
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>

          </Navbar.Offcanvas>

        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
