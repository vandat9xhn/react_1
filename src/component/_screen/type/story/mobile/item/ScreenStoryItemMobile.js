import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_FeedStory_R } from '../../../../../../_handle_api/feed/HandleAPIStory';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import StoryItem from '../../../../../story_fb/item/_main/StoryItem';
//
import './ScreenStoryItemMobile.scss';
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
import CircleLoading from '../../../../../waiting/circle_loading/CircleLoading';

//
export function openScreenStoryItemMobile({
    openScreenFloor,
    story_arr,
    active_ix,
    story_type,
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryItemMobile,
        story_arr: story_arr,
        old_active_ix: active_ix,
        story_type: story_type,
    });
}

//
ScreenStoryItemMobile.propTypes = {};

//
function ScreenStoryItemMobile({
    story_arr,
    old_active_ix,
    story_type,
    closeScreen,
}) {
    //
    const [state_obj, setStateObj] = useState({
        active_ix: old_active_ix,
        is_fetching: false,
    });

    const { active_ix, is_fetching } = state_obj;
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
    } = list[active_item_ix];

    const is_has_next =
        active_step < count - 1 || active_ix < story_arr.length - 1;
    const is_has_prev = active_step > 0 || active_ix > 0;

    //
    const forceUpdate = useForceUpdate();

    useMakeBodyHidden();

    /* ----------- */

    //
    async function getData_StoryItem(is_next = true) {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const data = await handle_API_FeedStory_R({
            is_next: is_next,
            id: id,
            story_type: story_type,
        });
        
        if (is_next) {
            list.push(data);
            story_obj.active_item_ix += 1;
            story_obj.active_step += 1;
        } else {
            list.unshift(data);
            story_obj.active_step -= 1;
        }

        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: false,
        }));
    }

    /* ----------- */

    //
    function handleNextStoryUser() {
        setStateObj({
            ...state_obj,
            active_ix: active_ix + 1,
        });
    }

    //
    function handlePrevStoryUser() {
        setStateObj({
            ...state_obj,
            active_ix: active_ix - 1,
        });
    }

    //
    function handleNextStoryItem() {
        if (active_item_ix < list.length - 1) {
            story_obj.active_item_ix += 1;
            story_obj.active_step += 1;
            forceUpdate();

            return;
        }

        getData_StoryItem(true);
    }

    //
    function handlePrevStoryItem() {
        if (active_item_ix > 0) {
            story_obj.active_item_ix -= 1;
            story_obj.active_step -= 1;
            forceUpdate();

            return;
        }

        getData_StoryItem(false);
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

    //
    return (
        <div className="wh-100v bg-loader display-flex-center">
            <div
                className={`ScreenStoryItemMobile_item ${
                    is_fetching ? 'pointer-events-none opacity-05' : ''
                }`}
            >
                <StoryItem
                    handleCloseStoryItem={closeScreen}
                    active_step={active_step}
                    //
                    is_has_next={is_has_next}
                    is_has_prev={is_has_prev}
                    handleNext={handleNext}
                    handlePrev={handlePrev}
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
                <CircleLoading is_fetching={is_fetching} />
            </div>
        </div>
    );
}

export default ScreenStoryItemMobile;
