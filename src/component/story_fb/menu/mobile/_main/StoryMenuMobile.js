import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { handle_API_FeedStory_L } from '../../../../../_handle_api/feed/HandleAPIStory';
//
import { openScreenStoryItemMobile } from '../../../../_screen/type/story/mobile/item/ScreenStoryItemMobile';
//
import StoryFace from '../../../face/item/_main/StoryFace';
//
import './StoryMenuMobile.scss';

//
StoryMenuMobile.propTypes = {
    story_arr: PropTypes.array,
    count_story: PropTypes.number,
    story_type: PropTypes.string,
    heading: PropTypes.string,
};

StoryMenuMobile.defaultProps = {
    story_arr: [],
    count_story: 0,
};

//
function StoryMenuMobile({
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
    async function getData_Story() {
        const { data } = await handle_API_FeedStory_L(0, story_type);

        data.map((item) => {
            item.active_step =
                item.count_new == 0 ? 0 : item.count - item.count_new;
            item.active_item_ix = 0;
            item.has_fetched = false;

            return item;
        });

        setStateObj((state_obj) => ({
            ...state_obj,
            story_arr: [...state_obj.story_arr, ...data],
            has_fetched: true,
        }));
    }

    //
    useEffect(() => {
        !has_fetched && getData_Story(story_type);
    }, []);

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
        <div className="screen-story-menu-mobile">
            <h2 className="margin-0 font-20px padding-8px">{heading}</h2>

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <ul className="list-none display-flex flex-wrap">
                    {story_arr.map((item, ix) => (
                        <li
                            key={`${item.user.id}`}
                            className="cursor-pointer hv-bg-ccc story-face"
                            onClick={() => handleChangeStory(ix)}
                        >
                            <div className="StoryMenuMobile_item">
                                <StoryFace
                                    user={item.user}
                                    count_new={item.count_new}
                                    vid_pic={item.list[0].vid_pic}
                                    text={item.list[0].text}
                                    top_text={item.list[0].top_text}
                                    left_text={item.list[0].left_text}
                                    color_text_ix={item.list[0].color_text_ix}
                                    scale_text={item.list[0].scale_text}
                                />
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div
                className={`${
                    has_fetched ? 'display-none' : 'StoryMenuMobile_skeleton'
                }`}
            ></div>
        </div>
    );
}

export default StoryMenuMobile;
