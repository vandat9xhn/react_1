import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
//
import VideoPause from '../../video_components/pause/VideoPause';
import VideoTimeTotalTime from '../../video_components/time_total_time/VideoTimeTotalTime';
import VideoTimeLine from '../../video_components/time_line/_main/VideoTimeLine';
import VideoSettings from '../../video_components/settings/_main/VideoSettings';
import VideoZoom from '../../video_components/zoom/_main/VideoZoom';
import VideoSound from '../../video_components/sound/_main/VideoSound';
//
import './VideoUtils.scss';
//
VideoUtils.propTypes = {};

//
function VideoUtils({
    is_play,
    is_zoom_out,
    is_mute,
    volume,

    c_time,
    buffer_time,
    total_time,

    size_icon,

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
        <div className="VideoUtils padding-5px bg-video-utils text-white">
            <div className="display-flex align-items-center">
                <div className="VideoUtils_part">
                    <VideoPause
                        is_play={is_play}
                        size_icon={size_icon}
                        // size_icon={'14px'}
                        // color={'var(--white)'}
                        togglePlayPause={togglePlayPause}
                    />
                </div>

                {IS_MOBILE ? null : (
                    <div className="VideoUtils_part">
                        <VideoTimeTotalTime
                            c_time={c_time}
                            total_time={total_time}
                        />
                    </div>
                )}

                <div className="flex-grow-1">
                    <VideoTimeLine
                        c_time={(c_time * 100) / total_time}
                        buffer_time={(buffer_time * 100) / total_time}
                        total_time={total_time}
                        // range={range}
                        // active_range={active_range}
                        // slider={slider}
                        handleChangeTime={handleChangeTime}
                        handleStartMoveTime={handleStartMoveTime}
                        handleEndMoveTime={handleEndMoveTime}
                    />
                </div>

                {!IS_MOBILE ? null : (
                    <div className="VideoUtils_part">
                        <VideoTimeTotalTime
                            c_time={c_time}
                            total_time={total_time}
                        />
                    </div>
                )}

                {IS_MOBILE ? null : (
                    <div className="VideoUtils_part">
                        <VideoSettings size_icon={size_icon} />
                    </div>
                )}

                {IS_MOBILE ? null : (
                    <div className="VideoUtils_part">
                        <VideoZoom
                            zoom_icon_name={'arrow'}
                            size_icon={size_icon}
                            is_zoom_out={is_zoom_out}
                            toggleZoom={toggleZoom}
                        />
                    </div>
                )}

                <div className="VideoUtils_part">
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

export default VideoUtils;
