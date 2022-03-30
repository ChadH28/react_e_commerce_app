import React from 'react';
import './navbar.scss';
import { Link } from "react-router-dom";
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';


// destructuring currrent user prop
const Navbar = ({ currentUser }) => {
  return (
    <div className="navbar">
      <div className='logo-container'>
        <Link to='/'>
          {/* <Logo className='logo' /> */}
          Home
        </Link>
      </div>
      <div className='links'>
        <li>
          <Link to="/shop">Shop</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        {
          currentUser ?
          <li onClick={() => {
            auth.signOut(); 
            alert('logging out...');
          }}>
            <div>Sign out</div>
          </li> :
          <li>
            <Link to="/auth">Sign In</Link>
          </li>
        }
        <li>
          <Link to="/cart">Cart</Link>
        </li>
      </div>
    </div>
  );
}


const mapStateToProps = state => ({
  // equal to your state.valueobject.propvalue
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Navbar);