import React from 'react';
// import FormInput from '../form-input/form-input.component';
// import CustomButton from '../custom-button/custom-button.component';
import './login.scss';

// Class based component to store the state of what the user is typing in 
// the state will in this case be form inputs
class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: null,
      password: null
    };
  }



  handleSubmit = e => {
    e.preventDefault();
    this.setState({
      email: null,
      password: null
    });
  };

  handleChange = e => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className='login'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <input
            name='email'
            type='email'
            value={this.state.email}
            handleChange={this.handleChange}
            label='email'
            required
          />

          <input
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          
          <button type='submit' value='sign in'> Sign in </button>
        </form>
      </div>
    );
  }
}

export default Login;