import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useVideoUtils } from '../../../../_hooks/useVideoUtils';
//
import VideoElm from '../elm/VideoElm';
import { observerDisplay } from '../../../../_some_function/observerDisplay';

//
Video.propTypes = {};

//
function Video({
    video,
    // view_count,
    total_view,

    initial_is_play,
    initial_zoom_lv,
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
    const ref_video_elm = useRef(null);
    const ref_is_over = useRef(false);

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
        getTotalTime,
        changeTotalTime,

        // live
        gotoLiveView,
    } = useVideoUtils({
        ref_video_elm: ref_video_elm,
        is_live: false,

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
        stop_when_over &&
            observerDisplay({
                elm: ref_video_elm.current,
                callbackDisplay: () => {
                    ref_is_over.current = false;
                },
                callbackNoDisplay: () => {
                    ref_is_over.current = true;
                    if (ref_is_play.current) {
                        togglePlay();
                    }
                },
            });
    }, []);

    // ------

    //
    function handleVolumeValueChange(new_volume = 0) {
        changeVolume({
            new_volume: new_volume / 100,
        });
    }

    //
    function handleStartMoveTime() {
        ref_holding_slider.current = true;
        if (ref_is_play.current) {
            ref_video_elm.current.pause()
        }
    }

    //
    function handleChangeTime(time_percent = 0) {
        changeTime({
            new_c_time: (ref_total_time.current * time_percent) / 100,
        });
    }

    // 
    function handleEndMoveTime() {
        ref_holding_slider.current = false;
        if (ref_is_play.current) {
            ref_video_elm.current.play()
        }
    }

    //
    return (
        <VideoElm
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
            toggleZoom={changeZoomLv}
            toggleMute={toggleMute}
            handleVolumeValueChange={handleVolumeValueChange}
            //
            handleChangeTime={handleChangeTime}
            handleStartMoveTime={handleStartMoveTime}
            handleEndMoveTime={handleEndMoveTime}
        />
    );
}

export default Video;
