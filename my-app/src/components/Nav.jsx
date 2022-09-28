import React from 'react'
import { useNavigate } from 'react-router'
import '../CSS/nav.css'
const Nav = () => {
    const navigate = useNavigate()

    const navigateHome = ( ) => navigate('/')
    const navigateCart = ( ) => navigate('/cart')

    const navigateLogin = ( ) => navigate('/')

  return (
   <div className="NavbarContainer">
  <div className="NavbarInnerContainer">
  <div className="NavbarChild" onClick={navigateHome}>Home</div>
    <div className="NavbarChild" onClick={navigateCart}>Cart</div>
    <div className="NavbarChild" onClick={navigateLogin}>Login</div>
  </div>
   </div>
  )
}

export default Nav