import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import AboutLeft from '../left/_main/AboutLeft';
import AboutRight from '../right/_main/AboutRight';
//
import './ProfileAbout.scss';

//
ProfileAbout.propTypes = {};

//
function ProfileAbout() {
    //
    return (
        <div className="ProfileAbout width-fit-content margin-auto box-shadow-1 brs-8px bg-primary">
            <div className="ProfileAbout_row display-flex justify-content-center">
                <div className="ProfileAbout_left padding-8px">
                    <AboutLeft />
                </div>

                <div className="ProfileAbout_right padding-8px">
                    <AboutRight />
                </div>
            </div>
        </div>
    );
}

export default ProfileAbout;
