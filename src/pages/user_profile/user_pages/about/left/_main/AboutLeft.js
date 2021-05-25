import React from 'react';
import PropTypes from 'prop-types';
//
import { common_about_title } from '../../__common/data/ProfileIntroData';

import AboutLeftItem from '../item/AboutLeftItem';

//
AboutLeft.propTypes = {};

//
function AboutLeft(props) {

    // 
    return (
        <div className="AboutLeft">
            <h2 className="AboutLeft_title margin-0">About</h2>
            
            {common_about_title.map((item, index) => (
                <div
                    key={`AboutLeft_${index}`}
                    className="AboutLeft_about"
                >
                    <AboutLeftItem
                        item={item}
                    />
                </div>
            ))}
        </div>
    );
}

export default AboutLeft;
