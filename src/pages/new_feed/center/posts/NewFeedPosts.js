import React from 'react';
import PropTypes from 'prop-types';
//
import Posts from '../../../../component/posts/_posts/_main/PostsWs';

//
NewFeedPosts.propTypes = {};

//
function NewFeedPosts({ post_arr, has_fetched, is_fetching }) {
    return (
        <React.Fragment>
            <Posts
                posts={has_fetched ? post_arr : []}
                has_fetched={has_fetched}
                is_fetching={is_fetching}
            />
        </React.Fragment>
    );
}

export default NewFeedPosts;
