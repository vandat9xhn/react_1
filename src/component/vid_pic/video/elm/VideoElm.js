import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import VideoUtils from '../utils/VideoUtils';
import VideoItem from '../../video_components/video/VideoItem';
//
// import './VideoElm.scss';

//
VideoElm.propTypes = {};

//
function VideoElm({
    ref_video_elm,
    face_video_elm,

    video,
    size_icon_utils = IS_MOBILE ? '16px' : '20px',
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
    handleChangeVolume,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime,
}) {
    //
    return (
        <div className="VideoElm pos-rel wh-100 user-select-none">
            <VideoItem ref_video_elm={ref_video_elm} video={video} />

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
                    handleChangeVolume={handleChangeVolume}
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
