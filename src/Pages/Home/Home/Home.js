import React from 'react';
import Banner from '../Banner/Banner';
import Clients from '../Clients/Clients';
import Services from '../Services/Services';
import Specialists from '../Specialists/Specialists';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Services></Services>
            <Specialists></Specialists>
            <Clients></Clients>
        </div>
    );
};

export default Home;