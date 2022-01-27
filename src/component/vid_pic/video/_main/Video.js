import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useVideoUtils } from '../../../../_hooks/useVideoUtils';
//
import VideoElm from '../elm/VideoElm';

//
Video.propTypes = {};

//
function Video({
    video,
    // view_count,
    total_view,

    initial_is_play,

    initial_zoom_lv,
    max_zoom_lv = 0,
    use_fullscreen = false,

    initial_volume,
    initial_is_mute,
    initial_c_time,
    initial_total_time,

    face_video_elm,
    stop_when_over = true,

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
    const ref_main_video = useRef(null);
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

        ref_is_hide_cursor,

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
        ref_main_video: ref_main_video,
        ref_video_elm: ref_video_elm,

        is_live: false,
        stop_when_over: stop_when_over,
        use_fullscreen: use_fullscreen,

        initial_is_play: initial_is_play,
        initial_zoom_lv: initial_zoom_lv,
        max_zoom_lv: max_zoom_lv,
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

    // console.log(ref_video_elm.current);

    //
    return (
        <VideoElm
            ref_main_video={ref_main_video}
            ref_video_elm={ref_video_elm}
            video={video}
            total_view={total_view}
            //
            is_play={ref_is_play.current}
            is_mute={ref_is_mute.current}
            volume={ref_volume.current}
            //
            is_zoom_out={ref_zoom_lv.current == max_zoom_lv && max_zoom_lv > 0}
            is_hide_cursor={ref_is_hide_cursor.current}
            //
            c_time={ref_c_time.current}
            buffer_time={ref_buffer_time.current}
            total_time={ref_total_time.current}
            //
            face_video_elm={face_video_elm}
            //
            togglePlayPause={togglePlay}
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

export default Video;
