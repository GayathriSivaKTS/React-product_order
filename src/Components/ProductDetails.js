import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Home from './Home';
import Updateproduct from './Updateproduct';

import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink
} from 'react-router-dom';


const ProductDetails = props => {
    let codes = props.match.params.code;

    const [data, setData] = useState([]);
    //asyn--->when you're defining a function that contains asynchronous code
    //await--->indicates that you want to resolve the Promise
    useEffect(() => {
        const setsData = async () => {
            const result = await axios.get(`http://localhost:44339/api/GetProduct/ByID?id=` + codes);
            setData(result.data);
        };
        setsData();
    }, []);

    return (
        <div>

            <div><table>
                <thead>
                    <tr>
                        <th>Product Code</th>
                        <th>Product Name</th>
                        <th>Product ID</th>
                        <th>Product Brand</th>
                        <th>Price</th>
                        <th>Stock Availability</th>


                    </tr>
                </thead>
                <tbody>


                    <tr>
                        <td>{data.ProductCode}</td>
                        <td>{data.ProductName}</td>

                        <td>{data.ProductID}</td>
                        <td>{data.Brand}</td>
                        <td>{data.price}</td>
                        <td>{data.StoctAvailability}</td>

                        {/* <td><Link to={{ pathname: `/more/${pro.ProductCode}` }}>More Detail</Link></td> */}
                        {/* <td><Link to="ProductDetails" params={{ id: pro.ProductID }}>More Details</Link></td> */}
                    </tr>

                </tbody>
            </table>
            </div>
            <center>
                <div className="PopupButton">
                    {/* <Link to={"/to/" + data.ProductCode}>Update</Link></div></center> */}
                    <NavLink to="/update">update</NavLink></div></center>
        </div>
    );
}
export default ProductDetails;