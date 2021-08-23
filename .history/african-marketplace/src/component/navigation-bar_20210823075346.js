import {Navbar, Nav, Container} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NavigationBar(props){
    <Navbar>
        <Container>
            <Navbar.Brand >African Marketplace</Navbar.Brand>
            <Nav.Link>Home</Nav.Link>
            <Nav.Link>Product</Nav.Link>
            <Nav.Link>Profile</Nav.Link>
        </Container>
    </Navbar>
}