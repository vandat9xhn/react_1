import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import './ProfileInfoPicture.scss';

//
ProfileInfoPicture.propTypes = {};

//
function ProfileInfoPicture({
    cover,
    picture,
    is_fetching,

    openCoverPicture,
    openPicture,
}) {
    //
    return (
        <div
            className={`ProfileInfoPicture pos-rel ${
                is_fetching ? 'pointer-events-none' : ''
            }`}
        >
            <div className="ProfileInfoPicture_cover">
                <Link to="/posts/1">
                    <img
                        className="w-100per brs-5px object-fit-cover box-shadow-1"
                        src={is_fetching ? '' : cover}
                        alt=""
                        onClick={openCoverPicture}
                    />
                </Link>
            </div>

            <div className="ProfileInfoPicture_profile pos-abs top-100per x-center">
                <div className="ProfileInfoPicture_profile_contain pos-abs bottom-0 x-center">
                    <Link to="/posts/1">
                        <img
                            className={`object-fit-cover brs-50 box-shadow-1 ${
                                is_fetching
                                    ? 'ProfileInfoPicture_profile-fetching overflow-hidden bg-primary'
                                    : ''
                            }`}
                            src={is_fetching ? '' : picture}
                            alt=""
                            onClick={openPicture}
                        />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoPicture;
