import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    handle_API_FeedStoryItemViewer_L,
    handle_API_FeedStory_R,
} from '../../../../../../_handle_api/feed/HandleAPIStory';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';
import NextPrevDiv from '../../../../../some_div/next_prev_div/NextPrevDiv';
//
import StoryItem from '../../../../../story_fb/item/_main/StoryItem';
import StoryViewerList from '../../../../../story_fb/viewer/list/_main/StoryViewerList';
import StoryViewerTitle from '../../../../../story_fb/viewer/title/StoryViewerTitle';
//
import './ScreenStoryItem.scss';

//
ScreenStoryItem.propTypes = {};

//
function ScreenStoryItem({
    story_arr,
    count_story,
    active_ix,
    story_type,

    is_fetching_story,

    handleNextStoryUser,
    handlePrevStoryUser,

    closeScreen,
}) {
    //
    const story_obj = story_arr[active_ix];

    const { list, user, count, count_new, active_step, active_item_ix } =
        story_obj;

    const {
        id,
        vid_pic,
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

    const is_has_next =
        active_step < count - 1 ||
        active_ix < (count_story || story_arr.length) - 1;
    const is_has_prev = active_step > 0 || active_ix > 0;

    //
    const [state_obj, setStateObj] = useState({
        is_fetching: false,
        is_show_viewer: false,
        is_fetching_viewer: false,
    });

    const { is_fetching, is_show_viewer, is_fetching_viewer } = state_obj;

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        handleCloseFriendViewer();
    }, [id]);

    /* ------ GET API ----- */

    //
    async function getData_StoryItem(is_next = true) {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const data = await handle_API_FeedStory_R({
            is_next: is_next,
            story_id: id,
            story_type: story_type,
        });

        if (is_next) {
            story_obj.list = [...story_obj.list, data];
            story_obj.active_item_ix += 1;
            story_obj.active_step += 1;
        } else {
            story_obj.list = [data, ...story_obj.list];
            story_obj.active_step -= 1;
        }

        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: false,
        }));
    }

    async function getData_StoryViewer(start_obj_state = {}) {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching_viewer: true,
            ...start_obj_state,
        }));

        const { data } = await handle_API_FeedStoryItemViewer_L({
            story_id: id,
            c_count: viewer_arr.length,
        });

        console.log(data);
        viewer_arr.push(...data);

        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching_viewer: false,
        }));
    }

    /* ------ NEXT PREV ----- */

    //
    function handleNextStoryItem() {
        if (active_item_ix == list.length - 1) {
            getData_StoryItem(true);
        } else {
            story_obj.active_item_ix += 1;
            story_obj.active_step += 1;

            forceUpdate();
        }
    }

    //
    function handlePrevStoryItem() {
        if (active_item_ix == 0) {
            getData_StoryItem(false);
        } else {
            story_obj.active_step -= 1;
            story_obj.active_item_ix -= 1;

            forceUpdate();
        }
    }

    /* ----------- */

    //
    function handleNext() {
        if (!is_has_next) {
            return;
        }

        if (active_step == count - 1) {
            handleNextStoryUser();
        } else {
            handleNextStoryItem();
        }
    }

    //
    function handlePrev() {
        if (!is_has_prev) {
            return;
        }

        if (active_step == 0) {
            handlePrevStoryUser();
        } else {
            handlePrevStoryItem();
        }
    }

    /* --------- */

    //
    function handleToggleFriendView() {
        if (!is_show_viewer && viewer_arr.length == 0) {
            getData_StoryViewer({
                is_show_viewer: true,
            });
        } else {
            setStateObj((state_obj) => ({
                ...state_obj,
                is_show_viewer: !is_show_viewer,
            }));
        }
    }

    //
    function handleCloseFriendViewer() {
        is_show_viewer &&
            setStateObj((state_obj) => ({
                ...state_obj,
                is_show_viewer: false,
            }));
    }

    //
    function handleShowMoreViewer() {
        getData_StoryViewer();
    }

    // 
    function handleCloseStoryItem() {
        history.back()
    }

    //
    return (
        <div
            className={`ScreenStoryItem wh-100 user-select-none ${
                is_fetching ? 'pointer-events-none opacity-05' : ''
            }`}
        >
            <div className="ScreenStoryItem_item ScreenStoryItem_wh">
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
            </div>

            <div className="pos-abs-center">
                <CircleLoading is_fetching={is_fetching || is_fetching_story} />
            </div>

            <div>
                <NextPrevDiv
                    is_btn_circle={true}
                    is_has_next={is_has_next}
                    is_has_prev={is_has_prev}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
                />
            </div>

            <div
                className={`ScreenStoryItem_viewer_list ScreenStoryItem_wh pos-abs-center ${
                    is_show_viewer ? '' : 'display-none'
                }`}
            >
                <div className="ScreenStoryItem_viewer_list-contain h-100per margin-auto">
                    <StoryViewerList
                        viewer_arr={viewer_arr}
                        count_friend_viewer={count_friend_viewer}
                        is_fetching={is_fetching_viewer}
                        handleShowMore={handleShowMoreViewer}
                        handleCloseFriendViewer={handleCloseFriendViewer}
                    />
                </div>
            </div>

            <div className="ScreenStoryItem_bottom">
                <StoryViewerTitle
                    count_viewer={count_viewer}
                    count_friend_viewer={count_friend_viewer}
                    count_other_viewer={count_viewer - count_friend_viewer}
                    handleToggleFriendView={handleToggleFriendView}
                />
            </div>
        </div>
    );
}

export default ScreenStoryItem;
