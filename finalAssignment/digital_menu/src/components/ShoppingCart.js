import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import ShoppingCartItem from './ShoppingCartItem';

export default class ShoppingCart extends Component {

    render() {
        return(
            <Container>
                {this.props.items.map(item => (
                    <ShoppingCartItem
                        name={item.name}
                        price={item.price}
                        removeFromCart={this.props.removeFromCart}/>
                ))}
            </Container>
        );
    }
}