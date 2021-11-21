import React from 'react';
import PropTypes from 'prop-types';

//
PostHeadEmoji.propTypes = {};

//
function PostHeadEmoji({ emoji_obj }) {
    //
    if (!emoji_obj || !emoji_obj.id) {
        return null;
    }

    //
    return (
        <React.Fragment>
            <span className="text-third">{emoji_obj.type} </span>

            <span className="text-222">{emoji_obj.name}</span>
        </React.Fragment>
    );
}

export default PostHeadEmoji;
