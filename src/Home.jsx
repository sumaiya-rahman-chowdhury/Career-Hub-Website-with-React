import React from 'react';
import Banner from './Banner';
import CatList from './CatList';
import FeaturedJobs from './FeaturedJobs';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <CatList></CatList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;