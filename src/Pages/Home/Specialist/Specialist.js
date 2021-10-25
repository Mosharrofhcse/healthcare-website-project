import React from 'react';
import './Specialist.css'

const Specialist = ({ specialist }) => {
    const { name, img, specialized } = specialist;
    return (
        <div className="specialist pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-warning">{specialized}</h5>
        </div>
    );
};

export default Specialist;