import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';

//
PostHeadToUserLeft.propTypes = {};

//
function PostHeadToUserLeft({ user }) {
    //
    return (
        <ActionPreviewProfile
            user_id={user.id}
            title_action={
                <Link className="flex-shrink-0" to={`/profile/${user.id}`}>
                    <img
                        className="brs-50 object-fit-cover"
                        src={user.picture}
                        alt=""
                        width="40"
                        height="40"
                    />
                </Link>
            }
        />
    );
}

export default PostHeadToUserLeft;
