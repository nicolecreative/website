import React from 'react';
import './App.css';

const Video = () => (
  <div className="video-container">
    <h2>Video</h2>
    <video autoPlay muted loop controls={false}>
      <source src="/logo/nlogo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Video Page</h1>
      </header>
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
