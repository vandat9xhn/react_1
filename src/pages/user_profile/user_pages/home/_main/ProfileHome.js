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
function ProfileHome({last_name}) {

    //
    return (
        <div className="ProfileHome">
            <div className="ProfileHome_row display-flex justify-content-center">
                <div className="ProfileHome_col-left">
                    <ProfilePreview />
                </div>

                <div className="ProfileHome_col-right">
                    <ProfilePosts last_name={last_name}/>
                </div>
            </div>
        </div>
    );
}

export default ProfileHome;
