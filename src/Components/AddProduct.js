import React from 'react';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import Product from './Product';
import ProductDataService from './Api';
import qs from 'qs';
import axios from 'axios';
import {
    BrowserRouter as Router,
    Route,
    Link,
    NavLink,
    Redirect
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function AddProduct() {
    const initailproductdetails = {
        ProductCode: 0,
        ProductLineID: 0,
        ProductName: "",
        ProductScale: 0,
        ProductVendor: "",
        PdtDescription: "",
        StoctAvailability: 0,
        Price: 0,
        MSRP: ""
    }
    const [product, setProduct] = useState(initailproductdetails);

    // const [submitted, setSubmitted] = useState(false);

    const handleInput = event => {
        //const { name, value } = event.target;
        setProduct({ ...product, [event.target.name]: event.target.value });
    };

    const handleAddProduct = async () => {
        debugger;
        var prodata = {
            ProductCode: product.ProductCode,
            ProductLineID: product.ProductLineID,
            ProductName: product.ProductName,
            ProductScale: product.ProductScale,
            ProductVendor: product.ProductVendor,
            PdtDescription: product.PdtDescription,
            StoctAvailability: product.StoctAvailability,
            Price: product.Price,
            MSRP: product.MSRP
        };
        const response = await axios.post("http://localhost:44339/api/Create/ProductCreation", qs.stringify(prodata))

        setProduct({
            ProductCode: response.prodata.ProductCode,
            ProductLineID: response.prodata.ProductLineID,
            ProductName: response.prodata.ProductName,
            ProductScale: response.prodata.ProductScale,
            ProductVendor: response.prodata.ProductVendor,
            PdtDescription: response.prodata.PdtDescription,
            StoctAvailability: response.prodata.StoctAvailability,
            Price: response.prodata.Price,
            MSRP: response.prodata.MSRP
        });
    };
    return (
        <center>
            <div className="col-md-4">
                <form >
                    <div className="form-group">
                        <label for="exampleFormControlSelect1" className=" col-form-label">Product Code</label>
                        <div class="col-sm-10"><input
                            type="number"
                            className="form-control"
                            id="ProductCode"
                            name="ProductCode"
                            placeholder="ProductCode"
                            value={product.ProductCode}
                            onChange={handleInput}
                        >
                        </input></div>
                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className=" col-form-label">Product LineID</label>
                        <div class="col-sm-10"><input
                            type="number"
                            className="form-control"
                            id="ProductLineID"
                            name="ProductLineID"
                            placeholder="ProductLineID"
                            value={product.ProductLineID}
                            onChange={handleInput}
                        >
                        </input></div>
                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className=" col-form-label">Product Name</label>
                        <div class="col-sm-10"><input
                            type="text"
                            className="form-control"
                            id="ProductName"
                            name="ProductName"
                            placeholder="ProductName"
                            value={product.ProductName}
                            onChange={handleInput}
                        >
                        </input></div>
                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className=" col-form-label">Product Scale</label>
                        <div class="col-sm-10"><input
                            type="number"
                            className="form-control"
                            id="ProductScale"
                            name="ProductScale"
                            placeholder="ProductScale"
                            value={product.ProductScale}
                            onChange={handleInput}
                        /></div>

                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className="col-form-label">Product Vendor</label>
                        <div class="col-sm-10"><input
                            type="text"
                            className="form-control"
                            id="ProductVendor"
                            name="ProductVendor"
                            placeholder="ProductVendor"
                            required
                            value={product.ProductVendor}
                            onChange={handleInput}
                        /></div>

                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className=" col-form-label">Product Description</label>
                        <div class="col-sm-10"><input
                            type="text"
                            className="form-control"
                            id="PdtDescription"
                            name="PdtDescription"
                            placeholder="PdtDescription"
                            value={product.PdtDescription}
                            onChange={handleInput}
                        /></div>

                    </div>
                    <div className="form-group">
                        <label for="exampleFormControlSelect1" className="col-form-label">Product StockAvailability</label>
                        <div class="col-sm-10"><input
                            type="number"
                            className="form-control"
                            id="StoctAvailability"
                            name="StoctAvailability"
                            placeholder="StockAvailability"
                            value={product.StoctAvailability}
                            onChange={handleInput}
                        /></div>

                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className="col-form-label">Product Price</label>
                        <div class="col-sm-10"><input
                            type="number"
                            className="form-control"
                            id="Price"
                            name="Price"
                            placeholder="Price"
                            value={product.Price}
                            onChange={handleInput}
                        /></div>

                    </div>
                    <div className="form-group ">
                        <label for="exampleFormControlSelect1" className="col-form-label">Product MSRP</label>
                        <div class="col-sm-10"><input
                            type="text"
                            className="form-control"
                            id="MSRP"
                            name="MSRP"
                            placeholder="MSRP"
                            value={product.MSRP}
                            onChange={handleInput}
                        /></div>

                    </div>
                    <button className="btn btn-primary" onClick={handleAddProduct} className="btn btn-success">
                        Submit
          </button>
                </form>
            </div>
        </center>


    );
}
export default AddProduct;

// const [tutorial, setTutorial] = useState(initialTutorialState);

// const handleAddProduct = () => {
//     // debugger;
//     var data = {
//         ProductCode: product.ProductCode,
//         ProductLineID: product.ProductLineID,
//         ProductName: product.ProductName,
//         ProductScale: product.ProductScale,
//         ProductVendor: product.ProductVendor,
//         PdtDescription: product.PdtDescription,
//         StoctAvailability: product.StoctAvailability,
//         Price: product.Price,
//         MSRP: product.MSRP
//     };
//     sendPostRequest(data);
// }
// const sendPostRequest = async () => {
//     try {
//         const resp = await axios.post('https://jsonplaceholder.typicode.com/posts', newPost);
//         console.log(resp.data);
//     } catch (err) {
//         // Handle Error Here
//         console.error(err);
//     }
// };
//const axios = require('axios').default;
// useEffect(() => {
//     const setsData = async () => {
//         const result = await axios.get('http://localhost:44339/api/GetProduct/All');
//         setData(result.data);
//     };
//     setsData();
// }, []);




// const newTutorial = () => {
//     setTutorial(initialTutorialState);
//     setSubmitted(false);
// };
// const create = data => {
//     return http.post(apiurl, data);
// };
// useEffect(() => {
//     const setsData = async () => {
//         const result = await axios.post();
//         setData(result.data);
//     };
//     setsData();
// }, [value]);


// preventDefault() method cancels the event if it is cancelable

// <select onchange="myFunction()"></select>:
// Execute a JavaScript when a user changes the selected option of a <select> element:

{/* <form onsubmit="myFunction()"></form>:
Execute a JavaScript when a form is submitted */}



