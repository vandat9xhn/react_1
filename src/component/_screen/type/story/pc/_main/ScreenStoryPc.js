import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_story_menu_obj } from '../../../../../../_initial/story/InitialStory';
//
import { handle_API_FeedStory_L } from '../../../../../../_handle_api/feed/HandleAPIStory';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import IconsArrow from '../../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import ScreenStoryMenuPc from '../menu/ScreenStoryMenuPc';
import ScreenStoryItemPc from '../item/ScreenStoryItemPc';
//
import './ScreenStoryPc.scss';

//
export function openScreenStoryPc({
    openScreenFloor,

    story_arr_followed,
    story_arr_yours,
    count_story_yours,
    count_story_followed,

    active_ix,
    story_type,
    has_close,
}) {
    openScreenFloor({
        FloorComponent: ScreenStoryPc,

        story_arr_followed: story_arr_followed,
        story_arr_yours: story_arr_yours,
        count_story_yours: count_story_yours,
        count_story_followed: count_story_followed,

        old_active_ix: active_ix,
        old_story_type: story_type,
        has_close: has_close,
    });
}

//
ScreenStoryPc.propTypes = {
    story_arr_followed: PropTypes.array,
    story_arr_yours: PropTypes.array,
    count_story_yours: PropTypes.number,
    count_story_followed: PropTypes.number,

    old_active_ix: PropTypes.number,
    old_story_type: PropTypes.string,
    has_close: PropTypes.bool,
    closeScreen: PropTypes.func,
};

ScreenStoryPc.defaultProps = {
    story_arr_followed: [],
    story_arr_yours: [],
    count_story_yours: 0,
    count_story_followed: 0,

    old_active_ix: 0,
    old_story_type: 'followed',
    has_close: false,
};

//
function ScreenStoryPc({
    story_arr_followed,
    story_arr_yours,
    count_story_yours,
    count_story_followed,

    old_active_ix,
    old_story_type,
    has_close,
    closeScreen,
}) {
    //
    const [state_obj, setStateObj] = useState({
        active_ix: old_active_ix,
        story_type: old_story_type,
        is_show_menu: true,

        followed: {
            story_arr: story_arr_followed || [initial_story_menu_obj()],
            count_story: count_story_followed,
            has_fetched: count_story_followed > 0,
        },
        yours: {
            story_arr: story_arr_yours || [initial_story_menu_obj()],
            count_story: count_story_yours,
            has_fetched: count_story_followed > 0,
        },
    });

    const { active_ix, story_type, is_show_menu, followed, yours } = state_obj;
    const { story_arr, count_story, has_fetched } = state_obj[story_type];

    //
    async function getData_Story(story_type) {
        const { data, count: new_count } = await handle_API_FeedStory_L(
            0,
            story_type
        );

        setStateObj((state_obj) => ({
            ...state_obj,
            [story_type]: {
                story_arr: [...state_obj[story_type].story_arr, ...data],
                count_story: new_count,
                has_fetched: true,
            },
        }));
    }

    //
    useMakeBodyHidden({
        blur_header: has_close,
        hidden_scroll: true,
        hidden_app: true,
        hidden_header: has_close,
    });

    //
    useEffect(() => {
        count_story_followed > story_arr_followed.length &&
            getData_Story('followed');
        count_story_yours == 0 && getData_Story('yours');
    }, []);

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

    /* ---------- */

    //
    function handleChangeStory(new_active_ix, new_story_type) {
        if (new_active_ix == active_ix && story_type == new_story_type) {
            return;
        }

        setStateObj({
            ...state_obj,
            active_ix: new_active_ix,
            story_type: new_story_type,
        });
    }

    //
    function handleChangeUserStory(new_active_ix) {
        handleChangeStory(new_active_ix, 'followed');
    }

    //
    function handleChangeYourStory(new_active_ix) {
        handleChangeStory(new_active_ix, 'yours');
    }

    /* ---------- */

    //
    function handleClose() {
        history.back();
    }

    //
    function handleToggleMenu() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_show_menu: !is_show_menu,
        }));
    }

    // console.log(story_arr);
    //
    return (
        <div
            className={`ScreenStoryPc wh-100v ${
                has_close ? '' : 'ScreenStoryPc-has_head'
            }`}
        >
            <div className="display-flex h-100per">
                <div
                    className={`ScreenStoryPc_left position-rel ${
                        is_show_menu
                            ? 'ScreenStoryPc_left-show'
                            : 'ScreenStoryPc_left-hide'
                    }`}
                >
                    <ScreenStoryMenuPc
                        story_type={story_type}
                        active_ix={active_ix}
                        is_show_menu={is_show_menu}
                        has_close={has_close}
                        //
                        story_followed_obj={followed}
                        story_your_obj={yours}
                        //
                        handleChangeUserStory={handleChangeUserStory}
                        handleChangeYourStory={handleChangeYourStory}
                        handleClose={handleClose}
                        handleToggleMenu={handleToggleMenu}
                    />
                </div>

                <div className="flex-grow-1 position-rel">
                    {has_fetched && story_arr.length > 0 ? (
                        <ScreenStoryItemPc
                            count_story={count_story}
                            story_arr={story_arr}
                            active_ix={active_ix}
                            story_type={story_type}
                            handleNextStoryUser={handleNextStoryUser}
                            handlePrevStoryUser={handlePrevStoryUser}
                            // closeScreen={closeScreen}
                        />
                    ) : (
                        <div className="wh-100 bg-loader"></div>
                    )}
                </div>
            </div>

            <div className="ScreenStoryPc_close display-none">
                <div className="cursor-pointer" onClick={handleClose}>
                    <IconsArrow y={400} />
                </div>
            </div>
        </div>
    );
}

export default ScreenStoryPc;
