import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import VideoItem from '../../../video_components/video/VideoItem';
import VideoLiveUtils from '../../utils/_main/VideoLiveUtils';
import VideoLiveView from '../../view/VideoLiveView';
//
import './VideoLiveElm.scss';
import VideoUtilsLayout from '../../../video_components/utils_layout/VideoUtilsLayout';

//
VideoLiveElm.propTypes = {};

//
function VideoLiveElm({
    ref_main_video,
    ref_video_elm,
    video,
    total_view,

    is_play,
    is_mute,
    volume,
    is_zoom_out,
    is_hide_cursor,

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
            ref={ref_main_video}
            className={`VideoLiveElm pos-rel wh-100 ${
                is_play ? 'VideoLiveElm-play' : ''
            }`}
        >
            <VideoItem ref_video_elm={ref_video_elm} video={video} />

            <div className="pos-abs-100">{face_video_elm}</div>

            <div className="VideoLiveElm_view pos-abs-0 padding-12px">
                <VideoLiveView
                    is_live_view={c_time == total_time}
                    total_view={total_view}
                    />
            </div>

            <VideoUtilsLayout
                ref_main_video={ref_main_video}
                is_hide_cursor={is_hide_cursor}
            >
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
            </VideoUtilsLayout>
        </div>
    );
}

export default VideoLiveElm;
