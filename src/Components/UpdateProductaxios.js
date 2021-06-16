// import React from 'react';
// import { useEffect, useState } from 'react';
// import ProductDetails from './ProductDetails';
// import Product from './Product';
// import ProductDataService from './Api';
// import qs from 'qs';
// import axios from 'axios';
// import {
//     BrowserRouter as Router
// } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';


// const UpdateProductaxios = props => {
//     let code = props.match.params.id;
//     const initailproductdetails =
//     {
//         Code: 0,
//         ProductName: "",
//         VendorName: ""
//     }

//     const [products, setProduct] = useState(initailproductdetails);
// useEffect(() => {
//     var prodata = {
//         Code: products.Code,
//         ProductName: products.ProductName,
//         VendorName: products.VendorName
//     };
//     // PUT request using axios inside useEffect React hook
//     axios.put('https://reqres.in/api/articles/1', prodata)
//         .then(response => setUpdatedAt(response.data.updatedAt));

// // empty dependency array means this effect will only run once (like componentDidMount in classes)
// }, []);

// import React from 'react';
// import { useEffect, useState } from 'react';
// import ProductDetails from './ProductDetails';
// import Product from './Product';
// import ProductDataService from './Api';
// import qs from 'qs';
// import axios from 'axios';
// import {
//     BrowserRouter as Router,
//     Route,
//     Link,
//     NavLink,
//     Redirect
// } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

// function UpdateProductaxios() {
//     const [updatedAt, setUpdatedAt] = useState(null);
//     useEffect(() => {
//         debugger;
//         // PUT request using axios inside useEffect React hook
//         const article =
//         {
//             "ID": 4101,
//             "Status": 987,
//             "Comments": "test customer"
//         };
//         axios.put('http://localhost:44339/api/Update/order', article)
//             .then(response => setUpdatedAt(response.data.updatedAt));

//         // empty dependency array means this effect will only run once (like componentDidMount in classes)
//     }, []);


//     return (
//         <div className="card text-center m-3">
//             <h5 className="card-header">PUT Request with React Hooks</h5>
//             <div className="card-body">
//                 Returned Update Date: {updatedAt}
//             </div>
//         </div>
//     );
// }

// export default UpdateProductaxios;

import React from 'react';
import axios from 'axios';

class UpdateProductaxios extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            updatedAt: null,
            errorMessage: null
        };
    }

    componentDidMount() {
        // PUT request using axios with error handling
        const article = {
            "ID": 4101,
            "Status": 987,
            "Comments": "test customer"
        };
        axios.put('http://localhost:44339/api/Update/order', article)
            .then(response => this.setState({ updatedAt: response.data.updatedAt }))
            .catch(error => {
                this.setState({ errorMessage: error.message });
                console.error('There was an error!', error);
            });
    }

    render() {
        const { errorMessage } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">PUT Request with Error Handling</h5>
                <div className="card-body">
                    Error: {errorMessage}
                </div>
            </div>
        );
    }
}

export default UpdateProductaxios;