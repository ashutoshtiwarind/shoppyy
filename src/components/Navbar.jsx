import React from 'react';
import {Link} from "react-router-dom";
import "./product.css"

const Navbar = () => {
    return (
        <div className='nav'>
            <div><Link to='/'>home</Link> </div>
            <div><Link to='/about'>About</Link> </div>
            <div><Link to="/products">Products</Link></div>
        </div>
    );
}

export default Navbar;
