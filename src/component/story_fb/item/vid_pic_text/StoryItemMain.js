import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { type_video_or_img } from '../../../../_some_function/VideoOrImage';
//
import StoryText from '../../_components/text/StoryText';
import StoryItemVideo from './StoryItemVideo';
//
import './StoryItemMain.scss';
import { useForceUpdate } from '../../../../_hooks/UseForceUpdate';

//
StoryItemMain.propTypes = {};

//
function StoryItemMain({
    is_story_text,

    vid_pic,
    top_pic,
    left_pic,
    scale_pic,
    rotate_pic,

    text,
    font_family,
    top_text,
    left_text,
    color_text,
    scale_text,
}) {
    //
    const is_img = type_video_or_img(vid_pic) == 'img';

    //
    const [state_obj, setStateObj] = useState({
        is_show_more: false,
    });

    const { is_show_more } = state_obj;

    //
    const ref_text_elm = useRef(null);
    const has_more_text = useRef(false);

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        if (is_story_text) {
            const new_has_more_text =
                ref_text_elm.current.scrollHeight <
                ref_text_elm.current
                    .getElementsByClassName('StoryText_item')[0]
                    .getBoundingClientRect().height;

            if (has_more_text.current != new_has_more_text) {
                has_more_text.current = new_has_more_text
                forceUpdate();
            }
        }
    }, [text]);

    //
    function handleToggleText() {
        ref_text_elm.current.getElementsByClassName(
            'StoryText_contain'
        )[0].scrollTop = 0;

        setStateObj((state_obj) => ({
            ...state_obj,
            is_show_more: !is_show_more,
        }));
    }

    //
    return (
        <div className="wh-100 position-rel">
            <div
                className="pos-abs-center wh-100"
                style={{
                    top: `${top_pic}px`,
                    left: `${left_pic}`,
                    transform: `rotate(${rotate_pic}deg) scale(${scale_pic})`,
                }}
            >
                {is_img ? (
                    <img
                        src={vid_pic}
                        alt=""
                        className="wh-100 object-fit-cover"
                    />
                ) : (
                    <StoryItemVideo vid_pic={vid_pic} />
                )}
            </div>

            <div
                className={`StoryItemMain_text ${
                    is_story_text ? 'pos-abs-center' : 'position-abs'
                }`}
                style={
                    is_story_text
                        ? {}
                        : {
                              top: top_text,
                              left: left_text,
                              transform: `scale(${scale_text})`,
                          }
                }
            >
                <div ref={ref_text_elm}>
                    <StoryText
                        is_story_text={is_story_text}
                        is_show_more={is_show_more && has_more_text.current}
                        text={text}
                        color_text={is_story_text ? 'text-white' : color_text}
                        font_family={font_family}
                    />
                </div>

                {has_more_text.current && is_story_text ? (
                    <div className="cursor-pointer" onClick={handleToggleText}>
                        <span className="text-white font-20px font-700">
                            {is_show_more ? 'See less' : 'See more'}
                        </span>
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default StoryItemMain;
