import React, { Component } from 'react';

class RightPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: [
                {
                    name: 'Bob',
                    handle: 'bigBobber',
                    picture: 'https://i.pinimg.com/736x/3c/de/d5/3cded5aa576c39ccdad0ddf4180903ca.jpg'
                },
                {
                    name: 'Lady Pepe',
                    handle: 'alphaFrog',
                    picture: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1Tm4eVf-Z3o7t06_PznDcXk_JNJVPWvZANeDvDX4KNA&s'
                },
                {
                    name: 'Shaggy',
                    handle: 'UIShaggy',
                    picture: 'https://i1.sndcdn.com/artworks-Z5yt0fz4hdEw0473-AJVKsg-t500x500.jpg'
                }
            ],
            picture: 'https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'
        };
    }

    render() {
        return(
            <div id="right-panel-div" className="pt-4">
                <div id="right-panel-header" className="d-flex">
                    <h4 className="my-0 px-2">Who to follow</h4>
                    <a href="www.google.com" className="px-1 no-styling">Refresh</a>
                    <a href="www.google.com" className="px-1 no-styling">View all</a>
                </div>
                <div id="recommendations-list" style={{
                    minHeight: '250px',
                }}>
                    <ul className="px-3">
                        {
                            this.state.users.map(user =>
                                <li className="user-card border-bottom py-3">
                                    <img src={user.picture} className="rounded-circle mx-2" alt="Profile" style={{
                                        height: '3.5rem',
                                        width: '3.5rem',
                                        objectFit: 'cover !important'
                                    }}/>
                                    <div className="d-flex flex-column align-items-start">
                                        <div className="d-flex">
                                            <p>{user.name}</p>
                                            <p className="px-2 gray-text">@{user.handle}</p>
                                        </div>
                                        <button className="follow-button px-3" style={{
                                            borderRadius: '25px',
                                            fontWeight: 500
                                        }}>
                                            Follow
                                        </button>
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        );
    };
}

export default RightPanel;