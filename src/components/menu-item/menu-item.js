import React from 'react';
import './menu-item.scss';

// Functional component
const MenuItem = ({title}) => (

      <div className='menu-item'>
        <div className='content'>
          <h1 className='title'>{title}</h1>
          <span className='subt'>SHOP NOW</span>
        </div>
      </div>

)

export default MenuItem