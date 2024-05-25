import React, { Component } from 'react';

class NewTweet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picture: this.props.picture,
        }
    }


    render() {
        // console.log(this.state.picture);
        return(
            <div className="d-flex py-3 border-bottom">
                <div className="px-1">
                    <img src={this.state.picture} className="rounded-circle" alt="Profile Picture" style={{
                        height: '3.5rem',
                        width: '3.5rem',
                        objectFit: 'cover !important'
                    }}/>
                </div>
                <form className="container-fluid d-flex flex-column">
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="What's happening?"></textarea>
                    <div className="d-flex justify-content-start">
                        <button className="btn btn-primary my-2 px-3 rounded-5" type="submit" style={{
                            fontWeight: 500
                        }}>Tweet</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default NewTweet;