import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
ProfileLayoutUserSticky.propTypes = {};

//
function ProfileLayoutUserSticky({ link_to, picture, name }) {
    //
    return (
        <Link
            className="ProfileLayoutUserSticky display-block wh-100 padding-x-8px brs-6px color-inherit hv-bg-blur"
            to={link_to}
        >
            <div className="display-flex align-items-center h-100per">
                <img
                    className="brs-8px object-fit-cover"
                    src={picture}
                    alt=""
                    width="40"
                    height="40"
                />

                <div className="margin-left-12px text-nowrap font-600 font-17px">
                    {name}
                </div>
            </div>
        </Link>
    );
}

export default ProfileLayoutUserSticky;
