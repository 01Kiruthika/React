import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Icons = () => {
    return (
        <div className='icons'>

            <ul className='about-icons'>
                <li><Link><i class="fa fa-github" aria-hidden="true"></i></Link></li>
                <li><Link><i class="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                <li><Link><i class="fa fa-whatsapp" aria-hidden="true"></i></Link></li>
                <li><Link><i class="fa fa-instagram" aria-hidden="true"></i></Link></li>
            </ul>
        </div>
    )
}

export default Icons
