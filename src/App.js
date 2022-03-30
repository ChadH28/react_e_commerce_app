import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';
import Homepage from './pages/home/homepage';
import ShopPage from './pages/shop/shop-page';
import NotFound from './pages/404/404-page';
import AuthPage from './pages/auth/login-and-signup';
import { auth } from './firebase/firebase.utils'
import { createUserProfileDoc } from './firebase/firebase.createUser';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

class App extends React.Component {
  // dont need the contructor anymore 
  // constructor() {
  //   super();

  //   this.state = {
  //     currentUser: null
  //   }
  // }

  // destructuring user object


  unsubscribeFromAuth = null

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          const userRef = await createUserProfileDoc(userAuth)
          // documentSnapshot object allows to check if document exists within the collection
          userRef.onSnapshot(
            snapShot => {
              // can get properties from objects calling the .data() method whixh returns a JSON object of the doc
              // console.log(snapshot.data())

              // setting state of the logged in user
              // this.setState(
              //   {
              //     currentUser: {
              //       id: snapShot.id,
              //       ...snapShot.data()
              //     }
              //   },
              //   // running a second function until state finshes its cyle 
              //   () => {
              //     // console.log(this.state)
              //     alert('Logging in...')
              //   }
              // )

              const {setCurrentUser} = this.props

              setCurrentUser(
                {
                  id: snapShot.id,
                  ...snapShot.data()
                },
                // running a second function until state finshes its cyle 
                () => {
                  // console.log(this.state)
                  alert('Logging in...')
                }
              )
            }
          )
        }
        else {
          // this.setState(userAuth)
          setCurrentUser(userAuth)
        }
        // console.log(user)
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
        <Navbar />
        {/* updated Routes instead of switch */}
        <div className='section'>
          <Routes>
            {/* used element instead of component */}
            <Route exact path='/' element={<Homepage />} />
            <Route exact path='/shop' element={<ShopPage />} />
            <Route exact path='/auth' element={<AuthPage />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    );
  }
}

// this function dispatches whatever prop of the action passed in redux
const mapDispatchToProps = dispatch => ({
  // dispatch method takes whatever action set within the app to return the object payload
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

// dont need state to props within the main app only within its components
export default connect(null, mapDispatchToProps)(App);