import React from 'react';
import PropTypes from 'prop-types';
//
import { common_about_title } from '../../__common/routes/routes';
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
            <h2 className="AboutLeft_title margin-0">About</h2>

            {common_about_title.map((item, index) => (
                <div key={`AboutLeft_${index}`} className="AboutLeft_item">
                    <AboutLeftItem item={item} />
                </div>
            ))}
        </div>
    );
}

export default AboutLeft;
