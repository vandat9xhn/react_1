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

//
NewFeedStory.propTypes = {};

//
function NewFeedStory(props) {
    //
    const { user, openScreenFloor } = useContext(context_api);

    //
    const { data_state, setDataState, getData_API } = useDataShowMore({
        initial_arr: [] || [initial_story_obj()],
        handle_API_L: (c_count) => handle_API_FeedStory_L(c_count, 'followed'),
        other_state: {
            story_arr_yours: [],
        },
    });

    const { data_arr, story_arr_yours, count, is_fetching, has_fetched } =
        data_state;

    const feed_story_arr = [...story_arr_yours, ...data_arr];

    //
    useEffect(() => {
        getData_StoryYours();
        getData_API();
    }, []);

    //
    async function getData_StoryYours() {
        const { data } = await handle_API_FeedStory_L(0, 'yours');

        setDataState((data_state) => ({
            ...data_state,
            story_arr_yours: data,
        }));
    }

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
    function getActiveIxStoryType(ix = 0) {
        const story_type =
            story_arr_yours.length && ix == 0 ? 'yours' : 'followed';
        const active_ix = ix == 0 ? 0 : story_arr_yours.length ? ix - 1 : ix;

        return {
            active_ix,
            story_type,
        };
    }

    //
    function getStoryYoursFollowed() {
        return {
            story_arr_followed: data_arr,
            count_story_followed: count,
            has_fetched_followed: true,
            
            story_arr_yours: story_arr_yours,
            count_story_yours: story_arr_yours.length,
            has_fetched_yours: true,
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

            // history.pushState('', '', `/stories?i=${data_arr[ix].user.id}`);

            return;
        }

        openScreenStoryPc({
            openScreenFloor: openScreenFloor,
            ...getStoryYoursFollowed(),
            ...getActiveIxStoryType(ix),
            has_close: true,
        });

        history.pushState('', '', `/stories?i=${feed_story_arr[ix].user.id}`);
    }

    //
    function handleSeeAllPc() {
        openScreenStoryPc({
            openScreenFloor: openScreenFloor,
            ...getStoryYoursFollowed(),
            has_close: true,
        });

        history.pushState('', '', '/stories');
    }

    //
    function handleSeeMenuMobile() {
        openScreenStoryMenuMobile({
            openScreenFloor: openScreenFloor,
            ...getStoryYoursFollowed(),
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

                        {feed_story_arr
                            .slice(0, IS_MOBILE ? undefined : 4)
                            .map((item, ix) => (
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
                                        color_text_ix={
                                            item.list[0].color_text_ix
                                        }
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
