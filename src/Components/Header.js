import React, { Component } from 'react';
import './Header.css';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Order from './Order';
import Customer from './ProductList';

export default class Header extends Component {
    render() {
        return (

            <div>


                <NavLink to="/Home" >Home</NavLink> |
                <NavLink to="/Product" >Products</NavLink> |
                <NavLink to="/Order">Orders</NavLink> |
                <NavLink to="/Customer">ProductList</NavLink> |
                <NavLink to="/AppHook">AppHook</NavLink>


            </div>);
    }
}
