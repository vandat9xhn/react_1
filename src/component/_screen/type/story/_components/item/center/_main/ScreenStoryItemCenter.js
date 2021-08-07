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
import { IS_MOBILE } from '../../../../../../../../_constant/Constant';

//
ScreenStoryItemCenter.propTypes = {};

//
function ScreenStoryItemCenter({
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
        story_link,
        is_story_text,
        created_time,
        // 
        vid_pic,
        top_pic,
        left_pic,
        scale_pic,
        rotate_pic,

        text,
        font_family,
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
            <div
                className={`position-rel ${
                    IS_MOBILE ? 'wh-100' : 'ScreenStoryItemCenter_item'
                }`}
            >
                <StoryItem
                    handleCloseStoryItem={handleCloseStoryItem}
                    active_step={active_step}
                    //
                    user={user}
                    count={count}
                    // 
                    is_story_text={is_story_text}
                    created_time={created_time}
                    // 
                    vid_pic={vid_pic}
                    top_pic={top_pic}
                    left_pic={left_pic}
                    scale_pic={scale_pic}
                    rotate_pic={rotate_pic}
                    //
                    text={`${text}`}
                    font_family={font_family}
                    top_text={top_text}
                    left_text={left_text}
                    color_text_ix={color_text_ix}
                    scale_text={scale_text}
                />

                {is_user ? (
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
                ) : null}

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

                <div className="pos-abs-center">
                    <CircleLoading
                        is_fetching={is_fetching || is_fetching_story}
                    />
                </div>

                {is_user ? (
                    <div className="ScreenStoryItemCenter_bottom left-0">
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

export default ScreenStoryItemCenter;
