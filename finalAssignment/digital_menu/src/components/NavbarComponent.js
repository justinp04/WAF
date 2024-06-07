import { React, Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class NavbarComponent extends Component {
    render() {
        return(
            <Navbar bg="dark" data-bs-theme="dark" fixed="top">
                <Container className="d-flex">
                    <div className="d-flex">
                        <Navbar.Brand href="#home">
                            <img
                                alt=""
                                src="/logo.png"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                            />{' '}
                            Bussin Biner
                        </Navbar.Brand>
                        <Nav className="me-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                        </Nav>
                    </div>
                    {/* Shopping cart icon goes here */}
                </Container>
            </Navbar>
        );
    }
}

export default NavbarComponent;