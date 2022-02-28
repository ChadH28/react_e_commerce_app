import React from 'react';
import './navbar.scss';
import {  Link } from "react-router-dom";
const Navbar = () =>{
  return (
  <div className="navbar">
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/shop">Shop</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>
    <li>
      <Link to="/sign_in">Sign In</Link>
    </li>
    <li>
      <Link to="/cart">Cart</Link>
    </li>
  </div>
  );
}
export default Navbar;