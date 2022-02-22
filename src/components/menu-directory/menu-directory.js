import React from 'react';
import './menu-directoy.scss';
import MenuItem from '../menu-item/menu-item'

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
      categories: [
        {
          title: 'hats',
          imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
          id: 1
        },
        {
          title: 'jackets',
          imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
          id: 2
        },
        {
          title: 'sneakers',
          imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
          id: 3
        },
        {
          title: 'womens',
          imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
          size: 'large',
          id: 4
        },
        {
          title: 'mens',
          imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
          size: 'large',
          id: 5
        }
      ]
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
              id
            }) => (
              <MenuItem key={id} title={title}/>
            )
          )
        }
      </div>
    )
  }

}

export default Directory;