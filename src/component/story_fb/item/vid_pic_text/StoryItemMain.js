import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { type_video_or_img } from '../../../../_some_function/VideoOrImage';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';
// 
import StoryText from '../../_components/text/StoryText';

//
StoryItemMain.propTypes = {};

//
function StoryItemMain({
    vid_pic,

    text,
    top_text,
    left_text,
    color_text_ix,
    scale_text,
}) {
    //
    const is_img = type_video_or_img(vid_pic) == 'img';

    //
    const [state_obj, setStateObj] = useState({
        show_control: !is_img,
    });

    const { show_control } = state_obj;

    //
    const ref_video_elm = useRef(null);
    const ref_timeout_control = useRef(null);

    //
    function handleToggleControl() {
        if (is_img) {
            return;
        }

        setStateObj({
            ...state_obj,
            show_control: !show_control,
        });

        if (!show_control) {
            ref_timeout_control.current = setTimeout(() => {
                setStateObj({
                    ...state_obj,
                    show_control: false,
                });
            }, 1000);
        } else {
            clearTimeout(ref_timeout_control.current);
        }
    }

    //
    function handleTogglePlayVideo() {
        if (is_img) {
            return;
        }

        ref_video_elm.current.played
            ? ref_video_elm.current.pause()
            : ref_video_elm.current.play();

        setStateObj({
            ...state_obj,
            show_control: false,
        });

        clearTimeout(ref_timeout_control.current);
    }

    //
    return (
        <React.Fragment>
            <div className="wh-100" onClick={handleToggleControl}>
                {is_img ? (
                    <img
                        src={vid_pic}
                        alt=""
                        className="wh-100 object-fit-cover"
                    />
                ) : (
                    <React.Fragment>
                        <video
                            src={vid_pic}
                            alt=""
                            ref={ref_video_elm}
                            className="wh-100 object-fit-contain"
                        />

                        <div
                            className={`StoryItem_control pos-abs-center ${
                                show_control ? '' : 'display-none'
                            }`}
                        >
                            <div
                                className="StoryItem_control-contain"
                                onClick={handleTogglePlayVideo}
                            >
                                <IconsInput x={200} />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>

            <StoryText
                text={text}
                top_text={top_text}
                left_text={left_text}
                color_text_ix={color_text_ix}
                scale_text={scale_text}
            />
        </React.Fragment>
    );
}

export default StoryItemMain;
