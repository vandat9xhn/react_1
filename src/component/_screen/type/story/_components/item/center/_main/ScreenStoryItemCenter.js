import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import CircleLoading from '../../../../../../../waiting/circle_loading/CircleLoading';
//
import StoryItem from '../../../../../../../story_fb/item/_main/StoryItem';
import StoryViewerList from '../../../../../../../story_fb/viewer/list/_main/StoryViewerList';
import StoryViewerTitle from '../../../../../../../story_fb/viewer/title/StoryViewerTitle';
//
import './ScreenStoryItemCenter.scss';

//
ScreenStoryItemCenter.propTypes = {};

//
function ScreenStoryItemCenter({
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
        vid_pic,
        story_link,
        created_time,

        text,
        top_text,
        left_text,
        color_text_ix,
        scale_text,

        viewer_arr,
        count_viewer,
        count_friend_viewer,
    } = list[active_item_ix];

    //
    return (
        <div
            key={`${id}`}
            className="ScreenStoryItemCenter wh-100 position-rel"
        >
            <div className="ScreenStoryItemCenter_item h-100per position-rel">
                <StoryItem
                    handleCloseStoryItem={handleCloseStoryItem}
                    active_step={active_step}
                    //
                    user={user}
                    count={count}
                    vid_pic={vid_pic}
                    created_time={created_time}
                    //
                    text={`${text}`}
                    top_text={top_text}
                    left_text={left_text}
                    color_text_ix={color_text_ix}
                    scale_text={scale_text}
                />

                <div
                    className={`ScreenStoryItemCenter_viewer_list pos-abs-100 ${
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
            </div>

            <div className="pos-abs-center">
                <CircleLoading is_fetching={is_fetching || is_fetching_story} />
            </div>

            <div className="ScreenStoryItemCenter_bottom left-0">
                <StoryViewerTitle
                    count_viewer={count_viewer}
                    count_friend_viewer={count_friend_viewer}
                    count_other_viewer={count_viewer - count_friend_viewer}
                    handleToggleFriendView={handleToggleFriendView}
                />
            </div>

            {story_link ? (
                <div className="ScreenStoryItemCenter_bottom right-0">
                    <Link
                        to={story_link}
                        className="ScreenStoryItemCenter_link label-field text-white"
                    >
                        <div className="padding-4px">
                            <span>See more</span>
                        </div>
                    </Link>
                </div>
            ) : null}
        </div>
    );
}

export default ScreenStoryItemCenter;
