import { auth} from "./firebase.utils";
import firebase from 'firebase/compat/app'; //v9

const provider = new firebase.auth.GoogleAuthProvider();
// always trigger google popup for authentication
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);