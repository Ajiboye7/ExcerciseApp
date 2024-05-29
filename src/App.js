import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blog from './pages/Blog';
import ExerciseDetails from './components/ExcerciseDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route  path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />}/>
          <Route path="/exercise/:id" element={<ExerciseDetails/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
