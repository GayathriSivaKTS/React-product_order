import React from 'react';
import { useEffect, useState } from 'react';
import ProductDetails from './ProductDetails';
import Product from './Product';
import ProductDataService from './Api';
import qs from 'qs';
import axios from 'axios';
import {
    BrowserRouter as Router
} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const AddProduct = props => {
    let code = props.match.params.id;
    const initailproductdetails =
    {
        Code: 0,
        ProductName: "",
        VendorName: ""
    }

    const [products, setProduct] = useState(initailproductdetails);

    // const [submitted, setSubmitted] = useState(false);

    const handleInput = (event) => {

        //const { name, value } = event.target;
        setProduct({ ...products, [event.target.name]: event.target.value });
    };

    const handleUpdate = async () => {
        debugger;
        //const axiosconfig = JSON.stringify({ headers: { "Content-Type": "application/json" } });

        var prodata = {
            Code: 11,
            ProductName: products.ProductName,
            VendorName: products.VendorName
        };
        const response = await axios.put('http://localhost:44339/api/Update/product', qs.stringify(prodata));

        // setProduct({
        //     Code: response.prodata.Code,
        //     ProductName: response.prodata.ProductName,
        //     VendorName: response.prodata.VendorName
        // });
    };
    return (
        <center>
            <div className="col-md-4">
                <form >
                    <div className="form-group">
                        <label htmlFor="exampleFormControlSelect1" className=" col-form-label">Product Code</label>
                        <div className="col-sm-10"><input
                            type="number"
                            className="form-control"
                            id="Code"
                            name="Code"
                            placeholder="enter above 11"
                            value={products.Code}
                            onChange={handleInput}
                        >
                        </input></div>
                    </div>

                    <div className="form-group ">
                        <label htmlFor="exampleFormControlSelect1" className=" col-form-label">Product Name</label>
                        <div className="col-sm-10"><input
                            type="text"
                            className="form-control"
                            id="ProductName"
                            name="ProductName"
                            placeholder="ProductName"
                            value={products.ProductName}
                            onChange={handleInput}
                        >
                        </input></div>
                    </div>

                    <div className="form-group ">
                        <label htmlFor="exampleFormControlSelect1" className="col-form-label">Product Vendor</label>
                        <div className="col-sm-10"><input
                            type="text"
                            className="form-control"
                            id="VendorName"
                            name="VendorName"
                            placeholder="VendorName"
                            required
                            value={products.VendorName}
                            onChange={handleInput}
                        /></div>

                    </div>


                    <button className="btn btn-success" onClick={handleUpdate} >
                        Submit
          </button>
                </form>
            </div>
        </center>


    );
}
export default AddProduct;
