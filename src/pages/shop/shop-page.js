import React from 'react';
import './shop-page.scss';
import { shop_collection } from '../../data/collections.data';
import CollectionPreview from '../../components//collection-preview/collection-preview';

// class based component to store the state values of menu items passed
  // always note:
    // constructor()
    // render()
class ShopPage extends React.Component {
  constructor() {
    // function to pull from react component into class 
    super();
    // setting state
    this.state = {
      collection: shop_collection
    }
  }


  render() {
    const {collection} = this.state
    return(
      <div className='shop-page'>
        {
          collection.map(
            // destructuring values off category list of data 
            ({
              id,
              ...otherCollectionProps
            }) => (
              <CollectionPreview 
                key={id} 
                {...otherCollectionProps}
              />
            )
          )
        }
      </div>
    )
  }
}

export default ShopPage;