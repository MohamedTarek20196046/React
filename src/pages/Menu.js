import React from 'react'
import { MenuList } from '../helpers/MenuList';
import MenuItem from '../components/MenuItem';
function Menu() {
  return (
    <div className='menu'>
      <h1 className='menuTitle'>Our menu</h1>
      <div className='menuList'>
      {MenuList.map((menuItem, k) =>
        {
             return <MenuItem  image={menuItem.image} name={menuItem.name} price={menuItem.price}/>   
        })}
      </div>
    </div>
  )
}

export default Menu
