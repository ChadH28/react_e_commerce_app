import CartActionTypes from './cart.types';

const INITIAL_STATE = {
  hidden: true
};

// used toggle becasue the value is either true or false // open or closed
const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hidden: !state.hidden
      };
    default:
      return state;
  }
};

export default cartReducer;