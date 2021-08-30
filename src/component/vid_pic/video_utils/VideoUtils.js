import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useWaitingLastAction } from '../../../_hooks/useWaitingLastAction';
//
import IconsPlayPause from '../../../_icons_svg/icon_play_pause/IconsPlayPause';

//
VideoUtils.propTypes = {};

//
function VideoUtils({
    size_icon,
    color,

    is_play,
    show_btn_play,
    
    toggleBtnPlay,
    togglePlayPause,
}) {
    //
    return (
        <React.Fragment>
            <div
                className={`pos-abs-100 bg-film ${
                    show_btn_play ? '' : 'display-none'
                }`}
            ></div>

            <div className="pos-abs-100" onClick={toggleBtnPlay}></div>

            <div
                className={`pos-abs-center ${
                    show_btn_play ? '' : 'display-none'
                }`}
            >
                <div className="cursor-pointer" onClick={togglePlayPause}>
                    <IconsPlayPause
                        x={is_play ? 200 : 0}
                        size_icon={size_icon}
                        color={color}
                    />
                </div>
            </div>
        </React.Fragment>
    );
}

export default VideoUtils;
