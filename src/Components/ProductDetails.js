import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


function ProductDetails() {
    const { id } = useParams;
    let val = id;
    const [data, setData] = useState([]);
    //asyn--->when you're defining a function that contains asynchronous code
    //await--->indicates that you want to resolve the Promise
    useEffect(() => {
        const setsData = async () => {
            const result = await axios.get(`http://localhost:44339/api/GetProduct/ByID?id=${val}`);
            setData(result.data);
        };
        setsData();
    }, []);
    return (
        <div>
            <p>{val}</p>
            <table>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Product Brand</th>


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


                            </tr>
                        )
                    }))}
                </tbody>
            </table>
        </div>
    );
}
export default ProductDetails;