import React from 'react';
import PropTypes from 'prop-types';
//
import AboutLeft from '../left/_main/AboutLeft';
import AboutRight from '../right/_main/AboutRight';
//
import './ProfileAbout.scss';
import './ProfileAboutCommon.scss';

//
ProfileAbout.propTypes = {};

//
function ProfileAbout({ name, user_id }) {
    //
    return (
        <div className="ProfileAbout width-fit-content box-shadow-1 brs-8px-pc bg-primary">
            <div className="ProfileAbout_row display-flex justify-content-center">
                <div className="ProfileAbout_left padding-8px">
                    <AboutLeft />
                </div>

                <div className="ProfileAbout_right padding-16px">
                    <AboutRight name={name} user_id={user_id} />
                </div>
            </div>
        </div>
    );
}

export default ProfileAbout;
