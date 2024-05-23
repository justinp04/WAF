import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        // Use the state to call the name of the user
        this.state = {
            name: this.props.name
        }
    };

    render() {
        return(
            // Name
            <h3>{this.state.name}</h3>
        );
    };
}

export default ProfileInfo;