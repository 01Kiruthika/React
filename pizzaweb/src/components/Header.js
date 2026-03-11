import React from 'react'
import './Header.css'
import logo from '../image/logo.png'


const Header = () => {
  return (
    <>
    <header>
        <div className='logo'>
              <img src={logo} alt='pizza' />
        </div>
        <nav className='menu'>
            <ul>
                <a href='#'>Home</a>
                <a href='#'>About</a>
                 <a href='#'>Contact</a>
                  <a href='#'>Shop</a>
            </ul>
        </nav>
    </header>
      
    </>
  )
}

export default Header
