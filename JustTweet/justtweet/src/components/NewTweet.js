import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class NewTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: 'https://ih1.redbubble.net/image.4835389836.2862/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
            tweetContent: ''
        }
    }

    // To update the state when the text inside the text area changes
    handleTextareaChange = (event) => {
        this.setState({ tweetContent: event.target.value });
    }


    render() {
        // console.log(this.state.picture);
        return(
            <div className="d-flex py-3 border-bottom">
                <div className="px-1">
                    <img src={this.state.picture} className="rounded-circle" alt="Profile" style={{
                        height: '3.5rem',
                        width: '3.5rem',
                        objectFit: 'cover !important'
                    }}/>
                </div>
                <form className="container-fluid d-flex flex-column">
                    <textarea 
                        className="form-control" 
                        id="tweetContent" 
                        rows="3" 
                        placeholder="What's happening?"
                        value={this.state.tweetContent}
                        onChange={this.handleTextareaChange}></textarea>
                    <div className="d-flex justify-content-start">
                        <Button onClick={() => this.props.onPost(this.state.tweetContent)} className="btn btn-primary my-2 px-3 rounded-5" type="submit" style={{
                            fontWeight: 500
                        }}>Tweet</Button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewTweet;