import React from 'react';
import './menu-item.scss';
import { Link } from 'react-router-dom';

// Functional component
const MenuItem = ({ 
  title,
  imageUrl,
  size,
  history,
  linkUrl,
  match
}) => (

  <div className={`${size} menu-item`} onClick={() => history.push(`${linkUrl}`)} >
    <div className='background-image' style={{ backgroundImage: `url(${imageUrl})`}}></div>
    <div className='content'>
      <Link style={{textDecoration: "none" }} to={'/'+ linkUrl}>
        <h1 className='title'>{title.toUpperCase()}</h1>
      </Link>
      <span className='subt'>SHOP NOW</span>
    </div>
  </div>

)

export default MenuItem