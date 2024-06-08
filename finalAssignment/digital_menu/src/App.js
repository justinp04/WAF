import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { Routes, Route, Navigate } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Menu from './components/Menu';
import MenuItem from './components/MenuItem';
import ShoppingCartItem from './components/ShoppingCartItem';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: [],
            selectedItems: [],
            numItems: 0
        }
    }

    async getItems() {
        const response = await axios.get(`http://localhost:3000/getItems`);
        const pMenuItems = response.data;

        this.setState({
            menuItems: pMenuItems
        });

        // console.log(this.state.menuItems);
    }

    componentDidMount() {
        this.getItems();
    }

    render() {
        return (
            <React.Fragment>
                <div className="App">
                    <NavbarComponent />
                    <div className="App-header">
                        <Routes>
                            <Route path="/cart" element={<ShoppingCartItem />}/>
                            <Route path="/" element={<Menu menuItems={this.state.menuItems}/>}/>
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                        {/* <ShoppingCartItem /> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
