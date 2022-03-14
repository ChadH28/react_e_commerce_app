import { firestore } from "./firebase.utils";

// chain method
firestore
  // calling collection from firestore
  .collection('users')
  // calling document of collection made which is document ID / userID
  .doc('pF8IOeeuhyYwjYly0JPh')
  // calling collection within the user document. This would be user CartItems or wishListItems associated with the user
  .collection('cartItems')
  // calling document within user cartItems collection made which is the cartItemID
  .doc('kiNmoa9wNQgqVpMCtLq2')


// pathway method
firestore
  // to get to specific doc
  .doc('/users/pF8IOeeuhyYwjYly0JPh/cartItems/kiNmoa9wNQgqVpMCtLq2')
  // or
  // to get a specific collection 
  .collection('/users/pF8IOeeuhyYwjYly0JPh/cartItems/') 