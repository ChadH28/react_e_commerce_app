import React from 'react';
import './collection-item.scss';
// import { Link } from 'react-router-dom';

// Functional component
const CollectionItem = ({ 
  id,
  name,
  imageUrl,
  price
}) => (

  <div className='collection-item'>
    <div
      className='image'
      style={{backgroundImage: `url(${imageUrl})`}}
    />
    <div className='collection-footer'>
      <span className='name'>{name}</span>
      <span className='price'>{price}</span>
    </div>
  </div>

)

export default CollectionItem