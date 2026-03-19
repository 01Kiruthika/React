import { useState, useEffect } from 'react'
import './App.css'
import { useRef } from 'react'

function App() {
  const planeRef = useRef(null);
  const [step, setStep] = useState(0);

  const handleMove = () => {
    debugger;
    let x = 0;
    let y = 0;

    if (step === 0) {
      x = 50; y = 0;
    } else if (step === 1) {
      x = 100; y = 50;
    } else if (step === 2) {
      x = 150; y = 100;
    } else if (step === 3) {
      x = 180; y = 150;
    } else if (step === 4) {
      x = 180; y = 180;
    } else if (step === 5) {
      x = 150; y = 250;
    } else if (step === 6) {
      x = 100; y = 280;
    } else if (step === 7) {
      x = 70; y = 300;
    }
    else if (step === 8) {
      x = 50; y = 320;
    }
    else if (step === 9) {
      x = 10; y = 300;
    }
    else if (step === 8) {
      x = 5; y = 280;
    } else if (step === 9) {
      x = 0; y = 250;
    } else if (step === 10) {
      x = -30; y = 300;
    } else if (step === 11) {
      x = -50; y = 300;
    }else if (step === 12) {
      x = -50; y = 280;
    } else if (step === 13) {
      x = -50; y = 250;
    }else if (step === 14) {
      x = -30; y = 300;
    } else if (step === 15) {
      x = -50; y = 300;
    }

    planeRef.current.style.transform = `translate(${x}px, ${y}px)`;
    planeRef.current.style.transition = "0.5s linear";


    if (step === 15) {
      setStep(0);
    } else {
      setStep(step + 1);
    }
  };

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
