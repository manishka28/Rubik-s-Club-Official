import React, { useState, useEffect, useCallback } from 'react';
import debounce from 'lodash/debounce'; // Install lodash for debounce functionality

function Event() {
  const [searchQuery, setSearchQuery] = useState('');
  const [events, setEvents] = useState([]);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    // Load events from the JSON file
    fetch('./json/events.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setEvents(data);
       
        
        setFilteredEvents(data); // Initialize filteredEvents with all events
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading events:', error);
        setError('Error loading events');
        setLoading(false);
      });
  }, []);

   console.log(events);

  // Debounced search handler
  const debouncedSearch = useCallback(
    debounce((query) => {
      if (query) {
        const filtered = events.filter((event) =>
          event.title && event.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredEvents(filtered);
        setHasSearched(true);
      } else {
        setFilteredEvents(events);
        setHasSearched(false);
      }
    }, 300),
    [events]
  );

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    debouncedSearch(e.target.value);
  };

  // Get current date
  const currentDate = new Date();

  // Separate events into upcoming and past
  const upcomingEvents = filteredEvents.filter((event) => new Date(event.date) > currentDate);
  const pastEvents = filteredEvents.filter((event) => new Date(event.date) <= currentDate);

  const gradientStyle = {
    background: 'linear-gradient(179.6deg, #FFFFFF 0.35%, rgba(255, 255, 255, 0.38) 122.8%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    color: 'transparent',
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    const suffix = (day) => {
      if (day >= 11 && day <= 13) return 'th';
      switch (day % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
      }
    };

    return `${day}${suffix(day)} ${month} ${year}`;
  };

  const cardStyle = {
    background: 'rgba(255, 255, 255, 0.1)',
    borderRadius: '24px',
    backdropFilter: 'blur(10px)',
    padding: '16px',
    marginBottom: '16px',
  };

  if (loading) return <div className="text-center text-white text-xl">Loading...</div>;
  if (error) return <div className="text-center text-white text-xl">{error}</div>;

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-5xl font-extrabold text-center mb-8" style={gradientStyle}>
        Events
      </h1>
      <div className="flex justify-center items-center w-full md:w-1/2 gap-2 mb-8">
        <input
          type="text"
          className="bg-transparent text-white border border-lightDark grow py-2 px-4 rounded-full focus:outline-none placeholder-white"
          placeholder="Search"
          value={searchQuery}
          onChange={handleSearch}
        />
        <button
          onClick={() => debouncedSearch(searchQuery)}
          className="bg-primaryRed hover:bg-tertiaryPink text-white rounded-full px-4 py-2"
        >
          Search
        </button>
      </div>

      {/* Upcoming Events Section */}
      <div className="w-full mt-24 md:w-1/2 mb-8">
        <h2 className="text-4xl font-extrabold text-center mb-8" style={gradientStyle}>
          Upcoming Events
        </h2>
        {hasSearched && upcomingEvents.length === 0 ? (
          <div className="text-center text-white text-xl">No upcoming events found</div>
        ) : (
          upcomingEvents.map((event, index) => (
            <div key={index} className="p-4" style={cardStyle}>
              <img
                src={event.image || 'https://via.placeholder.com/500'} // Fallback image URL
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
              <h4 className='text-lg text-tertiaryPink font-bold mb-4'>{formatDate(event.date)}</h4>
              <p className="text-lg text-white mb-4">{event.description}</p>
              <button className="bg-primaryRed hover:bg-tertiaryPink text-white rounded-full px-4 py-2">
                {event.buttonText}
              </button>
            </div>
          ))
        )}
      </div>

      {/* Past Events Section */}
      <div className="w-full mb-10 mt-28 md:w-1/2">
        <h2 className="text-4xl font-extrabold text-center mb-8" style={gradientStyle}>
          Past Events
        </h2>
        {hasSearched && pastEvents.length === 0 ? (
          <div className="text-center text-white text-xl">No past events found</div>
        ) : (
          pastEvents.map((event, index) => (
            <div key={index} className="p-4" style={cardStyle}>
              <img
                src={event.image || 'https://via.placeholder.com/500'} // Fallback image URL
                alt={event.title}
                className="w-full h-64 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold text-white mb-2">{event.title}</h3>
              <h4 className='text-lg text-tertiaryPink font-bold mb-4'>{formatDate(event.date)}</h4>
              <p className="text-lg text-white mb-4">{event.description}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Event;
