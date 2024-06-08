import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default class ModalComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            status: 0
        }
    }

    render() {
        return(
            <Modal show={this.props.show} onHide={this.props.handleClose}>
                <Modal.Header closeButton>
                <Modal.Title>{this.props.message}</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}