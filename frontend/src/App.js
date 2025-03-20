import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import TechPage from './components/TechPage';
import NonTechPage from './components/NonTechPage';
import EventDetail from './components/EventDetail';
import './App.css';

const sampleTechEvents = [
  { id: 1, type: 'tech', title: 'Magical Algorithm Design', date: '2023-04-15', location: 'Great Hall', image: '/images/algorithm.jpg' },
  { id: 2, type: 'tech', title: 'Enchanted Web Development', date: '2023-04-16', location: 'Ravenclaw Tower', image: '/images/webdev.jpg' },
  { id: 3, type: 'tech', title: 'Potions & Data Science', date: '2023-04-17', location: 'Potions Classroom', image: '/images/datascience.jpg' },
];

const sampleNonTechEvents = [
  { id: 1, type: 'non-tech', title: 'Magical Leadership Workshop', date: '2023-04-15', location: 'Hufflepuff Common Room', image: '/images/leadership.jpg' },
  { id: 2, type: 'non-tech', title: 'Wizarding Career Fair', date: '2023-04-16', location: 'Quidditch Pitch', image: '/images/career.jpg' },
  { id: 3, type: 'non-tech', title: 'Networking Potion Mixer', date: '2023-04-17', location: 'Room of Requirement', image: '/images/networking.jpg' },
];

const App = () => {
  return (
    <Router>
      <div className="app">
        <div className="video-container">
          <video autoPlay loop muted className="bg-video">
            <source src="/harry.mp4" type="video/mp4" />
            Your browser does not support HTML5 video.
          </video>
        </div>
        
        <header className="header">
          <nav className="nav-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/tech" className="nav-link">Tech Events</Link>
            <Link to="/non-tech" className="nav-link">Non-Tech</Link>
          </nav>
        </header>
        
        <Routes>
          <Route path="/" element={<HomePage techEvents={sampleTechEvents} nonTechEvents={sampleNonTechEvents} />} />
          <Route path="/tech" element={<TechPage />} />
          <Route path="/non-tech" element={<NonTechPage />} />
          <Route path="/events/:type/:id" element={<EventDetail />} />
        </Routes>
        
        <footer className="footer">
          <p>© 2023 Hogwarts School of Witchcraft & Wizardry</p>
        </footer>
      </div>
    </Router>
  );
};

const HomePage = ({ techEvents, nonTechEvents }) => (
  <div className="home-page">
    <div className="hero">
      <h2>Where Magic Meets Technology</h2>\
            <TechPage />

      <TechPage />
      <NonTechPage />
    </div>
  </div>
);

export default App;
