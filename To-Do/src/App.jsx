import  Todo from './Todo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav } from 'react-bootstrap';


export default function App() {
  return (
    <div>
       <Navbar bg="dark" variant="dark">
  <Container>
    <Navbar.Brand href="#home">My Todo App</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#about">About</Nav.Link>
    </Nav>
  </Container>
</Navbar>

   <Todo/>
    </div>
  )
}
