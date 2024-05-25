import React, { Component } from 'react';

class RightPanel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            users: this.props.users
        };
    }

    render() {
        return(
            <div id="right-panel-div" className="pt-4">
                <div id="right-panel-header" className="d-flex">
                    <h4 className="my-0 px-2">Who to follow</h4>
                    <a className="px-1 no-styling">Refresh</a>
                    <a className="px-1 no-styling">View all</a>
                </div>
                <div id="recommendations-list" style={{
                    minHeight: '250px',
                }}>
                    <ul className="px-3">
                        <li className="user-card border-bottom py-3">
                            <img src={this.state.picture} className="rounded-circle mx-2" alt="Profile Picture" style={{
                                height: '3.5rem',
                                width: '3.5rem',
                                objectFit: 'cover !important'
                            }}/>
                            <div>
                                <div className="d-flex">
                                    <p></p>
                                    <p className="px-2 gray-text">@</p>
                                </div>
                                <button className="follow-button px-3" style={{
                                    borderRadius: '25px',
                                    fontWeight: 500
                                }}>
                                    Follow
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        );
    };
}

export default RightPanel;