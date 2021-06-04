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
                                <td><button onClick={ProductDetails}>More Details</button></td>

                            </tr>
                        )
                    }))}
                </tbody>
            </table>
        </div>
    );
}
export default Customer;
// import React from 'react';
// import axios from 'axios';

// export default class PersonList extends React.Component {
//     state = {
//         name: '',
//     }

//     handleChange = event => {
//         this.setState({ name: event.target.value });
//     }

//     handleSubmit = event => {
//         event.preventDefault();

//         const user = {
//             name: this.state.name
//         };

//         axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
//             .then(res => {
//                 console.log(res);
//                 console.log(res.data);
//             })
//     }

//     render() {
//         return (
//             <div>
//                 <form onSubmit={this.handleSubmit}>
//                     <label>
//                         Person Name:
//             <input type="text" name="name" onChange={this.handleChange} />
//                     </label>
//                     <button type="submit">Add</button>
//                 </form>
//             </div>
//         )
//     }
// }


// import React, { useEffect, useState } from 'react';
// import './App.css';

// function AppHook() {

//     const [appState, setAppState] = useState({
//         loading: false,
//         repos: null,
//     });
//     useEffect(() => {
//         setAppState({ loading: true });
//         const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
//         axios.get(apiUrl).then((repos) => {
//           const allRepos = repos.data;
//           setAppState({ loading: false, repos: allRepos });
//         });
//       }, [setAppState]);


//     return (
//         <div className='App'>
//             <div className='container'>
//                 <h1>My Repositories</h1>
//             </div>
//             <div className='repo-container'>

//             </div>
//             <footer>
//                 <div className='footer'>


//         </div>
//             </footer>
//         </div>
//     );
// }
// export default AppHook;


// import React from 'react';

// import axios from 'axios';

// var http = require('http');

// http.createServer(function (request, response) {
//   response.writeHead(200, {
//     'Content-Type': 'text/plain',
//     'Access-Control-Allow-Origin': '*',
//     'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE'
//   });
//   response.end('Hello World\n');
// }).listen(3000);


// import React, { useState } from "react";
// import axios from "axios";
// import { Button, Container } from "react-bootstrap";
// function AppHook() {
//     const url = "http://localhost:44339/api/Create/ProductCreation";
//     const [data, setdata] = useState({
//         Code: "",
//         ProductlineID: "",
//         Name: "",
//         Scale: "",
//         Vendor: "",
//         PdtDescription: "",
//         QtyInStock: "",
//         BuyPrice: "",
//         MSRP: "",
//     });
//     function submit(e) {
//         e.preventDefault();
//         axios
//             .post(url, {
//                 Code: data.Code,
//                 ProductlineID: data.Code,
//                 Name: data.Name,
//                 Scale: data.Scale,
//                 Vendor: data.Vendor,
//                 PdtDescription: data.PdtDescription,
//                 QtyInStock: data.QtyInStock,
//                 BuyPrice: data.BuyPrice,
//                 MSRP: data.MSRP,
//             })
//             .then((res) => {
//                 console.log(res.data);
//             });
//     }
//     function handle(e) {
//         const newdata = { ...data };
//         newdata[e.target.id] = e.target.value;
//         setdata(newdata);
//         console.log(newdata);
//     }
//     return (
//         <div>
//             <h1>ADD PRODUCT</h1>
//             <Container>
//                 <form onSubmit={(e) => submit(e)}>
//                     <div className="form-group">
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="Code"
//                             value={data.Code}
//                             className="form-control"
//                             placeholder="Code"
//                             type="text"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="ProductlineID"
//                             value={data.ProductlineID}
//                             className="form-control"
//                             placeholder="ProductlineID"
//                             type="number"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="Name"
//                             value={data.Name}
//                             className="form-control"
//                             placeholder="Name"
//                             type="text"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="Scale"
//                             value={data.Scale}
//                             className="form-control"
//                             placeholder="Scale"
//                             type="number"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="Vendor"
//                             value={data.Vendor}
//                             className="form-control"
//                             placeholder="Vendor"
//                             type="text"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="PdtDescription"
//                             value={data.PdtDescription}
//                             className="form-control"
//                             placeholder="PdtDescription"
//                             type="text"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="QtyInStock"
//                             value={data.QtyInStock}
//                             className="form-control"
//                             placeholder="QtyInStock"
//                             type="number"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="BuyPrice"
//                             value={data.BuyPrice}
//                             className="form-control"
//                             placeholder="BuyPrice"
//                             type="number"
//                         ></input>
//                         <input
//                             onChange={(e) => handle(e)}
//                             id="MSRP"
//                             value={data.MSRP}
//                             className="form-control"
//                             placeholder="MSRP"
//                             type="text"
//                         ></input>
//                         <button type="button" className="btn btn-primary">
//                             Submit
//             </button>
//                     </div>
//                 </form>
//             </Container>
//         </div>
//     );
// }
// export default AppHook;
