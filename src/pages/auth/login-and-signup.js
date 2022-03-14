import React from 'react';
import Login from '../../components/login-and-signup/login/login';
import SignUp from '../../components/login-and-signup/signup/signup';
import './login-and-signup.scss';

const AuthPage = () => (
  <div className='auth'>
    <Login/>
    <SignUp/>
  </div>
);

export default AuthPage;