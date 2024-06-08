import React, { Component } from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import ShoppingCartItem from './ShoppingCartItem';
import ModalComponent from './ModalComponent';

import axios from 'axios';
import { texture } from 'three/examples/jsm/nodes/Nodes.js';

export default class ShoppingCart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            quantities: this.props.items.reduce((acc, item) => {
                acc[item.name] = item.quantity || 1; // Or 1, not 0 because items are selected items only
                return acc;
            }, {}),
            subtotal: 0,
            show: false,
            message: ''
        };

        this.placeOrder = this.placeOrder.bind(this);
        this.calculateTotal = this.calculateTotal.bind(this);
        this.updateQuantity = this.updateQuantity.bind(this);
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    async placeOrder() {
        console.log("Order place attempt");

        let status = false;

        const order = await axios.post('http://localhost:3000/placeOrder', this.props.items.map(item => ({
            ...item,
            quantity: this.state.quantities[item.name]
        })));

        console.log(order.status);

        if(order.status) {
            this.props.items.map(item => this.props.removeFromCart(item.name));
            status = true;
            this.setState({
                message: "Your order has been successfully placed!"
            })
        }
        else {
            this.setState({
                message: "Your order has failed?"
            });
        }

        this.handleShow();
        return status;

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

    handleShow() {
        this.setState({
            show: true
        });
    }

    handleClose() {
        this.setState({
            show: false
        });
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
                            onClick={this.placeOrder}
                            disabled={totalPrice === 0 ? true : false}>Place order</Button>
                    </Card.Body>
                </Card>
                <ModalComponent message={this.state.message} 
                show={this.state.show}
                handleClose={this.handleClose}/>
            </Container>
        );
    }
}