import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import VideoPause from '../../../video_components/pause/VideoPause';
import VideoTimeLine from '../../../video_components/time_line/_main/VideoTimeLine';
import VideoSettings from '../../../video_components/settings/_main/VideoSettings';
import VideoZoom from '../../../video_components/zoom/_main/VideoZoom';
import VideoSound from '../../../video_components/sound/_main/VideoSound';
//
import VideoLiveTimeDelay from '../time_delay/VideoLiveTimeDelay';
//
import './VideoLiveUtils.scss';
//
VideoLiveUtils.propTypes = {};

//
function VideoLiveUtils({
    is_play,
    is_zoom_out,
    is_mute,
    volume,

    c_time,
    buffer_time,
    total_time,

    size_icon,

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
            className={`VideoLiveUtils padding-5px bg-video-utils text-white ${
                c_time == total_time ? 'VideoLiveUtils-live' : ''
            }`}
        >
            <div className="display-flex align-items-center">
                <div className="VideoLiveUtils_part">
                    <VideoPause
                        is_play={is_play}
                        size_icon={size_icon}
                        // size_icon={'14px'}
                        // color={'var(--white)'}
                        togglePlayPause={togglePlayPause}
                    />
                </div>

                {c_time == total_time && IS_MOBILE ? null : (
                    <div
                        className="VideoLiveUtils_live_now display-flex padding-x-5px brs-4px bg-always-white text-always-05 line-20px font-12px font-500 cursor-pointer"
                        onClick={gotoLiveView}
                    >
                        Live
                    </div>
                )}

                {IS_MOBILE ? null : (
                    <div className="VideoLiveUtils_part">
                        <VideoLiveTimeDelay
                            c_time={c_time}
                            total_time={total_time}
                        />
                    </div>
                )}

                <div className="flex-grow-1">
                    <VideoTimeLine
                        c_time={(c_time * 100) / total_time}
                        total_time={total_time}
                        buffer_time={(buffer_time * 100) / total_time}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        handleChangeTime={handleChangeTime}
                        handleStartMoveTime={handleStartMoveTime}
                        handleEndMoveTime={handleEndMoveTime}
                    />
                </div>

                {IS_MOBILE ? null : (
                    <div className="VideoLiveUtils_part">
                        <VideoSettings size_icon={size_icon} />
                    </div>
                )}

                {IS_MOBILE ? null : (
                    <div className="VideoLiveUtils_part">
                        <VideoZoom
                            zoom_icon_name={'arrow'}
                            size_icon={size_icon}
                            is_zoom_out={is_zoom_out}
                            toggleZoom={toggleZoom}
                        />
                    </div>
                )}

                <div className="VideoLiveUtils_part">
                    <VideoSound
                        volume={volume}
                        is_mute={is_mute}
                        size_icon={size_icon}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        toggleMute={toggleMute}
                        handleChangeVolume={handleChangeVolume}
                    />
                </div>
            </div>
        </div>
    );
}

export default VideoLiveUtils;
