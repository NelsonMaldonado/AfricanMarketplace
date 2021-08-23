import { Navbar, Nav, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer(props) {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#">African Marketplace</Navbar.Brand>
        <Nav.Link href="#">Home</Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Container>
    </Navbar>
    <p>Copyright 2021</p>
  );
}
