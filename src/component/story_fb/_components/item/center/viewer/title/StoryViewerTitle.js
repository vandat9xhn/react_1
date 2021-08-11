import React from 'react';
import PropTypes from 'prop-types';

//
StoryViewerTitle.propTypes = {};

//
function StoryViewerTitle({
    count_other_viewer,
    count_friend_viewer,
    handleToggleFriendView,
}) {
    //
    return (
        <div className="padding-4px text-white">
            <div
                className={`${
                    count_friend_viewer ? 'cursor-pointer' : 'display-none'
                }`}
                onClick={handleToggleFriendView}
            >
                <span>
                    {count_friend_viewer} friend
                    {count_friend_viewer > 1 ? 's' : ''}
                </span>
            </div>

            <div className={`${count_other_viewer ? '' : 'display-none'}`}>
                <span className="opacity-05">
                    {count_other_viewer} other
                    {count_other_viewer > 1 ? 's' : ''}
                </span>
            </div>
        </div>
    );
}

export default StoryViewerTitle;
