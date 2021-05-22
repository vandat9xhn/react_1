import React from 'react';
import PropTypes from 'prop-types';
//
import { common_about_title } from '../../__common/data/ProfileIntroData';

import AboutLeftItem from '../item/AboutLeftItem';

//
AboutLeft.propTypes = {};

//
function AboutLeft(props) {
    const {current_about, changeCurrentAbout} = props;

    // 
    return (
        <div className="AboutLeft">
            <h2 className="AboutLeft_title">About</h2>
            
            {common_about_title.map((item, index) => (
                <div
                    key={`AboutLeft_${index}`}
                    className={`AboutLeft_about ${
                        current_about == item.about ? 'active-color' : ''
                    }`}
                >
                    <AboutLeftItem
                        item={item}
                        changeCurrentAbout={changeCurrentAbout}
                        is_active={current_about == item.about}
                    />
                </div>
            ))}
        </div>
    );
}

export default AboutLeft;
