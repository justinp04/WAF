import { React, Component } from 'react';

import logo from './logo.svg';
import './App.css';
import NavbarComponent from './components/NavbarComponent';
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
        const pMenuItems = await axios.get(`http://localhost:3000/getItems`);

        this.setState({
            menuItems: pMenuItems
        });
    }

    render() {
        return (
            <div className="App">
                <NavbarComponent />
                <header className="App-header">
                    <MenuItem />
                    {/* <ShoppingCartItem /> */}
                </header>
            </div>
        );
    }
}
