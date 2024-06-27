import React, { useState, useEffect } from 'react';
import api from '../services/api';

const DoctorPage = () => {
    const [visits, setVisits] = useState([]);

    useEffect(() => {
        api.get('/visits/list')
            .then(response => setVisits(response.data))
            .catch(error => console.error(error));
    }, []);

    return (
        <div>
            <h1>Doctor Page</h1>
            <h2>Scheduled Visits</h2>
            <ul>
                {visits.map(visit => (
                    <li key={visit.id}>{visit.patient_name} - {visit.date}</li>
                ))}
            </ul>
        </div>
    );
};

export default DoctorPage;
