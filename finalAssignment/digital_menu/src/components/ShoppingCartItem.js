import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';

export default class ShoppingCartItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            quantity: this.props.quantity,
            price: this.props.price
        }
    }

    render() {
        return(
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button href="#">Add item</Button>
                    <Button href="#">Remove item</Button>
                    <Button href="#">Clear</Button>
                </Card.Body>
            </Card>
        );
    }
}