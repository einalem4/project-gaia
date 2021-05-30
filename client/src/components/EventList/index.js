import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events, title }) => {
  if (!events.length) {
    return <h3>You have not created any events yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {events &&
        events.map(event => (
          <div key={event._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${event.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {event.username}
              </Link>{' '}
               Event on {event.date}
            </p>
            <div className="card-body">
              <Link to={`/event/${event._id}`}>
                <p>{event.name}</p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default EventList;