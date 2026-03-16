import React from 'react'
import '../index.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const Navigate = useNavigate();

   const handleAboutClick = () => {
    Navigate('/About'); 
  };

  return (
    <div className='home'>
      <h2>Welcome to Home Page!!</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloremque hic odio sed aspernatur totam suscipit dolore ullam, omnis facere vero corrupti ad dicta repudiandae exercitationem voluptas facilis fugiat soluta rem!</p>

      <button onClick={handleAboutClick}>More About Me</button>
    </div>
  )
}

export default Home
