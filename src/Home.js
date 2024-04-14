import React from 'react';
import './Home.css'; // Import CSS file for styling

function Home() {
  return (
    <div className="container">
      <div className="image-container">
        <img src={process.env.PUBLIC_URL + '/n.png'} alt="Logo" />
      </div>
    </div>
  );
}

export default Home;