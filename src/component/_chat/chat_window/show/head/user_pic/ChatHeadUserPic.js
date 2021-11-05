import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';

//
ChatHeadUserPic.propTypes = {};

//
function ChatHeadUserPic({ id, picture }) {
    //
    return (
        <div className="ChatHeadUserPic">
            <ActionPreviewProfile
                user_id={id}
                title_action={
                    <Link to={`/profile/${id}`}>
                        <img
                            className="brs-50 object-fit-cover"
                            src={picture}
                            alt=""
                            width="32"
                            height="32"
                        />
                    </Link>
                }
            />
        </div>
    );
}

export default ChatHeadUserPic;
