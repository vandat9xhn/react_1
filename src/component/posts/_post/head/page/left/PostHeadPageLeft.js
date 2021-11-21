import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';

//
PostHeadPageLeft.propTypes = {};

//
function PostHeadPageLeft({ page_obj }) {
    //
    return (
        <ActionPreviewProfile
            user_id={page_obj.id}
            title_action={
                <Link className="flex-shrink-0" to={`/page/${page_obj.id}`}>
                    <img
                        className="brs-50 object-fit-cover"
                        src={page_obj.picture}
                        alt=""
                        width="40"
                        height="40"
                    />
                </Link>
            }
        />
    );
}

export default PostHeadPageLeft;
