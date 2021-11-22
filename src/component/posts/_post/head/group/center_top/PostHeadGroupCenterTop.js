import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import ActionPreviewProfile from '../../../../../action_preview_profile/_main/ActionPreviewProfile';
import PostHeadEmoji from '../../_components/emoji/PostHeadEmoji';
import PostHeadTag from '../../_components/tag/PostHeadTag';

//
PostHeadGroupCenterTop.propTypes = {};

//
function PostHeadGroupCenterTop({
    group_obj,
    emoji_obj,
    user_tag_arr,
    user_tag_rest_count,

    openTagUser,
    joinGroup,
}) {
    //
    return (
        <React.Fragment>
            <span className="font-600">
                <ActionPreviewProfile
                    user_id={group_obj.id}
                    title_action={
                        <Link
                            className="color-inherit hv-cl-blue"
                            to={`/group/${group_obj.id}`}
                        >
                            {group_obj.name}
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

            {group_obj.type == 'suggested_public' ? (
                <React.Fragment>
                    {' · '}
                    <span
                        className="font-500 text-blue cursor-pointer"
                        onClick={joinGroup}
                    >
                        Join
                    </span>
                </React.Fragment>
            ) : null}
        </React.Fragment>
    );
}

export default PostHeadGroupCenterTop;
