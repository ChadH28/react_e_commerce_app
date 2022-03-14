import React from 'react';
import FormInput from '../../form-input/form-input';
import Button from '../../button/button';
// When calling auth. The sign-in provider method for Email/Password under Authentication must be added and enambled 
import { auth } from '../../../firebase/firebase.utils';
import { createUserProfileDoc } from '../../../firebase/firebase.createUser';
import './signup.scss';

// Class based component to store the state of what the user is typing in 
// the state will in this case be form inputs
class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async e => {
    e.preventDefault();

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state

    // Doing validation checks on email and password when signing up
    if (password !== confirmPassword) {
      alert('Passwords dont match');
      return;
    }

    try {
      const {user} = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      await createUserProfileDoc(
        user, 
        {displayName}
      );

      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: ""
      });

      alert('User added sucessfully')
      
    } catch (error) {
      console.error(error);
    }
  };

  handleChange = e => {
    const { value, name } = e.target;
    // dynamically setting the property value to the input name
    this.setState({ [name]: value });
  };

  render() {

    const {
      displayName,
      email,
      password,
      confirmPassword
    } = this.state

    return (
      <div className='signup'>
        <h2 className='title'>I do not have an account</h2>
        <span>Sign up with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='displayName'
            type='text'
            value={displayName}
            handleChange={this.handleChange}
            label='Username'
            required
          />

          <FormInput
            name='email'
            type='email'
            value={email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <FormInput
            name='confirmPassword'
            type='password'
            value={confirmPassword}
            handleChange={this.handleChange}
            label='Confirm Password'
            required
          />

          <Button type='submit'>Sign Up</Button>
        </form>
      </div>
    );
  }
}

export default SignUp;