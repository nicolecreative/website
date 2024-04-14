import React from 'react';
import './Home.css'; // Import CSS file for styling

function Page2() {
    return (
        <div className="container">
          <div className="video-container">
            <video autoPlay loop muted>
              <source src="/nlogo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      );
}

export default Page2;
