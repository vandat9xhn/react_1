import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { initial_story_obj } from '../../../../../_initial/story/InitialStory';
//
import { handle_API_FeedStory_L } from '../../../../../_handle_api/feed/HandleAPIStory';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import IconUpdate from '../../../../../_icons_svg/icon_update/IconUpdate';
//
import { openScreenStoryItemMobile } from '../../../../../component/_screen/type/story/mobile/item/ScreenStoryItemMobile';
import { openScreenStoryPc } from '../../../../../component/_screen/type/story/pc/_main/ScreenStoryPc';
import { openScreenStoryMenuMobile } from '../../../../../component/_screen/type/story/mobile/menu/ScreenStoryMenuMobile';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import StoryFace from '../../../../../component/story_fb/face/item/_main/StoryFace';
import StoryFaceCreate from '../../../../../component/story_fb/face/create/_main/StoryFaceCreate';
import NewFeedStorySeeAllMobile from '../see_all/mobile/NewFeedStorySeeAllMobile';
import NewFeedStorySeeAllPc from '../see_all/pc/NewFeedStorySeeAllPc';
//
import './NewFeedStory.scss';
import { changeDataStory } from '../../../../../_some_function/story/changeDataStory';

//
NewFeedStory.propTypes = {};

//
function NewFeedStory(props) {
    //
    const { user, openScreenFloor } = useContext(context_api);

    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [] || [initial_story_obj()],
        handle_API_L: handle_API_FeedStory_L,
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleScroll(e) {
        if (count <= data_arr.length) {
            return;
        }

        if (
            e.target.scrollLeft ==
            e.target.scrollWidth - e.target.clientWidth
        ) {
            handleShowMore();
        }
    }

    /* ------------ */

    //
    function getStoryYoursFollowed(ix = 0) {
        const user_story_ix = data_arr.findIndex(
            (item) => item.user.id == user.id
        );
        const has_user_story = user_story_ix >= 0;
        const is_user_story = user_story_ix == ix;

        const story_type = is_user_story ? 'yours' : 'followed';

        const story_arr_yours = has_user_story ? [data_arr[user_story_ix]] : [];
        const story_arr_followed = has_user_story
            ? [
                  ...data_arr.slice(0, user_story_ix),
                  ...data_arr.slice(user_story_ix + 1),
              ]
            : data_arr;

        const count_story_yours = story_arr_yours.length;
        const count_story_followed = count - count_story_yours;

        const active_ix = is_user_story
            ? 0
            : !has_user_story
            ? ix
            : user_story_ix > ix
            ? ix
            : ix - 1;

        return {
            story_arr_followed,
            story_arr_yours,
            count_story_followed,
            count_story_yours,

            active_ix,
            story_type,
        };
    }

    //
    function openScreenStory(ix = 0) {
        if (IS_MOBILE) {
            openScreenStoryItemMobile({
                openScreenFloor: openScreenFloor,
                story_arr: data_arr,
                active_ix: ix,
                count: count,
                story_type: 'yours_followed',
            });

            history.pushState('', '', `/stories?i=${data_arr[ix].user.id}`);

            return;
        }

        const story_pc_data = getStoryYoursFollowed(ix);

        openScreenStoryPc({
            openScreenFloor: openScreenFloor,
            ...story_pc_data,
            has_close: true,
        });

        history.pushState(
            '',
            '',
            `/stories?i=${data_arr[story_pc_data.active_ix].user.id}`
        );
    }

    //
    function handleSeeAllPc() {
        const story_pc_data = getStoryYoursFollowed(0);

        openScreenStoryPc({
            openScreenFloor: openScreenFloor,
            ...story_pc_data,
            has_close: true,
        });

        history.pushState('', '', '/stories');
    }

    //
    function handleSeeMenuMobile() {
        const {
            story_arr_followed,
            story_arr_yours,
            count_story_followed,
            count_story_yours,
        } = getStoryYoursFollowed(0);

        openScreenStoryMenuMobile({
            openScreenFloor: openScreenFloor,

            story_arr_yours: story_arr_yours,
            story_arr_followed: story_arr_followed,
            count_story_followed: count_story_followed,
            count_story_yours: count_story_yours,
        });

        history.pushState('', '', '/stories');
    }

    //
    return (
        <VirtualScroll>
            <div className="NewFeedStory position-rel padding-8px brs-8px-md">
                <div
                    className="NewFeedStory_contain"
                    onScroll={IS_MOBILE ? handleScroll : undefined}
                >
                    <div className="NewFeedStory_row display-flex flex-nowrap">
                        <div className="NewFeedStory_item cursor-pointer">
                            <Link to={`/story/create`} className="normal-text">
                                <StoryFaceCreate />
                            </Link>
                        </div>

                        {data_arr.slice(0, 4).map((item, ix) => (
                            <div
                                key={item.user.id}
                                className="NewFeedStory_item cursor-pointer"
                                onClick={() => openScreenStory(ix)}
                            >
                                <StoryFace
                                    count_new={item.count_new}
                                    user={item.user}
                                    vid_pic={item.list[0].vid_pic}
                                    text={item.list[0].text}
                                    top_text={item.list[0].top_text}
                                    left_text={item.list[0].left_text}
                                    color_text_ix={item.list[0].color_text_ix}
                                    scale_text={item.list[0].scale_text}
                                />
                            </div>
                        ))}

                        <div
                            className={`NewFeedStory_fetching ${
                                is_fetching ? '' : 'display-none'
                            }`}
                        >
                            <div className="display-flex-center h-100per">
                                <div
                                    className={`NewFeedStory_fetching-contain padding-8px ${
                                        is_fetching
                                            ? 'NewFeedStory_fetching-active'
                                            : ''
                                    }`}
                                >
                                    <IconUpdate stroke="var(--blue)" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {IS_MOBILE ? (
                    (count <= data_arr.length || data_arr.length > 6) &&
                    has_fetched ? (
                        <div
                            className="NewFeedStory_all-mobile cursor-pointer"
                            onClick={handleSeeMenuMobile}
                        >
                            <NewFeedStorySeeAllMobile />
                        </div>
                    ) : null
                ) : (
                    <div
                        className={`NewFeedStory_all-pc cursor-pointer ${
                            data_arr.length < 4 ? 'display-none' : ''
                        }`}
                        onClick={handleSeeAllPc}
                    >
                        <NewFeedStorySeeAllPc />
                    </div>
                )}
            </div>
        </VirtualScroll>
    );
}

export default NewFeedStory;
