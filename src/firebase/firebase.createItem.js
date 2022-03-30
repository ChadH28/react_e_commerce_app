import { firestore } from "./firebase.utils";

export const createItemDoc = async (createdItem, additionalData) => {
  if (!createdItem) return;

  // console.log(firestore.doc('users/128dfssab'))
  const itemRef = firestore.doc(`items/${createdItem.uid}`)
  const snapShot = await itemRef.get();
  // snapshot represents data brought in from firebase
  console.log(snapShot)
  // so if theres no snapShot that doesnt exist in db. A user will then be created and added into the db if signed in with google before
  if (!snapShot.exists) {
    const {
      item_name,
      imageUrl,
      price
    } = createdItem;
    const createdAt = new Date();

    try {
      // creating user object to be set in users collection in database
      // no passwords gets saved to db cause google Auth takes care of that
      await itemRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log('error creating item', error.message)
    }
  }
  return itemRef;
} 

// CRUD functionality script methods for firebase
//  .get() to read .set() to create .update to update and .delete() to delete