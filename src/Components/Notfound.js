import React from 'react'
import {
    Link,
} from 'react-router-dom';
const NotFound = () =>
    <div>
        <h3>404 page not found</h3>
        <p>We are sorry the page you are looking for does not exist.
        <p>To go home page
            <Link to="/Home" >Home</Link></p>
        </p>

    </div>

export default NotFound;