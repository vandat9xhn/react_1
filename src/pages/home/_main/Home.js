import React from 'react';
import PropTypes from 'prop-types';
//
import HomeFeed from '../feed/_main/HomeFeed';
import HomeFashion from '../fashion/_main/HomeFashion';
import HomePhone from '../phone/_main/HomePhone';
import HomeCity from '../city/_main/HomeCity';
//
import './Home.scss';

//
Home.propTypes = {};

//
function Home(props) {
    //
    return (
        <div className="Home fashion-width padding-top-20px">
            <div className="Home_part margin-bottom-20px">
                <HomeFeed />
            </div>

            <div className="Home_part margin-bottom-20px">
                <HomeFashion />
            </div>

            <div className="Home_part margin-bottom-20px">
                <HomePhone />
            </div>

            <div className="Home_part">
                <HomeCity />
            </div>
        </div>
    );
}

export default Home;
