import React from 'react';
import PropTypes from 'prop-types';
//
import VideoUtils from '../utils/VideoUtils';
//
// import './VideoElm.scss';

//
VideoElm.propTypes = {};

//
function VideoElm({
    ref_video_elm,
    face_video_elm,

    video,
    size_icon_utils = '20px',
    total_view,

    is_play,
    is_zoom_out,
    is_mute,
    volume,

    c_time,
    buffer_time,
    total_time,

    togglePlayPause,
    toggleZoom,
    toggleMute,
    handleVolumeValueChange,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime,
}) {
    //
    return (
        <div className="VideoElm pos-rel wh-100 user-select-none">
            <video
                ref={ref_video_elm}
                className="wh-100"
                src={video}
                controls={false}
                preload="metadata"
            />

            <div className="pos-abs-100">{face_video_elm}</div>

            <div className="pos-abs left-0 bottom-0 w-100per">
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
                    handleVolumeValueChange={handleVolumeValueChange}
                    //
                    handleChangeTime={handleChangeTime}
                    handleStartMoveTime={handleStartMoveTime}
                    handleEndMoveTime={handleEndMoveTime}
                />
            </div>
        </div>
    );
}

export default VideoElm;
