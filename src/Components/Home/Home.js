import React, { useEffect, useState } from 'react';
import Events from '../Events/Events';


const Home = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch(`https://guarded-temple-12412.herokuapp.com/events`)
        .then(res => res.json())
        .then(data => setEvents(data))
    }, [])

    const bodyStyle = {
        
            textAlign: 'center',
            display:'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '10px',
            marginTop: '20px'
          
    }
    return (
        <div style={bodyStyle}>
            {
                events.map(event =><Events event={event} key={event._id}></Events>)
            }
        </div>
    );
};

export default Home;