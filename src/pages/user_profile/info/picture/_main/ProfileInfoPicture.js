import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//
ProfileInfoPicture.propTypes = {};

//
function ProfileInfoPicture(props) {
    const { cover_picture, picture, openCoverPicture, openPicture } = props;

    //
    return (
        <div className="ProfileInfo_pics">
            <div className="ProfileInfo_cover-pic">
                <Link to="/posts/1">
                    <img src={cover_picture} alt="" onClick={openCoverPicture} />
                </Link>
            </div>

            <div className="ProfileInfo_div-pic">
                <div className="ProfileInfo_profile-pic">
                    <Link to="/posts/1">
                        <img src={picture} alt="" onClick={openPicture} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoPicture;
