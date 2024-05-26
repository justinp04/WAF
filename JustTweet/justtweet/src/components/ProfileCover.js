import React, { Component } from 'react';

class ProfileCover extends Component {
    render() {
        return (
            <div >
                <img src="https://ipwatchdog.com/wp-content/uploads/2018/03/pepe-the-frog-1272162_640.jpg" 
                    className="img-fluid" 
                    alt="Profile"
                    style={{ 
                        maxHeight: '35vh',
                        width: '100vw',
                        objectFit: 'cover'}}/>
            </div>

        );
    }
}

export default ProfileCover;