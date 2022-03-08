//to use firebase app
// import firebase from 'firebase/app'; //older version
import firebase from 'firebase/compat/app'; //v9
//to use auth
// import 'firebase/auth'; //older version
import 'firebase/compat/auth'; //v9
//to use firestore
// import 'firebase/firestore'; //Older Version
import 'firebase/compat/firestore'; //v9


const firebaseConfig = {
  apiKey: "AIzaSyA0bwmC14XNKuPUX18RmBFVO8libTvUxlw",
  authDomain: "clothing-e-commerce-85cba.firebaseapp.com",
  projectId: "clothing-e-commerce-85cba",
  storageBucket: "clothing-e-commerce-85cba.appspot.com",
  messagingSenderId: "406254623092",
  appId: "1:406254623092:web:d154bc7c57ddb232d13421",
  measurementId: "G-PC9G77V55J"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup for authentication
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;