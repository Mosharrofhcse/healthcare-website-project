import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {

    const { id, name, price, description, img } = service;
    return (
        <div className="service pb-3">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5>Consultancy Fee: {price}</h5>
            <p className="px-3">{description}</p>
            <Link to={`/appointment/${id}`}>
                <button className="btn btn-success">Make Appointment for {name.toLowerCase()}</button>
            </Link>
        </div>
    );
};

export default Service;