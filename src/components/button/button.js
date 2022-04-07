import React from 'react';
import './button.scss';

const Button = ({ 
  // pulling the children off the props being passed in. eg. email password
  children, 
  isGoogleSignIn,
  inverted,
  // destructure all other props that could potentially be brought up
  ...otherProps
}) => (
  <button
    className={`
      ${inverted ? 'inverted' : ''} 
      ${isGoogleSignIn ? 'google-login' : ''} 
        custom-button
    `}
    {...otherProps}
  >
    {children}
  </button>
);

export default Button;