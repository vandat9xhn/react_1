import React from 'react';
import PropTypes from 'prop-types';
//
import './ProfileInfoBio.scss';

//
ProfileInfoBio.propTypes = {};

//
function ProfileInfoBio({ is_user, bio, handleChangeBio }) {
    //
    return (
        <div className="ProfileInfoBio margin-auto">
            <div className="ProfileInfoBio_contain text-align-center">
                <div onClick={is_user ? handleChangeBio : undefined}>
                    {bio}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfoBio;
