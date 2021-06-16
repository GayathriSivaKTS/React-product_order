

import React, { useState } from "react";
import qs from "qs";
import axios from "axios";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
function AddOrder() {
    const initailOrderdetails = {
        ID: 0,
        CustomerID: [],
        OrderDate: "",
        RequiredDate: "",
        ShippedDate: "",
        Status: 0,
        Comments: "",
    };
    const [order, setOrder] = useState(initailOrderdetails);
    const handleInput = (event) => {
        //const { name, value } = event.target;
        setOrder({ ...order, [event.target.name]: event.target.value });
    };
    const handleAddProduct = async () => {
        //const axiosconfig = JSON.stringify({ headers: { "Content-Type": "application/json" } });
        debugger;
        var Orderdata = {
            ID: order.ID,
            CustomerID: order.CustomerID,
            OrderDate: order.OrderDate,
            RequiredDate: order.RequiredDate,
            ShippedDate: order.ShippedDate,
            Status: order.Status,
            Comments: order.Comments,
        };
        const response = await axios.post("http://localhost:44339/api/Create/OrderCreation", qs.stringify(Orderdata));
        setOrder({
            ID: response.Orderdata.ID,
            CustomerID: response.Orderdata.CustomerID,
            OrderDate: response.Orderdata.OrderDate,
            RequiredDate: response.Orderdata.RequiredDate,
            ShippedDate: response.Orderdata.ShippedDate,
            Status: response.Orderdata.Status,
            Comments: response.Orderdata.Comments,
        });
    };
    return (
        <div>
            <Container>
                <h1>Create order</h1>
                <form>
                    <div>
                        <label>ID</label>
                        <input
                            type="number"
                            className="form-control"
                            id="ID"
                            name="ID"
                            placeholder="Enter the ID"
                            value={order.ID}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div>
                        <label>CustomerID</label>
                        <input
                            type="number"
                            className="form-control"
                            id="CustomerID"
                            name="CustomerID"
                            placeholder="Enter the CustomerID"
                            value={order.CustomerID}
                            onChange={handleInput}
                        ></input>
                    </div>
                    <div>
                        <label>OrderDate</label>
                        <input
                            type="date"
                            className="form-control"
                            id="OrderDate"
                            name="OrderDate"
                            placeholder="Enter the OrderDate"
                            value={order.OrderDate}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label>RequiredDate</label>
                        <input
                            type="date"
                            className="form-control"
                            id="RequiredDate"
                            name="RequiredDate"
                            placeholder="Enter the RequiredDate"
                            required
                            value={order.RequiredDate}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label>ShippedDate</label>
                        <input
                            type="date"
                            className="form-control"
                            id="ShippedDate"
                            name="ShippedDate"
                            placeholder="Enter the ShippedDate"
                            value={order.ShippedDate}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label>Status</label>
                        <input
                            type="number"
                            className="form-control"
                            id="Status"
                            name="Status"
                            placeholder="Enter the Status"
                            value={order.Status}
                            onChange={handleInput}
                        />
                    </div>
                    <div>
                        <label>Comments</label>
                        <input
                            type="text"
                            className="form-control"
                            id="Comments"
                            name="Comments"
                            placeholder="Enter the Comments"
                            value={order.Comments}
                            onChange={handleInput}
                        />
                    </div>
                    <button onClick={handleAddProduct} className="btn btn-success">
                        Submit
                    </button>
                </form>
                <center>
                    <Link to="/GetAllOrders" className="btn btn-primary">
                        View created Orders
                    </Link>
                </center>
            </Container>
        </div>
    );
}
export default AddOrder;