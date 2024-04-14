import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

// Define your components here
const Video = () => (
  <div>
    <h2>Video</h2>
    <video controls>
      <source src="/logo/nlogo.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </div>
);

const Page1 = () => (
  <div>
    <h2>Page 1</h2>
    {/* Add content for Page 1 here */}
  </div>
);

const Page2 = () => (
  <div>
    <h2>Page 2</h2>
    {/* Add content for Page 2 here */}
  </div>
);

function App() {
  return (
    <Router basename="/logo">
      <div className="App">
        <header className="App-header">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Video />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
        </Routes>
        <footer className="footer">
          <div>
            nicolebachman12@gmail.com
          </div>
          <div>
            nicolebachman.com
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
