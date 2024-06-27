import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

const SystemSecretaryPage = () => {
    const [data, setData] = useState({ drugs: [], doctors: [], patients: [], charities: [], radiologyCenters: [], timeSlots: [] });

    useEffect(() => {
        // Fetch all necessary data
        const fetchData = async () => {
            try {
                const [drugs, doctors, patients, charities, radiologyCenters, timeSlots] = await Promise.all([
                    api.get('/drugs/list'),
                    api.get('/doctors/list'),
                    api.get('/patients/list'),
                    api.get('/charities/list'),
                    api.get('/radiology-centers/list'),
                    api.get('/time-slots/list'),
                ]);
                setData({ drugs: drugs.data, doctors: doctors.data, patients: patients.data, charities: charities.data, radiologyCenters: radiologyCenters.data, timeSlots: timeSlots.data });
            } catch (error) {
                console.error(error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h1>System Secretary Page</h1>
            <div>
                <h2>Lists</h2>
                <div>
                    <h3>Drugs</h3>
                    <ul>
                        {data.drugs.map(drug => <li key={drug.id}>{drug.name}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Doctors</h3>
                    <ul>
                        {data.doctors.map(doctor => <li key={doctor.id}>{doctor.name}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Patients</h3>
                    <ul>
                        {data.patients.map(patient => <li key={patient.id}>{patient.first_name} {patient.last_name}</li>)}
                    </ul>
                </div>
                <div>
                    <h3>Charities and their Employees</h3>
                    <ul>
                        {data.charities.map(charity => (
                            <li key={charity.id}>
                                {charity.name}
                                <ul>
                                    {charity.employees.map(employee => (
                                        <li key={employee.id}>{employee.first_name} {employee.last_name}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Radiology Centers and their Employees</h3>
                    <ul>
                        {data.radiologyCenters.map(center => (
                            <li key={center.id}>
                                {center.name}
                                <ul>
                                    {center.employees.map(employee => (
                                        <li key={employee.id}>{employee.first_name} {employee.last_name}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <h3>Free Time Slots</h3>
                    <ul>
                        {data.timeSlots.map(slot => (
                            <li key={slot.id}>{slot.start_time} - {slot.end_time}</li>
                        ))}
                    </ul>
                </div>
            </div>
            <div>
                <h2>Scheduling</h2>
                <Link to="/schedule/radiology">Set Time for Radiology</Link>
                <Link to="/schedule/doctor">Set Time for Doctor Visit</Link>
            </div>
        </div>
    );
};

export default SystemSecretaryPage;
