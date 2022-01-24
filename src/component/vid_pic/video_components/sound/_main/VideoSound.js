import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import IconSound from '../../../../../_icons_svg/_icon_sound/IconSound';
//
import InputRangeOneSlider from '../../../../input/range/one_slider/_main/InputRangeOneSlider';
//
import './VideoSound.scss';

//
VideoSound.propTypes = {
    c_time: PropTypes.number,

    range: PropTypes.element,
    active_range: PropTypes.element,
    slider: PropTypes.element,

    handleMoveTime: PropTypes.func,
    handleMoveEndMoveTime: PropTypes.func,
};

VideoSound.defaultProps = {
    range: <div className="VideoSound_range"></div>,
    active_range: (
        <div className="VideoSound_range VideoSound_range-active"></div>
    ),
    slider: <div className="VideoSound_slider"></div>,
};

//
function VideoSound({
    volume,
    is_mute,
    size_icon,

    range,
    active_range,
    slider,

    toggleMute,
    handleChangeVolume,
}) {
    //
    const [is_mouse_down, setIsMouseDown] = useState(false);

    // -----

    //
    function getRangeAngel() {
        return -90;
    }

    //
    function afterMouseDown() {
        setIsMouseDown(true);
    }

    //
    function afterMouseUp() {
        setIsMouseDown(false);
    }

    //
    function onVolumeValueChange(new_volume = 0) {
        handleChangeVolume({ new_volume: new_volume / 100 });
    }

    //
    return (
        <div
            className={`VideoSound pos-rel padding-left-4px ${
                is_mouse_down ? 'VideoSound-active' : ''
            }`}
        >
            <div
                className="VideoSound_icon display-flex pos-rel z-index-1 cursor-pointer"
                onClick={toggleMute}
            >
                <IconSound
                    is_mute={is_mute}
                    is_too_low={volume <= 0.1}
                    is_high={volume >= 0.6}
                    //
                    color="var(--white)"
                    size_icon={size_icon}
                />
            </div>

            <div className="VideoSound_volume pos-abs">
                <div className="VideoSound_volume_contain wh-100 cursor-pointer">
                    <InputRangeOneSlider
                        range={range}
                        active_range={active_range}
                        slider={slider}
                        value={is_mute ? 0 : volume * 100}
                        //
                        only_drag_slider={false}
                        getRangeAngel={getRangeAngel}
                        //
                        handleChange={onVolumeValueChange}
                        afterMouseDown={afterMouseDown}
                        afterMouseUp={afterMouseUp}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoSound;
