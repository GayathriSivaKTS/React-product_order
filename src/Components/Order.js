import React from 'react';
import ProductDetails from './ProductDetails';
import axios from 'axios';

export default class Order extends React.Component {
    state = {
        persons: []
    }

    componentDidMount() {
        // var config = {
        //     headers: {'Access-Control-Allow-Origin': '*'}
        // };
        //axios.get('http://localhost/44339' + board + '/api/GetProduct/All', config)
        axios.get(`http://localhost:44339/api/GetOrder/All`)
            // headers: {
            //   'Access-Control-Allow-Origin': 'http://localhost:44339/api/GetProduct/All',
            // },
            // proxy: {
            //   host: '192.168.43.1',
            //   port: 44339
            // }
            .then(res => {
                const persons = res.data;
                this.setState({ persons });
            })
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Order ID</th>
                            <th>Customer ID</th>
                            <th>Order Date</th>
                            <th>Comments</th>
                            <th>Order Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(this.state.persons.map((droplet) => {
                            return (
                                <tr>
                                    <td>{droplet.OrderID}</td>
                                    <td>{droplet.CustomerID}</td>
                                    <td>{droplet.OrderDate}</td>
                                    <td>{droplet.Comments}</td>
                                    <td><button onClick={ProductDetails}>More Details</button></td>


                                </tr>
                            )
                        }))}
                    </tbody>
                </table>
            </div>
        )
    }
}