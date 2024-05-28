import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
