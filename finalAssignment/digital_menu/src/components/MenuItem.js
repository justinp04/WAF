import { React, Component } from 'react';
import { Button, Card } from 'react-bootstrap';

import axios from 'axios';

export default class MenuItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            price: this.props.price,
            imageURL: '',
            quantity: 0
        }

        this.handleClick = this.handleClick.bind(this);
    }

    async getImage() {
        const imageURL = await axios.get(`http://localhost:3000/getImage`, {
            imageName: this.name
        });

        this.setState({
            imageURL: imageURL
        });
    }

    handleClick() {
        let newQuantity = this.state.quantity + 1;

        this.setState({
            quantity: newQuantity
        });

        console.log(this.state.name, this.state.quantity);
    }

    render() {
        return(
            <Card style={{ width: '18rem', margin: '0.75rem 0'}}>
                {/* Maybe use pixabay in the back end to get the image? */}
                <Card.Img variant="top" src={this.state.imageURL} />
                <Card.Body>
                    <Card.Title>{this.state.name}</Card.Title>
                    <Card.Text>{this.state.price}</Card.Text>
                    <Button 
                        className="fluid" 
                        variant="primary" 
                        onClick={this.handleClick}>Add to cart</Button>
                </Card.Body>
            </Card>
        );
    }
}