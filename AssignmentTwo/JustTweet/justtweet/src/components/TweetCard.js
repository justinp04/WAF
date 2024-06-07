import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class TweetCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: this.props._id,
            picture: 'https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
            name: this.props.name,
            handle: this.props.handle,
            date: this.props.date,
            content: this.props.content,
        };
    }

    updateDate(dateString) {
        let date = new Date(dateString);

        // Define an array of month names (short form)
        let monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

        // Get the month and day from the date object
        let monthIndex = date.getMonth();
        let day = date.getDate();

        // Format the date string using the month name and day
        return `${monthNames[monthIndex]} ${day}`;
    }

    render() {
        // this.updateDate();
        return(
            <div className="d-flex border-bottom align-items-top">
                <div className="px-1" style={{
                    paddingTop: '2rem'
                }}>
                    <img src={this.state.picture} className="rounded-circle" alt="Profile" style={{
                        height: '3.5rem',
                        width: '3.5rem',
                        objectFit: 'cover !important'
                    }}/>
                </div>
                <div className="py-2 container-fluid" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start'
                }}>
                    <div id="tweet-info" className="h-auto my-0 mx-0 container-fluid" style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    }}>
                            <span className="align-text-bottom gray-text my-0"><strong>{this.state.name}</strong> @{this.state.handle} - {this.updateDate(this.state.date)}</span>
                            <span className="align-text-top"><Button onClick={() => this.props.onDelete(this.props.id)} variant="link" className="float-right no-styling pb-2 px-2">x</Button></span>
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
                            <p className="gray-text">1</p>
                        </div>
                        <div id="num-reposts">
                            <p className="gray-text">1</p>
                        </div>
                        <div id="num-likes">
                            <p className="gray-text">1</p>
                        </div>
                        <div id="num-views">
                            <p className="gray-text">1</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    };
}

export default TweetCard;