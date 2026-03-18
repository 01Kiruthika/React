import React from 'react'
import './Home.css'
import Icons from '../Components/Icons'
const Home = () => {
  return (
    <div className='homecontainer'>
      <div className="about-me">
        <div className="my-image">
          <img src="https://www.shutterstock.com/image-photo/beauty-charisma-head-shot-portrait-600nw-2647728057.jpg" alt="my image" />
        </div>
        <div className="about-content">
          <h2>Hello!!</h2>
          <h2>I am Kiruthika Sundaram</h2>
          <h2 class="typing">
            <span>MERN Stack Developer</span>
            {/* <span>Programmer</span> */}
          </h2>
          <p>I am a passionate Full Stack Developer and Computer Science student who loves building modern web applications. I enjoy learning new technologies and solving real-world problems through coding.
          </p>
          <Icons />
        </div>

      </div>
    </div>
  )
}

export default Home
