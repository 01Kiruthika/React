import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Icons = () => {
    return (
        <div className='icons'>

            <ul className='about-icons'>
                <li><Link to="https://github.com/01Kiruthika" target='_blank'><i class="fa fa-github" aria-hidden="true"></i></Link></li>
                <li><Link to="https://www.linkedin.com/in/kiruthika-b61293281/" target='_blank'><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                <li><Link to="https://web.whatsapp.com/" target='_blank'><i class="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                <li><Link to="https://www.instagram.com/___kiruthika__sundaram___?igsh=cXZvaHdibHZsN3U5" target='_blank'><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    )
}

export default Icons
