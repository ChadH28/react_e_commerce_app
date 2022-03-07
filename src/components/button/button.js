import React from 'react';

import './button.scss';

const Button = ({ 
  // pulling the children off the props being passed in. eg. email password
  children, 
  // destructure all other props that could potentially be brought up
  ...otherProps 
}) => (
  <button className='custom-button' {...otherProps}>
    {children}
  </button>
);

export default Button;