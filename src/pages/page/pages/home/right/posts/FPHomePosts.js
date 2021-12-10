import React from 'react';
import PropTypes from 'prop-types';
//
import Posts from '../../../../../../component/posts/_posts/_main/Posts';

//
FPHomePosts.propTypes = {};

//
function FPHomePosts({ post_arr, has_fetched, is_fetching }) {
    //
    return (
        <div className="FPHomePosts">
            <h2 className="fb-page-home-title-post">Other posts</h2>

            <div>
                <Posts
                    posts={post_arr}
                    has_fetched={has_fetched}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default FPHomePosts;
