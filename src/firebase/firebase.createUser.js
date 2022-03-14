import { firestore } from "./firebase.utils";

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  // console.log(firestore.doc('users/128dfssab'))
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  // snapshot represents data brought in from firebase
  console.log(snapShot)
  // so if theres no snapShot that doesnt exist in db. A user will then be created and added into the db if signed in with google before
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createdAt = new Date();

    try {
      // creating user object to be set in users collection in database
      // no passwords gets saved to db cause google Auth takes care of that
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
} 

// CRUD functionality script methods for firebase
//  .get() to read .set() to create .update to update and .delete() to delete