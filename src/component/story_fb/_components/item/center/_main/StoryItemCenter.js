import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';
//
import StoryContent from '../content/_main/StoryContent';
import StoryViewerList from '../viewer/list/_main/StoryViewerList';
import StoryViewerTitle from '../viewer/title/StoryViewerTitle';
//
import './StoryItemCenter.scss';

//
StoryItemCenter.propTypes = {};

//
function StoryItemCenter({
    is_user,
    story_obj,

    is_fetching,
    is_fetching_story,
    is_fetching_viewer,
    is_show_viewer,

    handleCloseStoryItem,
    handleShowMoreViewer,
    handleCloseFriendViewer,
    handleToggleFriendView,
}) {
    //
    const { list, user, count, count_new, active_step, active_item_ix } =
        story_obj;

    const {
        id,
        type_story,
        story_link,
        created_time,
        
        vid_pic_obj,
        text_arr,

        viewer_arr,
        count_viewer,
        count_friend_viewer,
    } = list[active_item_ix];

    //
    return (
        <div
            key={`${id}`}
            className="StoryItemCenter wh-100 position-rel display-flex flex-col justify-content-center"
        >
            <div
                className={`position-rel ${
                    IS_MOBILE ? 'wh-100' : 'StoryItemCenter_item'
                }`}
            >
                <StoryContent
                    handleCloseStoryItem={handleCloseStoryItem}
                    active_step={active_step}
                    //
                    user={user}
                    count={count}
                    //
                    type_story={type_story}
                    vid_pic_obj={vid_pic_obj}
                    text_arr={text_arr}
                    created_time={created_time}
                />

                {is_user ? (
                    <div
                        className={`StoryItemCenter_viewer_list pos-abs-100 ${
                            is_show_viewer ? '' : 'display-none'
                        }`}
                    >
                        <StoryViewerList
                            viewer_arr={viewer_arr}
                            count_friend_viewer={count_friend_viewer}
                            is_fetching={is_fetching_viewer}
                            handleShowMore={handleShowMoreViewer}
                            handleCloseFriendViewer={handleCloseFriendViewer}
                        />
                    </div>
                ) : null}

                {story_link ? (
                    <div className="StoryItemCenter_bottom right-0">
                        <Link
                            to={story_link}
                            className="StoryItemCenter_link label-field text-white"
                        >
                            <div className="padding-4px">
                                <span>See more</span>
                            </div>
                        </Link>
                    </div>
                ) : null}

                <div className="pos-abs-center">
                    <CircleLoading
                        is_fetching={is_fetching || is_fetching_story}
                    />
                </div>

                {is_user ? (
                    <div className="StoryItemCenter_bottom left-0">
                        <StoryViewerTitle
                            count_viewer={count_viewer}
                            count_friend_viewer={count_friend_viewer}
                            count_other_viewer={
                                count_viewer - count_friend_viewer
                            }
                            handleToggleFriendView={handleToggleFriendView}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default StoryItemCenter;
