import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Home from './Home';
import ProductDetails from './ProductDetails';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


function Customer() {
    const [data, setData] = useState([]);
    //asyn--->when you're defining a function that contains asynchronous code
    //await--->indicates that you want to resolve the Promise
    useEffect(() => {
        const setsData = async () => {
            const result = await axios.get('http://localhost:44339/api/GetProduct/All');
            setData(result.data);
        };
        setsData();
    }, []);
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Product Brand</th>
                        <th>Product Details</th>

                    </tr>
                </thead>
                <tbody>
                    {(data.map((pro) => {
                        return (
                            <tr>
                                <td>{pro.ProductCode}</td>
                                <td>{pro.ProductName}</td>

                                <td>{pro.ProductID}</td>
                                <td>{pro.Brand}</td>
                                <td><Link to={"/details/" + pro.ProductCode}>More Details</Link></td>
                                {/* <td><Link to={{ pathname: `/more/${pro.ProductCode}` }}>More Detail</Link></td> */}
                                {/* <td><Link to="ProductDetails" params={{ id: pro.ProductID }}>More Details</Link></td> */}
                            </tr>
                        )
                    }))}
                </tbody>
            </table>
        </div >
    );
}
export default Customer;