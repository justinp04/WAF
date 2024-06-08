import { React, Component } from 'react';
import { Container } from 'react-bootstrap';
import MenuItem from './MenuItem';

export default class Menu extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: this.props.menuItems
        };
    }

    render() {
        return(
            <Container className="d-flex flex-wrap justify-content-around">
                {this.state.menuItems.map(item => (
                    <MenuItem
                        name={item.name}
                        price={item.price}/>
                ))}
            </Container>
        );
    }
}