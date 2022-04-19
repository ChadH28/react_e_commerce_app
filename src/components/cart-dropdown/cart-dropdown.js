import React from 'react';
import Button from '../button/button';
import './cart-dropdown.scss';
import CartItem from '../cart-item/cart-item';
import { connect } from 'react-redux';

const CartDropdown = ({cartItems}) => (
  <div className='cart-dropdown'>
    <div className='cart-items'>
      {
        cartItems.map(cartItem => 
          <CartItem key={cartItem.id} item={cartItem} />
        )
      }
    </div>
    <Button>GO TO CHECKOUT</Button>
  </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(
  mapStateToProps
)(CartDropdown) 