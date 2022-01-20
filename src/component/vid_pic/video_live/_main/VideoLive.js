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
    view_count,
    is_live,

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
    const ref_video_elm= useRef(null)

    //
    const {
        ref_is_play,
        ref_zoom_lv,

        ref_volume,
        ref_is_mute,

        ref_c_time,
        ref_total_time,
        ref_holding_slider,

        togglePlay,
        changeVolume,
        toggleMute,
        changeZoomLv,

        changeTime,
        getTotalTime,
        changeTotalTime,

        // live
        gotoLiveView,
    } = useVideoUtils({
        is_live: is_live,
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

    //
    useEffect(() => {
        changeTotalTime(getTotalTime(ref_video_elm.current));
    }, []);

    //
    return (
        <VideoLiveElm
            ref_video_elm={ref_video_elm}
            video={video}
            view_count={view_count}
            c_time={ref_c_time.current}
            total_time={ref_total_time.current}
        />
    );
}

export default VideoLive;
