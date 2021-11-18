import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import observeToDo from '../../../../../../_some_function/observerToDo';
import { openScreenStoryItemMobile } from '../../../../../_screen/type/story/mobile/item/ScreenStoryItemMobile';
//
import { handle_API_FeedStory_L } from '../../../../../../_handle_api/feed/HandleAPIStory';
//
import { useObserverGetData } from '../../../../../../_hooks/useObserverGetData';
//
import StoryFace from '../../../face/item/_main/StoryFace';
//
import './StoryMenuPartMobile.scss';

//
StoryMenuPartMobile.propTypes = {
    story_arr: PropTypes.array,
    count_story: PropTypes.number,
    story_type: PropTypes.string,
    heading: PropTypes.string,
};

StoryMenuPartMobile.defaultProps = {
    story_arr: [],
    count_story: 0,
};

//
function StoryMenuPartMobile({
    story_arr: old_story_arr,
    count_story: old_count_story,
    story_type,
    heading,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        story_arr: old_story_arr || [initial_story_menu_obj()],
        count_story: old_count_story,
        has_fetched: old_story_arr.length > 0,
    });

    const { story_arr, has_fetched } = state_obj;

    //
    const ref_main = useRef(null);
    const ref_fake_elm = useRef(null);
    const ref_is_fetching = useRef(false);
    const ref_is_max = useRef(false);

    //
    const { observerShowMore } = useObserverGetData({
        getData_API: getData_Story,
        getIsFetching: () => ref_is_fetching.current,
        getIsMax: () => ref_is_max.current,
    });

    //
    useEffect(() => {
        observeToDo({
            elm: ref_main.current,
            callback: () => {
                !has_fetched && getData_Story(story_type);
            },
        });

        if (!has_fetched || old_story_arr.length < old_count_story) {
            observerShowMore({
                fake_elm_end: ref_fake_elm.current,
                rootMargin: '0px 0px 0px 0px',
                way_scroll: 'to_bottom',
                margin: 0,
            });
        }
    }, []);

    // -----

    //
    async function getData_Story() {
        if (ref_is_fetching.current) {
            return;
        }

        ref_is_fetching.current = true;

        const { data, count } = await handle_API_FeedStory_L(0, story_type);

        data.map((item) => {
            item.active_step =
                item.count_new == 0 ? 0 : item.count - item.count_new;
            item.active_item_ix = 0;
            item.has_fetched = false;

            return item;
        });

        ref_is_fetching.current = false;

        setStateObj((state_obj) => {
            ref_is_max.current =
                count <= state_obj.story_arr.length + data.length;

            return {
                ...state_obj,
                story_arr: [...state_obj.story_arr, ...data].slice(0, count),
                has_fetched: true,
            };
        });
    }

    //
    function handleChangeStory(ix) {
        openScreenStoryItemMobile({
            openScreenFloor: openScreenFloor,
            story_arr: story_arr,
            active_ix: ix,
            story_type: story_type,
        });
    }

    //
    if (has_fetched && story_arr.length == 0) {
        return null;
    }

    //
    return (
        <div ref={ref_main} className="screen-story-menu-mobile">
            {story_arr.length ? (
                <h2 className="font-18px padding-8px">{heading}</h2>
            ) : null}

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <ul className="list-none display-flex flex-wrap">
                    {story_arr.map((item, ix) => (
                        <li
                            key={`${item.user.id}`}
                            className="cursor-pointer hv-bg-ccc story-face"
                            onClick={() => handleChangeStory(ix)}
                        >
                            <div className="StoryMenuPartMobile_item">
                                <StoryFace
                                    user={item.user}
                                    count_new={item.count_new}
                                    type_story={item.list[0].type_story}
                                    vid_pic_obj={item.list[0].vid_pic_obj}
                                    text_arr={item.list[0].text_arr}
                                />
                            </div>
                        </li>
                    ))}
                </ul>

                <div ref={ref_fake_elm} className="padding-1px"></div>
            </div>

            <div
                className={`${
                    has_fetched
                        ? 'display-none'
                        : 'StoryMenuPartMobile_skeleton'
                }`}
            ></div>
        </div>
    );
}

export default StoryMenuPartMobile;
