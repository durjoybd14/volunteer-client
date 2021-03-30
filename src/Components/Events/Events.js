import React from 'react';

const Events = (props) => {
    const { name, imageURL, _id } = props.event;
    
    const deleteEvent = (id, e) => {
        const url = `https://guarded-temple-12412.herokuapp.com/deleteEvent/${id}`
        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(result => {
            if (result) {
                window.location.reload();
            }
        })
    }
    return (
        <div>
            <img src={imageURL} style={{ width: '250px', height: '200px' }} alt="" />
            <h3>{name} <button onClick={() => deleteEvent(_id)}>Delete</button> </h3>
            
        </div>
    );
};

export default Events;