import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import VideoLiveUtils from '../../utils/_main/VideoLiveUtils';
import VideoLiveView from '../../view/VideoLiveView';
//
import './VideoLiveElm.scss';

//
VideoLiveElm.propTypes = {};

//
function VideoLiveElm({
    ref_video_elm,
    video,
    total_view,

    is_play,
    is_zoom_out,
    is_mute,
    volume,

    c_time,
    buffer_time,
    total_time,

    size_icon = IS_MOBILE ? '16px' : '20px',
    face_video_elm,

    togglePlayPause,
    gotoLiveView,
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
            className={`VideoLiveElm pos-rel wh-100 ${
                is_play ? 'VideoLiveElm-play' : ''
            }`}
        >
            <video
                ref={ref_video_elm}
                className="wh-100"
                src={video}
                controls={false}
            />

            <div className="pos-abs-100">{face_video_elm}</div>

            <div className="VideoLiveElm_view pos-abs-0 padding-12px">
                <VideoLiveView
                    is_live_view={c_time == total_time}
                    total_view={total_view}
                />
            </div>

            <div className="VideoLiveElm_utils pos-abs left-0 bottom-0 w-100per">
                <VideoLiveUtils
                    is_play={is_play}
                    is_zoom_out={is_zoom_out}
                    is_mute={is_mute}
                    volume={volume}
                    //
                    c_time={c_time}
                    buffer_time={buffer_time}
                    total_time={total_time}
                    //
                    size_icon={size_icon}
                    //
                    togglePlayPause={togglePlayPause}
                    gotoLiveView={gotoLiveView}
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

export default VideoLiveElm;
