import React, { Component } from 'react';

class RightPanel extends Component {
    render() {
        return(
            <div>
                <div id="header" className="d-flex">
                    <h3>Who to follow</h3>
                    <a>Refresh</a>
                    <a>View all</a>
                </div>
                <div id="recommendations-list">
                    <ul>
                        <li>
                            <img src="" alt="Profile Picture"/>
                            <div>
                                <p></p>
                                <p></p>
                                <button className="follow-button">
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