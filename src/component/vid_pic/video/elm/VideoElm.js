import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import VideoUtils from '../utils/VideoUtils';
import VideoItem from '../../video_components/video/VideoItem';
//
import './VideoElm.scss';
import VideoUtilsLayout from '../../video_components/utils_layout/VideoUtilsLayout';

//
VideoElm.propTypes = {};

//
function VideoElm({
    ref_main_video,
    ref_video_elm,
    face_video_elm,

    video,
    size_icon_utils = IS_MOBILE ? '16px' : '20px',
    total_view,

    is_play,
    is_mute,
    volume,
    is_zoom_out,
    is_hide_cursor,

    c_time,
    buffer_time,
    total_time,

    togglePlayPause,
    toggleZoom,
    toggleMute,
    handleChangeVolume,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime,
}) {
    //
    return (
        <div
            ref={ref_main_video}
            className="VideoElm pos-rel wh-100 user-select-none"
        >
            <VideoItem ref_video_elm={ref_video_elm} video={video} />

            <div className="pos-abs-100">{face_video_elm}</div>

            <VideoUtilsLayout
                ref_main_video={ref_main_video}
                is_hide_cursor={is_hide_cursor}
            >
                <VideoUtils
                    is_play={is_play}
                    is_zoom_out={is_zoom_out}
                    is_mute={is_mute}
                    volume={volume}
                    //
                    c_time={c_time}
                    buffer_time={buffer_time}
                    total_time={total_time}
                    //
                    size_icon={size_icon_utils}
                    //
                    togglePlayPause={togglePlayPause}
                    toggleZoom={toggleZoom}
                    toggleMute={toggleMute}
                    handleChangeVolume={handleChangeVolume}
                    //
                    handleChangeTime={handleChangeTime}
                    handleStartMoveTime={handleStartMoveTime}
                    handleEndMoveTime={handleEndMoveTime}
                />
            </VideoUtilsLayout>
        </div>
    );
}

export default VideoElm;
