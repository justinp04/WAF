import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-3">
                <div className="navbar-collapse">
                    <ul id="navButtons" className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Moments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Notifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="www.google.com">Messages</a>
                        </li>
                    </ul>
                </div>
                <form className="d-flex">
                    <input className="form-control mr-sm-2 rounded-5" type="search" placeholder="Search Twitter" aria-label="Search"/>
                    <button className="btn my-2 my-sm-0 btn-primary mx-2 rounded-5 px-3" type="submit" style={{
                        fontWeight: 500
                    }}>Tweet</button>
                </form>
            </nav>
        );
    };
}

export default Navbar;