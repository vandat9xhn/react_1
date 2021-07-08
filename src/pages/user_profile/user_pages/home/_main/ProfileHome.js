import React from 'react';
import PropTypes from 'prop-types';
//
import ProfilePosts from '../posts/ProfilePosts';
import ProfilePreview from '../preview/_main/ProfilePreview';
//
import './ProfileHome.scss';
import './ProfileHomeRes.scss';

//
ProfileHome.propTypes = {
    last_name: PropTypes.string,
};

//
function ProfileHome({ name }) {
    //
    return (
        <div className="ProfileHome">
            <div className="ProfileHome_row display-flex justify-content-center">
                <div className="ProfileHome_left">
                    <ProfilePreview />
                </div>

                <div className="ProfileHome_right">
                    <ProfilePosts name={name} />
                </div>
            </div>
        </div>
    );
}

export default ProfileHome;
