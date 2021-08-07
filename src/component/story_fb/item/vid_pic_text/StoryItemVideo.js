import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import IconsInput from '../../../../_icons_svg/Icons_input/IconsInput';

//
StoryItemVideo.propTypes = {};

//
function StoryItemVideo({ vid_pic }) {
    //
    const [state_obj, setStateObj] = useState({
        show_control: false,
    });

    const { show_control } = state_obj;

    //
    const ref_video_elm = useRef(null);
    const ref_timeout_control = useRef(null);

    //
    function handleToggleControl() {
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
        <div className="wh-100" onClick={handleToggleControl}>
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
        </div>
    );
}

export default StoryItemVideo;
