import React from 'react';
import { useParams } from 'react-router';

const Appointment = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Make an Appointment: {serviceId}</h2>
        </div>
    );
};

export default Appointment;