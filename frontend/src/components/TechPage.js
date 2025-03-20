// components/TechPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const TechPage = () => {
  const techEvents = [
    { id: 1, title: 'Wizard PPT', 
      desc: 'Present magical concepts', 
      details: '10-min presentation with magical effects' },
    { id: 2, title: 'Magic Project Expo', 
      desc: 'Showcase enchanted projects', 
      details: 'Demonstrate functional magical inventions' },
    { id: 3, title: 'Tech Wizard Quiz', 
      desc: 'Test magical tech knowledge', 
      details: 'Teams of 3, elimination rounds' },
    { id: 4, title: 'Spell Coding', 
      desc: 'Code magical algorithms', 
      details: 'Solve challenges in magical language' }
  ];

  return (
    <div className="events-page tech-page">
      <h2 className="page-title">Tech Events</h2>
      <div className="event-grid">
        {techEvents.map(event => (
          <Link 
            to={`/events/tech/${event.id}`} 
            key={event.id} 
            className="event-card tech-card"
          >
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
            <div className="glow"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechPage;