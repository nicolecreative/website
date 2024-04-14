import React, { useEffect, useState } from 'react';
import './App.css';

const Video = () => {
  const [videoStyle, setVideoStyle] = useState({});

  useEffect(() => {
    const screenHeight = window.innerHeight;
    const videoHeight = screenHeight / 2; // Assuming the video height is half of the screen height
    const videoTop = (screenHeight - videoHeight) / 2;

    setVideoStyle({
      position: 'absolute',
      top: `${videoTop}px`,
      left: '0',
      width: '100%',
      height: `${videoHeight}px`,
    });
  }, []);

  return (
    <div className="video-container">
      <video controls style={videoStyle}>
        <source src="https://nicolecreative.github.io/logo/nlogo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

function App() {
  useEffect(() => {
    const handleOrientationChange = () => {
      window.location.reload(); // Refresh the page when orientation changes
    };

    window.addEventListener('orientationchange', handleOrientationChange);

    return () => {
      window.removeEventListener('orientationchange', handleOrientationChange);
    };
  }, []);

  return (
    <div className="App">
      <main>
        <Video />
      </main>
      <footer className="footer">
        <div>
          nicolebachman.com
        </div>
        <div>
          <a href="mailto:nicolebachman12@gmail.com" style={{ color: '#e0e0e0', textDecoration: 'none' }}>nicolebachman12@gmail.com</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
