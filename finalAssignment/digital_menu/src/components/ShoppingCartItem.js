import React, { Component } from 'react';
import { Card, Button , Container, Form} from 'react-bootstrap';

export default class ShoppingCartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            quantity: 1,
            price: this.props.price
        }

        this.reduceQuantity = this.reduceQuantity.bind(this);
        this.increaseQuantity = this.increaseQuantity.bind(this);
        this.remove = this.remove.bind(this);
    }

    reduceQuantity() {
        const newQuantity = this.props.quantity - 1;

        if (newQuantity > 0) {
            this.props.updateQuantity(this.props.name, newQuantity);
        }

        console.log(this.props.quantity);
    }

    increaseQuantity() {
        const newQuantity = this.props.quantity + 1;

        if (newQuantity > 0) {
            this.props.updateQuantity(this.props.name, newQuantity);
        }

        console.log(this.props.quantity);
    }

    remove() {
        this.props.removeFromCart(this.props.name);
    }

    render() {
        return(
            <Card className="container my-1">
                <Card.Body className="fluid d-flex align-items-center">
                    <div className>
                        <Card.Title>{this.state.name}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Description</Card.Subtitle>
                    </div>
                    <Container>
                        <Card.Text>
                            {this.state.price}
                        </Card.Text>
                    </Container>
                    <Container className="d-flex">
                        <Container className="d-flex">
                            <Button onClick={this.reduceQuantity} className="mx-1">-</Button>
                            <Form.Control type="number" placeholder="0" value={this.props.quantity}/>
                            <Button onClick={this.increaseQuantity} className="mx-1">+</Button>
                            <Button onClick={this.remove} className="mx-1">x</Button>
                        </Container>
                        <div>
                            <h5>Total</h5>
                            <h6>{this.state.price * this.props.quantity}</h6>
                        </div>
                    </Container>
                </Card.Body>
            </Card>
        );
    }
}