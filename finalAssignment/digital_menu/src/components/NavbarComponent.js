import { React, Component } from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';

class NavbarComponent extends Component {
    render() {
        return(
            <Navbar className="bg-body-tertiary">
                <Container>
                <Navbar.Brand href="#home">
                    <img
                    alt=""
                    src="public/logo.png"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    />{' '}
                    React Bootstrap
                </Navbar.Brand>
                </Container>
            </Navbar>
        );
    }
}

export default NavbarComponent;