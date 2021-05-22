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
    const [current_about, setCurrentAbout] = useState('overview');

    //
    function changeCurrentAbout(new_current_about) {
        setCurrentAbout(new_current_about);
    }

    //
    return (
        <div className="ProfileAbout box-shadow-1 brs-5px bg-primary">
            <div className="ProfileAbout_row display-flex justify-content-center">
                <div className="ProfileAbout_left">
                    <AboutLeft
                        current_about={current_about}
                        changeCurrentAbout={changeCurrentAbout}
                    />
                </div>

                <div className="ProfileAbout_right">
                    <AboutRight current_about={current_about} />
                </div>
            </div>
        </div>
    );
}

export default ProfileAbout;
