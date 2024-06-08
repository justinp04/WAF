import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import ShoppingCartItem from './ShoppingCartItem';

import axios from 'axios';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantities: this.props.items.reduce((acc, item) => {
                acc[item.name] = item.quantity || 1; // Or 1, not 0 because items are selected items only
                return acc;
            }, {}),
            subtotal: 0
        };

        this.placeOrder = this.placeOrder.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
    }

    async placeOrder() {
        console.log("Order place attempt");

        const order = await axios.post('http://localhost:3000/placeOrder', this.props.items.map(item => ({
            ...item,
            quantity: this.state.quantities[item.name]
        })));

        console.log(order.status);

        if(order.status) {
            this.props.items.map(item => this.props.removeFromCart(item.name));
            return true;
        }

        return false;

        // console.log(this.props.items);
    }

    // After lifting the state, need this method to allow the ShoppingCartItems to modify the state.
    updateQuantity(name, quantity) {
        this.setState((prevState) => ({
            quantities: {
                ...prevState.quantities,
                [name]: quantity
            }
        }));
    }

    calculateTotal() {
        return this.props.items.reduce((total, item) => total + (item.price * this.state.quantities[item.name]), 0);
    }

    render() {
        let totalPrice = this.calculateTotal();

        return(
            <Container>
                {this.props.items.map(item => (
                    <ShoppingCartItem
                        name={item.name}
                        price={item.price}
                        quantity={this.state.quantities[item.name]}
                        updateQuantity={this.updateQuantity}
                        removeFromCart={this.props.removeFromCart}/>
                ))}
                <Card className="container" style={{margin: '0.75rem 0'}}>
                    <Card.Body className="d-flex justify-content-between align-items-center">
                        <Card.Title>Total Price: ${totalPrice.toFixed(2)}</Card.Title>
                        <Button 
                            className="fluid" 
                            variant="primary" 
                            onClick={this.placeOrder}>Place order</Button>
                    </Card.Body>
                </Card>
            </Container>
        );
    }
}