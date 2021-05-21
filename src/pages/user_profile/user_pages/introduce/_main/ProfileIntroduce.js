import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import AboutWork from '../about_work/AboutWork';
import AboutContact from '../about_contact/AboutContact';
//
import './ProfileIntroduce.scss';

// const
const about_common = [
    {
        about: 'work',
        title: 'Work and study',
    },
    {
        about: 'contact',
        title: 'Contact',
    },
    {
        about: 'personal',
        title: 'Personal',
    },
];

//
ProfileIntroduce.propTypes = {};

//
function ProfileIntroduce() {
    const [current_about, setCurrentAbout] = useState('work');

    //
    function changeCurrentAbout(new_current_about) {
        setCurrentAbout(new_current_about);
    }

    // 
    return (
        <div className="ProfileIntroduce">
            <div className="ProfileIntroduce_row display-flex justify-content-center">
                {/* Menu */}
                <div className="ProfileIntroduce_col-menu box-shadow-1 brs-5px bg-primary">
                    <div className="ProfileIntroduce__common App_title">
                        Common
                    </div>
                    {about_common.map((item, index) => (
                        <div
                            key={`ProfileIntroduce__about_${index}`}
                            className={`ProfileIntroduce__about ${
                                current_about == item.about
                                    ? 'active-color'
                                    : ''
                            }`}
                            onClick={() => changeCurrentAbout(item.about)}
                        >
                            {item.title}
                        </div>
                    ))}
                </div>

                {/* info */}
                <div className="ProfileIntroduce_col-info box-shadow-1 brs-5px bg-primary">
                    <div
                        className={
                            current_about == 'work' ? '' : 'display-none'
                        }
                    >
                        <AboutWork />
                    </div>

                    <div
                        className={
                            current_about == 'contact' ? '' : 'display-none'
                        }
                    >
                        <AboutContact />
                    </div>

                    <div
                        className={
                            current_about == 'personal' ? '' : 'display-none'
                        }
                    >
                        aaaa
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfileIntroduce;
