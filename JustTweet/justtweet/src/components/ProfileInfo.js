import React, { Component } from 'react';

class ProfileInfo extends Component {
    constructor(props) {
        super(props);
        // Use the state to call the name of the user
        this.state = {
            name: this.props.name,
            handle: this.props.handle,
            joinDate: this.props.joinDate
        }
    };

    render() {
        return(
            // Name
            <div id="profile-info-parent-div" className="pt-4">
                <div id="profile-info">
                    <h4 className="my-0 py-1">{this.state.name}</h4>
                    <p className='gray-text my-0 py-1'>@{this.state.handle}</p>
                    <a href="www.google.com" className="no-styling my-0 py-1">twitter.com/{this.state.handle}</a>
                    <a href="www.google.com" className="no-styling my-0 py-1">Perth, WA</a>
                    <p className="gray-text my-0 py-1">Joined {this.state.joinDate}</p>
                    <button className="btn my-2 btn-primary mx-0 rounded-5 px-5" type="submit" style={{
                        maxWidth: '17.5rem',
                        fontWeight: 500
                    }}>Tweet to {this.props.name}</button>
                </div>
            </div>
        );
    };
}

export default ProfileInfo;