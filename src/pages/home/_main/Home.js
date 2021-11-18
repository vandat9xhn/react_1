import React from 'react';
import PropTypes from 'prop-types';
//
import HomeFeed from '../feed/_main/HomeFeed';
import HomeFashion from '../fashion/_main/HomeFashion';
import HomePhone from '../phone/_main/HomePhone';
import HomeCity from '../city/_main/HomeCity';
//
import './Home.scss';
import { Link } from 'react-router-dom';

//
Home.propTypes = {};

//
function Home(props) {
    //
    return (
        <div className="Home fashion-width padding-top-20px">
            <div className="Home_part">
                <HomeFeed />
            </div>

            <div className="Home_part">
                <HomeFashion />
            </div>

            <div className="Home_part">
                <HomePhone />
            </div>

            <div className="Home_part">
                <HomeCity />
            </div>

            <div className="margin-bottom-20px">
                <Link
                    className="color-inherit font-600 font-16px hv-underline hv-cl-blue"
                    to="/learn-html"
                >
                    Learn
                </Link>
            </div>
        </div>
    );
}

export default Home;
