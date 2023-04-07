import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import Routes instead of Switch
import Home from './pages/Home';
import MovieCollection from './pages/MovieCollection';
import Podcasts from './pages/Podcasts';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route path="/MovieCollection" element={<MovieCollection />} />
          <Route path="/Podcasts" element={<Podcasts />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
