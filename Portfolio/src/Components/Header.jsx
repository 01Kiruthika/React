import React from 'react'
import '../App.jsx'
import '../App.css'
import { Link } from 'react-router-dom'

const Header = ({ open, setOpen }) => {
  return (

    <aside className={open ? "active" : ""}>
      <div className="logo">
        {/* <img src="https://cdn.3dnames.co/previews/ae02/250x250/k/ae02kiruthika3dxx.webp" alt="" /> */}
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5UR5MKiLm57mTg9CCKaJMnRZ9y0ZNf3Md4A&s" alt="" />
      </div>

      <div className="menu">
        <ul>
          <li><Link to="/home"><i class="fa fa-home" aria-hidden="true"></i>
            Home</Link></li>
          <li><Link to="/about"><i class="fa fa-user" aria-hidden="true"></i>
            About</Link></li>
          <li><Link to="/skills"><i class="fa fa-cog" aria-hidden="true"></i>
            Skills</Link></li>
          <li><Link to="/project"><i class="fa fa-briefcase" aria-hidden="true"></i>
            Project</Link></li>
          <li><Link to="/miniproject"><i class="fa fa-briefcase" aria-hidden="true"></i>
            Mini Project</Link></li>
          <li><Link to="/resume"><i class="fa fa-file-text-o" aria-hidden="true"></i>
            Resume</Link></li>
          <li><Link to="/contact"><i class="fa fa-envelope" aria-hidden="true"></i>
            Contact</Link></li>

        </ul>
      </div>

    </aside>
  )
}

export default Header
