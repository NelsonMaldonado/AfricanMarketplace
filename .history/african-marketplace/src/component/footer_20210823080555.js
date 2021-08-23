import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#">African Marketplace</Navbar.Brand>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">Product</Nav.Link>
        <Nav.Link href="#">Profile</Nav.Link>
      </Container>
    </Navbar>
  );
}
