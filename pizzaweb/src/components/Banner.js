import React from 'react'
import './banner.css'
import banner from '../image/banner.webp'

const Banner = () => {
  return (
    <>
    <div className='banner'>
        <img src={banner} alt='banner' />
        <div className='banner-content'>
             <h3>Fresh From the Oven</h3>
             <p>Delicious pizza made with the finest ingredients just for you.</p>
             <button>Order Now</button>

        </div>
        
    </div>
      
    </>
  )
}

export default Banner
