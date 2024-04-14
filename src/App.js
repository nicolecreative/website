import React, { useEffect, useState } from 'react';
import './App.css';

const Video = () => {
  const [videoStyle, setVideoStyle] = useState({});

  useEffect(() => {
    // Calculate the position of the video element
    const screenHeight = window.innerHeight;
    const videoHeight = screenHeight / 2; // Assuming the video height is half of the screen height
    const videoTop = (screenHeight - videoHeight) / 2;

    // Set the style for the video element
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
  return (
    <div className="App">
      <main>
        <Video />
      </main>
      <footer className="footer">
        <div>
          nicolebachman12@gmail.com
        </div>
        <div>
          nicolebachman.com
        </div>
      </footer>
    </div>
  );
}

export default App;
