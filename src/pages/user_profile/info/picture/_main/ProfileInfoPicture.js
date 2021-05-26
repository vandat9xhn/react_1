import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// 
import './ProfileInfoPicture.scss';

//
ProfileInfoPicture.propTypes = {};

//
function ProfileInfoPicture(props) {
    const { cover_picture, picture, openCoverPicture, openPicture } = props;

    //
    return (
        <div className="ProfileInfoPicture">
            <div className="ProfileInfoPicture_cover">
                <Link to="/posts/1">
                    <img
                        src={cover_picture}
                        alt=""
                        onClick={openCoverPicture}
                    />
                </Link>
            </div>

            <div className="ProfileInfoPicture_profile">
                <div className="ProfileInfoPicture_profile-contain">
                    <Link to="/posts/1">
                        <img src={picture} alt="" onClick={openPicture} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoPicture;
