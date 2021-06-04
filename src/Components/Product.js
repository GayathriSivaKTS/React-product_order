
import useAxios from 'axios-hooks';
import './Product.css';
import ProductDetails from './ProductDetails';

// [{ data, loading, error, response }, execute, manualCancel]

// data - The success response data property (for convenient access).

// loading - True if the request is in progress, otherwise False.

// error - The error value

// response - The whole success response object.

// execute([config[, options]]) - A function to execute the request manually,

// manualCancel() - A function to cancel outstanding requests manually

function Product() {
    const [{ data, loading, error }, refetch] = useAxios(
        'http://localhost:44339/api/GetProduct/All'
    )


    if (loading) return <p>Loading...</p>
    if (error) return <p>Error!</p>

    return (
        <div>
            {/* <button onClick={refetch}>refetch</button> */}
            {/*  To print the JSON result 
            stringyfy->COnverts the json objects/values to json string
            <pre>{JSON.stringify(data, null, 2)}</pre> */}
            {/* To list the products
                <ul>
                    {data.map(person => <li>{person.ProductName}</li>)}
                </ul>
            */}
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
                    {(data.map((droplet) => {
                        return (
                            <tr>
                                <td>{droplet.ProductCode}</td>
                                <td>{droplet.ProductName}</td>

                                <td>{droplet.ProductID}</td>
                                <td>{droplet.Brand}</td>
                                <td><button onClick={ProductDetails}>More Details</button></td>

                            </tr>
                        )
                    }))}
                </tbody>
            </table>

        </div>
    );


}
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Home from './Home';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     NavLink
// } from 'react-router-dom';


// function Product() {
//     const [data, setData] = useState([]);
//     useEffect(() => {
//         const setData = async () => {
//             const result = await axios.get('http://localhost:44339/api/GetProduct/All');
//             setData(result.data);
//         }

//         setData();
//     }, []);
// // function Product({ }) {
// //     const [product, setProduct] = useState({ pro: [] });

// //     useEffect(() => {
// //         // By moving this function inside the effect, we can clearly see the values it uses.
// //         async function fetchProduct() {
// //             const response = await fetch('http://localhost:44339/api/GetProduct/All');
// //             const json = await response.json();
// //             setProduct(json);
// //         }

// //         fetchProduct();
// //     }, []); // ✅ Valid because our effect only uses productId
// //     // ...

//     return (
//         <ul>
//             { product.map(person => <li>{person.ProductName}</li>)}
//         </ul>
//         <div>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>Id</th>
//                         <th>Name</th>
//                         <th>Brand</th>
//                         <th>Price</th>
//                         <th>StockAvailability</th>

//                     </tr>
//                 </thead>
//                 <tbody>
//                     {(data.pro.map((droplet) => {
//                         return (
//                             <tr>
//                                 <td>{droplet.ProductID}</td>
//                                 <td>{droplet.ProductName}</td>
//                                 <td>{droplet.Brand}</td>
//                                 <td>{droplet.price}</td>
//                                 <td>{droplet.StockAvailability}</td>

//                             </tr>
//                         )
//                     }))}
//                 </tbody>
//             </table>
//         </div>

//     );
// }



// const fetchURL = "http://localhost:44339/api/GetProduct/All";
// const getItems = () => fetch(fetchURL).then(res => res.json());

// function Product() {
//     const [items, setItems] = useState();

//     useEffect(() => {
//         getItems().then(data => setItems(data));
//     }, []);

//     return (

//         <div>
//             {items.map(item => (
//                 <div key={item.ProductCode}>{item.ProductName}</div>
//             ))}
//         </div>
//     );
// }

export default Product;