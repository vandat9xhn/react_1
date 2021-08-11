import React, { useContext, useEffect } from 'react';
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
import { openScreenStoryItemMobile } from '../../../../../component/_screen/type/story/mobile/item/ScreenStoryItemMobile';
import { openScreenStoryMenuMobile } from '../../../../../component/_screen/type/story/mobile/menu/ScreenStoryMenuMobile';
import { openScreenCreateStoryPc } from '../../../../../component/_screen/type/story/pc/create/ScreenStoryCreate';
import { openStoryHomePc } from '../../../../../component/_screen/type/story/pc/home/ScreenStoryHomePc';
//
import VirtualScroll from '../../../../../component/virtual_scroll/VirtualScroll';
//
import StoryFaceCreate from '../../../../../component/story_fb/_components/face/create/_main/StoryFaceCreate';
import NewFeedStorySeeAll from '../see_all/_main/NewFeedStorySeeAll';
import NewFeedStoryList from '../list/NewFeedStoryList';
import NewFeedStoryFetching from '../fetching/NewFeedStoryFetching';
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

            return;
        }

        openStoryHomePc({
            openScreenFloor: openScreenFloor,
            ...getStoryYoursFollowed(),
            ...getActiveIxStoryType(ix),
            has_close: true,
        });

        history.pushState('', '', `/stories?i=${feed_story_arr[ix].user.id}`);
    }

    //
    function handleSeeAllPc() {
        openStoryHomePc({
            openScreenFloor: openScreenFloor,
            ...getStoryYoursFollowed(),
            story_type: 'followed',
            active_ix: 0,
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
    function openScreenCreateStory() {
        openScreenCreateStoryPc({
            openScreenFloor: openScreenFloor,
            show_fav: true,
            hidden_before: true,
        });

        history.pushState('', '', `/story/create`);
    }

    //
    return (
        <VirtualScroll>
            <div className="NewFeedStory position-rel padding-8px brs-8px-md">
                <div
                    className="NewFeedStory_contain"
                    onScroll={IS_MOBILE ? handleScroll : undefined}
                >
                    <div className="display-flex align-items-center">
                        <div
                            className="NewFeedStory_item cursor-pointer"
                            onClick={openScreenCreateStory}
                        >
                            <StoryFaceCreate />
                        </div>

                        <NewFeedStoryList
                            feed_story_arr={feed_story_arr}
                            openScreenStory={openScreenStory}
                        />

                        <NewFeedStoryFetching is_fetching={is_fetching} />
                    </div>
                </div>

                <NewFeedStorySeeAll
                    count={count}
                    data_length={data_arr.length}
                    has_fetched={has_fetched}
                    handleSeeMenuMobile={handleSeeMenuMobile}
                    handleSeeAllPc={handleSeeAllPc}
                />
            </div>
        </VirtualScroll>
    );
}

export default NewFeedStory;
