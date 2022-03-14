import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/home/homepage';
import ShopPage from './pages/shop/shop-page';
import NotFound from './pages/404/404-page';
import AuthPage from './pages/auth/login-and-signup';
import {auth}  from './firebase/firebase.utils'
import { createUserProfileDoc } from './firebase/firebase.createUser';

class App extends React.Component {
  constructor() {
    super();
  
    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null

  componentDidMount() {
    auth.onAuthStateChanged(
      async user => {
        // this.setState({currentUser: user})
        createUserProfileDoc(user);
        console.log(user)
        // alert('Hello ' + user.displayName)
      }
    )
  }
  // function to sign out
  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        {/* passing the state of the user: whether logged in or not */}
        <Navbar currentUser={this.state.currentUser} />
        {/* updated Routes instead of switch */}
        <div className='section'>
        <Routes>
          {/* used element instead of component */}
          <Route exact path='/' element={<Homepage/>} />
          <Route exact path='/shop' element={<ShopPage/>} />
          <Route exact path='/auth' element={<AuthPage/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        </div>
      </div>
    );
  }
}

export default App;