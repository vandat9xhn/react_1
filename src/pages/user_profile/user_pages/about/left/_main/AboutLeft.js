import React from 'react';
import PropTypes from 'prop-types';
//
import { AboutRoutes } from '../../__common/routes/routes';
//
import AboutLeftItem from '../item/AboutLeftItem';
//
import './AboutLeft.scss';

//
AboutLeft.propTypes = {};

//
function AboutLeft(props) {
    //
    return (
        <div className="AboutLeft">
            <h2 className="AboutLeft_title padding-8px profile-route-title">
                About
            </h2>

            {AboutRoutes.map((item, index) => (
                <div key={index} className="AboutLeft_item">
                    <AboutLeftItem item={item} />
                </div>
            ))}
        </div>
    );
}

export default AboutLeft;
