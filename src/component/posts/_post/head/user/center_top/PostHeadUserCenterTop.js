import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import PostHeadEmoji from '../../_components/emoji/PostHeadEmoji';
import PostHeadTag from '../../_components/tag/PostHeadTag';

//
PostHeadUserCenterTop.propTypes = {};

//
function PostHeadUserCenterTop({
    user,
    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,

    openTagUser,
}) {
    //
    return (
        <React.Fragment>
            <span className="font-600">
                <ActionPreviewProfile
                    user_id={user.id}
                    title_action={
                        <Link
                            className="color-inherit hv-underline"
                            to={`/profile/${user.id}`}
                        >
                            {user.first_name + ' ' + user.last_name}
                        </Link>
                    }
                />
            </span>

            {emoji_obj.id || user_tag_arr.length ? (
                <span className="text-third">{' is '}</span>
            ) : null}

            <PostHeadEmoji emoji_obj={emoji_obj} />

            <PostHeadTag
                user_tag_arr={user_tag_arr}
                user_tag_rest_count={user_tag_rest_count}
                openTagUser={openTagUser}
            />
        </React.Fragment>
    );
}

export default PostHeadUserCenterTop;
