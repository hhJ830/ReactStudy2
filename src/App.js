import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light" >
        <Container className='justify-content-between'>
          <div>
            <Nav>
              <Navbar.Brand href="#home" className='font'>Dior</Navbar.Brand>

              <Nav.Link href="#home" style={{ marginLeft: '5rem' }}>Home</Nav.Link>
            </Nav>
          </div>
          <div>
            <Nav>
              <Nav.Link href="#cart" className='ml-2'>Cart</Nav.Link>
              <Nav.Link href="#profile">Profile</Nav.Link>
            </Nav>
          </div>
        </Container>
      </Navbar>

      <Button variant="primary">Primary</Button>{' '}

    </div>
  );
}

export default App;
