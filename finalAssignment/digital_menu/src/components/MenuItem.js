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
    }

    async getImage() {
        const imageURL = await axios.get(`http://localhost:3000/getImage`, {
            imageName: this.name
        });

        this.setState({
            imageURL: imageURL
        });
    }

    render() {
        return(
            <Card style={{ width: '18rem' }}>
                {/* Maybe use pixabay in the back end to get the image? */}
                <Card.Img variant="top" src={this.state.imageURL} />
                <Card.Body>
                    <Card.Title>${this.state.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button className="fluid" variant="primary">Add to card</Button>
                </Card.Body>
            </Card>
        );
    }
}