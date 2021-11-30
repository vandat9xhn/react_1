import React from 'react';
import PropTypes from 'prop-types';

//
GroupPageTopicInfo.propTypes = {};

//
function GroupPageTopicInfo({ post_count, is_hidden, pinned }) {
    //
    return (
        <div className="GroupPageTopicInfo">
            {is_hidden
                ? 'Hidden by admin · '
                : pinned
                ? 'Pinned by admin · '
                : ''}
            {post_count} post{post_count >= 2 ? 's' : ''}
        </div>
    );
}

export default GroupPageTopicInfo;
