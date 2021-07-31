import React from 'react';
import PropTypes from 'prop-types';
//
import NewFeedStory from '../story/_main/NewFeedStory';
import NewFeedNewPost from '../new_post/NewFeedNewPost';
import NewFeedPosts from '../posts/NewFeedPosts';
// 
import './NewFeedCenter.scss';

//
NewFeedCenter.propTypes = {};

//
function NewFeedCenter({
    title_add_new,
    handleCreatePost,

    post_arr,
    has_fetched,
    is_fetching,
}) {
    return (
        <div className="NewFeedCenter">
            <div className="NewFeedCenter_story">
                <NewFeedStory />
            </div>

            <div className="NewFeedCenter_new">
                <NewFeedNewPost
                    title_add_new={title_add_new}
                    handleCreatePost={handleCreatePost}
                />
            </div>

            <div className="NewFeedCenter_posts">
                <NewFeedPosts
                    post_arr={has_fetched ? post_arr : []}
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default NewFeedCenter;
