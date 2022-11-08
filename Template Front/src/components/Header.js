import React from 'react'
import AppBar from './AppBar'
import {HeaderContainer, ImagePizza} from './Header.styled'
import pizza from '../assents/pizza.png'


const Header = () => {
  return (
    <div>
    <AppBar/>
    <HeaderContainer>
        <h1>Pizza Delivery Food</h1>
        <p>Try the best pizza in the region, order now and we'll deliver to you</p>
    </HeaderContainer>
    <ImagePizza src ={pizza}/>
    </div>
  )
}

export default Header