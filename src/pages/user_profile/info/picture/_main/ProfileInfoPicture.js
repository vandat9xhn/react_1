import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ProfileInfoPicture.scss';

//
ProfileInfoPicture.propTypes = {};

//
function ProfileInfoPicture({ picture, has_new_story, openPicture }) {
    //
    return (
        <div className="ProfileInfoPicture pos-rel h-100per">
            <div className="ProfileInfoPicture_contain pos-abs bottom-0 left-0 w-100per">
                <Link
                    className={`ProfileInfoPicture_link display-block w-100per brs-50 box-shadow-1 ${
                        has_new_story ? 'ProfileInfoPicture_link-story' : ''
                    }`}
                    to="/posts/1"
                >
                    <img
                        className="ProfileInfoPicture_img w-100per brs-50 bg-primary object-fit-cover"
                        src={picture}
                        // width="160"
                        height="160"
                        alt=""
                        onClick={openPicture}
                    />
                </Link>
            </div>
        </div>
    );
}

export default ProfileInfoPicture;
