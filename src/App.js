import React from 'react';
import './App.css';

const Video = () => (
  <div className="video-container">
    <video controls>
      <source src="/logo/nlogo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Video />
      </main>
      <footer className="footer">
      <div>
      <a href="mailto:nicolebachman12@gmail.com" style={{ color: 'white', textDecoration: 'none' }}>nicolebachman12@gmail.com</a>
  </div>
        <div>
          nicolebachman.com
        </div>
      </footer>
    </div>
  );
}

export default App;
