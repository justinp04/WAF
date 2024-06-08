import React, { Component } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';
import NavbarComponent from './components/NavbarComponent';
import Menu from './components/Menu';
import ShoppingCart from './components/ShoppingCart';

// Import bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';

export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            menuItems: [],
            selectedItems: [],
        }

        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this); // Lift the state and methods so state can be shared
    }

    async getItems() {
        const response = await axios.get(`http://localhost:3000/getItems`);
        const pMenuItems = response.data;

        this.setState({
            menuItems: pMenuItems
        });

        // console.log(this.state.menuItems);
    }

    addToCart(item) {
        this.setState((prevState) => ({
            selectedItems: [...prevState.selectedItems, item] // Append the new item to the end of the array
        }));
    }

    removeFromCart(itemName) {
        this.setState((prevState) => ({
            selectedItems: prevState.selectedItems.filter(item => item.name !== itemName)
        }));
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
                            <Route path="/cart" element={<ShoppingCart items={this.state.selectedItems} removeFromCart={this.removeFromCart} />} />
                            <Route path="/" element={<Menu menuItems={this.state.menuItems} addToCart={this.addToCart} />} />
                            <Route path="*" element={<Navigate to="/"/>}/>
                        </Routes>
                        {/* <ShoppingCartItem /> */}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
