

import React from 'react';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';

function Home() {

    const [data, setData] = useState([]);
    const [value, setvalue] = useState(1);

    // useEffect(() => {
    //     const setsData = async () => {
    //         const result = await axios.get('http://localhost:44339/api/ProductName?id=' + value);
    //         setData(result.data);
    //     };
    //     setsData();
    // }, [value]);
    return (
        <div><center><NavLink to="/AddProduct" >Add Products</NavLink>
        </center>
        </div>
    );
}



export default Home;