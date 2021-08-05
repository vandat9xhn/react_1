import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import {
    handle_API_FeedStoryItemViewer_L,
    handle_API_StoryItem_R,
} from '../../../../../../../_handle_api/feed/HandleAPIStory';
//
import { useForceUpdate } from '../../../../../../../_hooks/UseForceUpdate';
//
import ScreenStoryNextPrev from '../next_prev/ScreenStoryNextPrev';
import ScreenStoryItemCenter from '../center/_main/ScreenStoryItemCenter';
//
import './ScreenStoryItem.scss';
import ScreenStoryFoot from '../foot/_main/ScreenStoryFoot';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';

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
    const { list, count, active_step, active_item_ix } = story_obj;
    const { id, viewer_arr } = list[active_item_ix];

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

        const data = await handle_API_StoryItem_R({
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

    /* ---------- */

    function handleShare() {
        console.log(id);
    }

    function handleSend(text) {
        console.log(text);
    }

    function chooseListTypeLike(type_like) {
        console.log(type_like);
    }

    /* ---------- */
    function handleCloseStoryItem() {
        IS_MOBILE ? closeScreen() : history.back();
    }

    //
    return (
        <div
            key={id}
            className={`ScreenStoryItem wh-100 user-select-none ${
                is_fetching ? 'pointer-events-none opacity-05' : ''
            }`}
        >
            <div className="ScreenStoryItem_head position-rel flex-grow-1">
                <div className="display-flex h-100per">
                    <div className="flex-grow-1">
                        <ScreenStoryNextPrev
                            is_next={false}
                            disabled={!is_has_prev}
                            handleClick={handlePrev}
                        />
                    </div>

                    <div className="ScreenStoryItem_head_center">
                        <ScreenStoryItemCenter
                            story_obj={story_obj}
                            //
                            is_fetching={is_fetching}
                            is_fetching_story={is_fetching_story}
                            is_fetching_viewer={is_fetching_viewer}
                            is_show_viewer={is_show_viewer}
                            //
                            handleCloseStoryItem={handleCloseStoryItem}
                            handleShowMoreViewer={handleShowMoreViewer}
                            handleCloseFriendViewer={handleCloseFriendViewer}
                            handleToggleFriendView={handleToggleFriendView}
                        />
                    </div>

                    <div className="flex-grow-1">
                        <ScreenStoryNextPrev
                            is_next={true}
                            disabled={!is_has_next}
                            handleClick={handleNext}
                        />
                    </div>
                </div>
            </div>

            <div className="ScreenStoryItem_foot position-rel">
                <div className="ScreenStoryItem_foot_contain">
                    <ScreenStoryFoot
                        can_rep={true}
                        can_like={true}
                        can_share={true}
                        handleShare={handleShare}
                        chooseListTypeLike={chooseListTypeLike}
                        handleSend={handleSend}
                    />
                </div>
            </div>
        </div>
    );
}

export default ScreenStoryItem;
