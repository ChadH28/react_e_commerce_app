import React from 'react';
import FormInput from '../../form-input/form-input';
import Button from '../../button/button';
import './login.scss';
import { signInWithGoogle } from '../../../firebase/firebase.utils'

// Class based component to store the state of what the user is typing in 
// the state will in this case be form inputs
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: ""
    };
  }



  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: "",
      password: ""
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    // dynamically setting the property value to the input name
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='login'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='Email'
            required
          />

          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='Password'
            required
          />

          <Button type='submit'>Sign in</Button>
        </form>
      </div>
    );
  }
}

export default Login;