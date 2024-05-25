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
        console.log(this.state.picture);
        return(
            <div className="d-flex border-bottom align-items-top">
                <div className="px-1" style={{
                    paddingTop: '2rem'
                }}>
                    <img src={this.state.picture} className="rounded-circle" alt="Profile Picture" style={{
                        height: '3.5rem',
                        width: '3.5rem',
                        objectFit: 'cover !important'
                    }}/>
                </div>
                <div className="py-2" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <div id="tweet-info" className="h-auto my-0 mx-2">
                            <p className="gray-text"><strong>{this.name}</strong> @{this.handle} - {this.date}</p>
                    </div>
                    <div id="content" className="mx-2">
                        <p className="text-start">{this.state.content}</p>
                    </div>
                    <div id="stats" className="mx-2" style={{
                        width: '50%',
                        display: 'flex',
                        justifyContent: 'space-between',
                        flexGrow: 1
                    }}>
                        <div id="comments">
                            <p className="gray-text">{this.state.numComments}</p>
                        </div>
                        <div id="num-reposts">
                            <p className="gray-text">{this.state.numReposts}</p>
                        </div>
                        <div id="num-likes">
                            <p className="gray-text">{this.state.numLikes}</p>
                        </div>
                        <div id="num-views">
                            <p className="gray-text">{this.state.numViews}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default TweetCard;