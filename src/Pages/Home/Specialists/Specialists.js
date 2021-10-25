import React, { useEffect, useState } from 'react';
import Specialist from '../Specialist/Specialist';
import './Specialists.css'

const Specialists = () => {
    const [specialists, setSpecialists] = useState([])
    useEffect(() => {
        fetch('specialists.json')
            .then(res => res.json())
            .then(data => setSpecialists(data));
    }, [])


    return (
        <div id="specialists">
            <h2 className="text-info my-5">Our Specialist Doctors</h2>
            <div className="specialist-container">
                {
                    specialists.map(specialist => <Specialist
                        key={specialist.id}
                        specialist={specialist}
                    >
                    </Specialist>)
                }
            </div>
        </div>
    );
};

export default Specialists;