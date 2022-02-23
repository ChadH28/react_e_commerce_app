import React from 'react';
import './menu-directory.scss';
import MenuItem from '../menu-item/menu-item';
import { categories } from '../../data/data';

// class based component to store the state values of menu items passed
  // always note:
    // constructor()
    // render()
class Directory extends React.Component {
  constructor() {
    // function to pull from react component into class 
    super();
    // setting state
    this.state = {
      categories: categories
    }
  }


  render() {
    return(
      <div className='directory-menu'>
        {
          this.state.categories.map(
            // destructuring values off category list of data 
            ({
              title,
              imageUrl,
              id,
              size
            }) => (
              <MenuItem 
                key={id} 
                imageUrl={imageUrl} 
                title={title}
                size={size}
              />
            )
          )
        }
      </div>
    )
  }

}

export default Directory;