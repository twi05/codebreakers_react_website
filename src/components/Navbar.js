
import logo from './cbLogo.png';
import './home.css';

import {Nav, Navbar, NavDropdown, MenuItem,  Tabs, ButtonToolbar,Container, Button, Table, ButtonGroup, Row, Col, Grid, Panel, FormGroup, FormControl} from 'react-bootstrap';

function App() {
    return (
<>
<Navbar style={{zIndex:2}} collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container><img src={logo} className="App-logo logo" alt="logo" />
  <Navbar.Brand href="#home">Code Breakers</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <NavDropdown title="Explore" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link href="#deets">Login</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Sign Up
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
 

</>
    );
}

export default App;




// function App() {
//     return (
// <>

// </>
//     );
// }

// export default App;