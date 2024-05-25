import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';

class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-between px-3">
                <div className="navbar-collapse">
                    <ul id="navButtons" className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link" href="">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Moments</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Notifications</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="">Messages</a>
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