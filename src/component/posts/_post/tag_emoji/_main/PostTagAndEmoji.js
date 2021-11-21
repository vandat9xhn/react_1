import React from 'react';
import PropTypes from 'prop-types';
//
import PostHeadTag from '../../head/_components/tag/PostHeadTag';
import PostHeadEmoji from '../../head/_components/emoji/PostHeadEmoji';
//
import './PostTagAndEmoji.scss';

//
PostTagAndEmoji.propTypes = {};

//
function PostTagAndEmoji({
    user_tag_arr,
    user_tag_rest_count,
    emoji_obj,

    openTagUser,
}) {
    //
    if (!emoji_obj.id && user_tag_arr.length == 0) {
        return null;
    }

    //
    return (
        <div className="PostTagAndEmoji padding-x-8px">
            <span className="PostTagAndEmoji_start pos-rel inline-block"></span>

            <PostHeadEmoji emoji_obj={emoji_obj} />

            <PostHeadTag
                user_tag_arr={user_tag_arr}
                user_tag_rest_count={user_tag_rest_count}
                openTagUser={openTagUser}
            />
        </div>
    );
}

export default PostTagAndEmoji;
