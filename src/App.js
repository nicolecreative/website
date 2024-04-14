import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Page1 from './Page1';
import Page2 from './Page2';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          
        </header>
        <Routes> {/* Use Routes instead of Switch */}
          <Route path="/" element={<Home />} />
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
