import React from 'react';
import PropTypes from 'prop-types';
//
import NewFeedStory from '../story/_main/NewFeedStory';
import NewFeedNewPost from '../new_post/NewFeedNewPost';
import NewFeedPosts from '../posts/NewFeedPosts';
//
import './NewFeedCenter.scss';
import { IS_MOBILE } from '../../../../_constant/Constant';
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
import { Link } from 'react-router-dom';

//
NewFeedCenter.propTypes = {};

//
function NewFeedCenter({
    title_add_new,

    post_arr,
    has_fetched,
    is_fetching,

    handleCreatePost,
}) {
    return (
        <div className="NewFeedCenter">
            {IS_MOBILE ? (
                <div className="NewFeedCenter_search display-flex margin-bottom-10px margin-left-8px">
                    <Link className="text-third" to={`/search`}>
                        <div className="btn-icon-36px bg-primary box-show-1">
                            <IconsInput y={200} size_icon="20px" />
                        </div>
                    </Link>
                </div>
            ) : null}

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
