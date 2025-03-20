// components/NonTechPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const NonTechPage = () => {
  const nonTechEvents = [
    { id: 1, title: 'Wizard Quiz', 
      desc: 'Magical trivia challenge', 
      details: 'Individual competition, 3 rounds' },
    { id: 2, title: 'Magical Connection', 
      desc: 'Find spell connections', 
      details: 'Identify hidden magical patterns' },
    { id: 3, title: 'Logo Sorcery', 
      desc: 'Magical symbol recognition', 
      details: 'Identify ancient magical symbols' }
  ];

  return (
    <div className="events-page non-tech-page">
      <h2 className="page-title">Non-Tech Events</h2>
      <div className="event-grid">
        {nonTechEvents.map(event => (
          <Link 
            to={`/events/non-tech/${event.id}`} 
            key={event.id} 
            className="event-card non-tech-card"
          >
            <h3>{event.title}</h3>
            <p>{event.desc}</p>
            <div className="sparkle"></div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NonTechPage;