import { firestore } from "./firebase.utils";

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;

  console.log(firestore.doc('users/128dfssab'))
} 

// CRUD functionality script methods for firebase
//  .get() to read .set() to create .update to update and .delete() to delete