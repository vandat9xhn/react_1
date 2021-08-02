import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { initial_story_menu_obj } from '../../../../../_initial/story/InitialStory';
//
import { handle_API_FeedStory_L } from '../../../../../_handle_api/feed/HandleAPIStory';
//
import { openScreenStoryItemMobile } from '../../../../_screen/type/story/mobile/item/ScreenStoryItemMobile';
//
import StoryFace from '../../../face/item/_main/StoryFace';
//
import './StoryMenuMobile.scss';

//
StoryMenuMobile.propTypes = {};

//
function StoryMenuMobile({ story_type, heading }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        story_arr: [] || [initial_story_menu_obj()],
        has_fetched: false,
    });

    const { story_arr, has_fetched } = state_obj;

    //
    useEffect(() => {
        getData_Story(story_type);
    }, []);

    //
    async function getData_Story() {
        const { data } = await handle_API_FeedStory_L(0, story_type);
        data.map((item) => {
            item.active_step =
                item.count_new == 0 ? 0 : item.count - item.count_new;
            item.active_item_ix = 0;

            return item;
        });

        setStateObj((state_obj) => ({
            ...state_obj,
            story_arr: data,
            has_fetched: true,
        }));
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
    return (
        <div>
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
