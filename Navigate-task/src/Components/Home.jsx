import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../App.jsx"
function Home() {
  const navigate = useNavigate();

  const handleAboutClick = () => {
    navigate('/about'); // Navigate to the '/about' route
  };

  const goBack = () => {
    navigate(-1); // Go back one step in history
  };

  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={handleAboutClick}>Go to About Page</button>
      <button onClick={goBack}>Go Back</button>
    </div>
  );
}

export default Home;
