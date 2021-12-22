import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_story_menu_obj } from '../../../../../_initial/story/InitialStory';
//
import { handle_API_FeedStory_L } from '../../../../../_handle_api/feed/HandleAPIStory';
//
import { useObserverGetData } from '../../../../../_hooks/useObserverGetData';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import CircleLoading from '../../../../waiting/circle_loading/CircleLoading';
import StoryMenuPc from '../menu/StoryMenuPc';
import StoryItemPc from '../item/StoryItemPc';
//
import './StoryHomePc.scss';

//
StoryHomePc.propTypes = {
    story_arr_followed: PropTypes.array,
    count_story_followed: PropTypes.number,
    has_fetched_followed: PropTypes.bool,

    story_arr_yours: PropTypes.array,
    count_story_yours: PropTypes.number,
    has_fetched_yours: PropTypes.bool,

    old_active_ix: PropTypes.number,
    old_story_type: PropTypes.string,
    has_close: PropTypes.bool,
    closeScreen: PropTypes.func,
};

StoryHomePc.defaultProps = {
    story_arr_followed: [],
    count_story_followed: 0,
    has_fetched_followed: false,

    story_arr_yours: [],
    count_story_yours: 0,
    has_fetched_yours: false,

    old_active_ix: 0,
    old_story_type: 'followed',
    has_close: false,
};

//
function StoryHomePc({
    story_arr_followed,
    count_story_followed,
    has_fetched_followed,

    story_arr_yours,
    count_story_yours,
    has_fetched_yours,

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
            has_fetched: has_fetched_followed,
        },
        yours: {
            story_arr: story_arr_yours || [initial_story_menu_obj()],
            count_story: count_story_yours,
            has_fetched: has_fetched_yours,
        },
    });

    const { active_ix, story_type, is_show_menu, followed, yours } = state_obj;
    const { story_arr, count_story, has_fetched } = state_obj[story_type];

    //
    const ref_is_fetching = useRef({ followed: false, yours: false });
    const ref_c_count = useRef({ followed: 0, yours: 0 });
    const ref_is_max = useRef({
        followed: false,
        yours: false,
    });

    const ref_menu = useRef(null);
    const ref_fake_elm_followed = useRef(null);

    //
    const { observerShowMore } = useObserverGetData({
        getData_API: () => getData_Story({}),
        getIsMax: () => ref_is_max.current.followed,
        getIsFetching: () => ref_is_fetching.current.followed,
    });

    //
    useEffect(() => {
        !has_fetched_yours && getData_Story({ new_story_type: 'yours' });

        observerShowMore({
            fake_elm_end: ref_fake_elm_followed.current,
            root: ref_menu.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0,
        });
    }, []);

    //
    useEffect(() => {
        if (ref_c_count.current['followed'] <= 10) {
            getData_Story({ new_story_type: 'followed' });
        }
    }, [ref_c_count.current['followed']]);

    /* ----------- */

    //
    async function getData_Story({
        new_story_type = story_type,
        new_active_ix = active_ix,
    }) {
        if (ref_is_fetching.current[new_story_type]) {
            return;
        }

        ref_is_fetching.current[new_story_type] = true;

        // setStateObj((state_obj) => {
        //     return {
        //         ...state_obj,
        //         active_ix: new_active_ix,
        //     };
        // });

        const { data, count } = await handle_API_FeedStory_L(
            ref_c_count.current[new_story_type],
            new_story_type
        );

        ref_is_fetching.current[new_story_type] = false;

        setStateObj((state_obj) => {
            const { story_arr, count_story, has_fetched } =
                state_obj[new_story_type];

            const new_count_story = has_fetched ? count_story : count;
            const new_story_arr = [...story_arr, ...data].slice(
                0,
                new_count_story
            );

            ref_c_count.current[new_story_type] = new_story_arr.length;
            ref_is_max.current[new_story_type] =
                new_count_story <= story_arr.length;

            return {
                ...state_obj,
                active_ix: new_active_ix,
                [new_story_type]: {
                    story_arr: new_story_arr,
                    count_story: new_count_story,
                    has_fetched: true,
                },
            };
        });
    }

    // ----- NEXT PREV

    //
    function handleNextStoryUser() {
        const new_active_ix = active_ix + 1;

        if (new_active_ix >= story_arr.length) {
            getData_Story({
                new_active_ix: new_active_ix,
            });
        } else {
            setStateObj({
                ...state_obj,
                active_ix: new_active_ix,
            });
        }
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

    //
    return (
        <div
            className={`StoryHomePc ${
                has_close ? 'wh-100v' : 'StoryHomePc-has_head'
            }`}
        >
            <div className="display-flex h-100per">
                <div
                    className={`StoryHomePc_left pos-rel ${
                        is_show_menu
                            ? 'StoryHomePc_left-show'
                            : 'StoryHomePc_left-hide'
                    }`}
                >
                    <StoryMenuPc
                        story_type={story_type}
                        active_ix={active_ix}
                        is_show_menu={is_show_menu}
                        has_close={has_close}
                        //
                        story_followed_obj={followed}
                        story_your_obj={yours}
                        //
                        ref_menu={ref_menu}
                        ref_fake_elm_followed={ref_fake_elm_followed}
                        //
                        handleChangeUserStory={handleChangeUserStory}
                        handleChangeYourStory={handleChangeYourStory}
                        handleClose={handleClose}
                        handleToggleMenu={handleToggleMenu}
                    />
                </div>

                <div className="flex-grow-1 pos-rel">
                    {has_fetched && story_arr.length > 0 ? (
                        <StoryItemPc
                            count_story={count_story}
                            story_arr={story_arr}
                            active_ix={active_ix}
                            story_type={story_type}
                            handleNextStoryUser={handleNextStoryUser}
                            handlePrevStoryUser={handlePrevStoryUser}
                        />
                    ) : null}
                </div>
            </div>

            <div className="StoryHomePc_close display-none">
                <div className="cursor-pointer" onClick={handleClose}>
                    <IconsArrow y={400} />
                </div>
            </div>
        </div>
    );
}

export default StoryHomePc;
