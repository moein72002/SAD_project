import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const RadiologyCenterEmployeePage = () => {
    const [timeSlots, setTimeSlots] = useState([]);

    useEffect(() => {
        api.get('/radiology-center/time-slots')
            .then(response => setTimeSlots(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Radiology Center Employee Page</h1>
            <Link to="/add/time-slot">Add Free Time</Link>
            <h2>Free Time Slots</h2>
            <ul>
                {timeSlots.map(slot => (
                    <li key={slot.id}>{slot.start_time} - {slot.end_time}</li>
                ))}
            </ul>
        </div>
    );
};

export default RadiologyCenterEmployeePage;
