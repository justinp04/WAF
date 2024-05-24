import React, { Component } from 'react';
import ReactBootstrap from 'react-bootstrap';

class TweetCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: this.props.picture,
            name: this.props.name,
            handle: this.props.handle,
            date: this.props.date,
            content: this.props.content,
            numLikes: this.props.numLikes,
            numComments: this.props.numComments,
            numReposts: this.props.numReposts,
            numViews: this.props.numViews
        };
    }

    render() {
        return(
            <div className="d-flex flex-column">
                <div className="d-flex flex-column">
                    <div id="tweet-info">
                        <p><strong>{this.name}</strong> @{this.handle} - {this.date}</p>
                    </div>
                    <div>
                        <div className="px-1">
                            <img src='https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg' className="rounded-circle" alt="Profile Picture" style={{
                                height: '3.5rem',
                                width: '3.5rem',
                                objectFit: 'cover !important'
                            }}/>
                        </div>
                        <div id="content">
                            <p>{this.content}</p>
                        </div>
                    </div>
                    <div className="d-flex">
                        <div id="comments">
                            <p>{this.numComments}</p>
                        </div>
                        <div id="num-reposts">
                            <p>{this.numReposts}</p>
                        </div>
                        <div id="num-likes">
                            <p>{this.numLikes}</p>
                        </div>
                        <div id="num-views">
                            <p>{this.numViews}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default TweetCard;