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
    profile: PropTypes.object,
    is_fetching: PropTypes.bool,
    onClickSk: PropTypes.func,
};

//
function ProfileHome(props) {
    //
    const { profile, is_fetching, onClickSk} = props;

    const { last_name, hobby, university, from, live_now } = profile || {};

    //
    return (
        <div className="ProfileHome">
            <div className="ProfileHome_row display-flex justify-content-center">
                <div className="ProfileHome_col-left">
                    <ProfilePreview
                        hobby={hobby}
                        university={university}
                        from={from}
                        live_now={live_now}

                        is_fetching={is_fetching}
                        onClickSk={onClickSk}
                    />
                </div>

                <div className="ProfileHome_col-right">
                    <ProfilePosts last_name={last_name} />
                </div>
            </div>
        </div>
    );
}

export default ProfileHome;
