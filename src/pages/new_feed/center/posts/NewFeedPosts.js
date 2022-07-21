import React from 'react';
import PropTypes from 'prop-types';
//
import Posts from '../../../../component/posts/_posts/_main/Posts';
import NewFeedSuggestedFriends from '../suggested/friends/_main/NewFeedSuggestedFriends';
import NewFeedSuggestedGroups from '../suggested/groups/_main/NewFeedSuggestedGroups';
import NewFeedShortVideo from '../suggested/short_video/NewFeedShortVideo';

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
                // 
                interleaved_elm_arr={[
                    {
                        elm: <NewFeedSuggestedFriends />,
                        interleaved_ix: 3,
                    },
                    {
                        elm: <NewFeedShortVideo />,
                        interleaved_ix: 10,
                    },
                    {
                        elm: <NewFeedSuggestedGroups />,
                        interleaved_ix: 22,
                    },
                ]}
            />
        </React.Fragment>
    );
}

export default NewFeedPosts;
