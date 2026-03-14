import React from 'react'
import '../index.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header>
        <div className='logo'>
          <img src="https://static.vecteezy.com/system/resources/thumbnails/020/526/433/small/letters-sk-luxury-name-initials-monogram-logo-design-template-vector.jpg" alt="" />
        </div>

        <nav>
          <ul>
            <li> <Link to='/Home'>Home</Link></li>
            <li> <Link to='/About'>About</Link></li>
            <li> <Link to='/Contact'>Contact</Link></li>
            <li> <Link to='/Shop'>Shop</Link></li>
          </ul>
        </nav>
      </header>

    </>
  )
}

export default Header
