import { useState, useEffect } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  const [angle, setAngle] = useState(0); 
  const planeRef = useRef(null);

  const radius = 120; 

  const handleMove = () => {
    setAngle((prev) => prev + 20);
  };

  useEffect(() => {
    if (planeRef.current) {
      const rad = (angle * Math.PI) / 180;

      const x = radius * Math.cos(rad);
      const y = radius * Math.sin(rad);

      planeRef.current.style.transform = `translate(${x}px, ${y}px)`;
      planeRef.current.style.transition = "0.5s ease";
    }
  }, [angle]);

  return (
    <>
      <div className="container">
        {/* <h2>Airplane Animation</h2> */}

        <div className="circle">
          <img
            ref={planeRef}
            src="https://www.shutterstock.com/image-vector/airplane-icon-side-view-simple-600nw-2378259159.jpg"
            alt="plane"
            className="plane"
          />
        </div>

        <button onClick={handleMove} className='btn'>Click Me</button>
      </div>

    </>
  )
}

export default App
