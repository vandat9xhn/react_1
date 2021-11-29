import React from 'react';
import PropTypes from 'prop-types';
// 
import Posts from '../../../../../../../component/posts/_posts/_main/Posts';

//
GroupPageDiscussPosts.propTypes = {};

//
function GroupPageDiscussPosts({ post_arr, has_fetched, is_fetching }) {
    //
    return (
        <div className="GroupPageDiscussPosts">
            <Posts
                posts={post_arr}
                has_fetched={has_fetched}
                is_fetching={is_fetching}
            />
        </div>
    );
}

export default GroupPageDiscussPosts;
