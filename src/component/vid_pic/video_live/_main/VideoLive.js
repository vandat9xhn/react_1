import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useVideoUtils } from '../../../../_hooks/useVideoUtils';
//
import VideoLiveElm from '../elm/_main/VideoLiveElm';

//
VideoLive.propTypes = {};

//
function VideoLive({
    video,
    total_view,
    face_video_elm,

    stop_when_over,

    initial_is_play,
    initial_zoom_lv,
    initial_volume,
    initial_is_mute,
    initial_c_time,
    initial_total_time,

    beforeTogglePlay,
    afterTogglePlay,
    beforeChangeVolume,
    afterChangeVolume,
    beforeToggleMute,
    afterToggleMute,
    beforeChangeZoomLv,
    afterChangeZoomLv,
    beforeChangeTime,
    afterChangeTime,
}) {
    //
    const ref_video_elm = useRef(null);

    //
    const {
        ref_is_play,
        ref_zoom_lv,

        ref_volume,
        ref_is_mute,

        ref_c_time,
        ref_total_time,
        ref_buffer_time,
        ref_holding_slider,

        togglePlay,
        changeVolume,
        toggleMute,
        changeZoomLv,

        changeTime,
        startMoveTime,
        endMoveTime,
        getTotalTime,
        changeTotalTime,

        // live
        gotoLiveView,
    } = useVideoUtils({
        ref_video_elm: ref_video_elm,
        is_live: true,
        stop_when_over: stop_when_over,

        initial_is_play: initial_is_play,
        initial_zoom_lv: initial_zoom_lv,
        initial_volume: initial_volume,
        initial_is_mute: initial_is_mute,
        initial_c_time: initial_c_time,
        initial_total_time: initial_total_time,

        beforeTogglePlay: beforeTogglePlay,
        afterTogglePlay: afterTogglePlay,
        beforeChangeVolume: beforeChangeVolume,
        afterChangeVolume: afterChangeVolume,
        beforeToggleMute: beforeToggleMute,
        afterToggleMute: afterToggleMute,
        beforeChangeZoomLv: beforeChangeZoomLv,
        afterChangeZoomLv: afterChangeZoomLv,
        beforeChangeTime: beforeChangeTime,
        afterChangeTime: afterChangeTime,
    });

    // ------

    //
    return (
        <VideoLiveElm
            ref_video_elm={ref_video_elm}
            video={video}
            total_view={total_view}
            //
            is_play={ref_is_play.current}
            is_zoom_out={ref_zoom_lv.current > 0}
            is_mute={ref_is_mute.current}
            volume={ref_volume.current}
            //
            c_time={ref_c_time.current}
            buffer_time={ref_buffer_time.current}
            total_time={ref_total_time.current}
            //
            face_video_elm={face_video_elm}
            //
            togglePlayPause={togglePlay}
            gotoLiveView={gotoLiveView}
            toggleZoom={changeZoomLv}
            toggleMute={toggleMute}
            handleChangeVolume={changeVolume}
            //
            handleChangeTime={changeTime}
            handleStartMoveTime={startMoveTime}
            handleEndMoveTime={endMoveTime}
        />
    );
}

export default VideoLive;
