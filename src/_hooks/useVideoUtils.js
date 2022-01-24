import { useEffect, useRef } from 'react';
import { observerDisplay } from '../_some_function/observerDisplay';
//
import { useForceUpdate } from './UseForceUpdate';

//
export function useVideoUtils({
    ref_video_elm = {
        current: document.getElementsByTagName('video')[0],
    },

    is_live,
    stop_when_over = true,

    initial_is_play = false,
    initial_zoom_lv = 0,
    max_zoom_lv = 1,

    initial_volume = 0.5,
    initial_is_mute = true,

    initial_c_time = 0,
    initial_total_time = 0,

    beforeTogglePlay = () => {},
    afterTogglePlay = () => {},

    beforeChangeVolume = () => {},
    afterChangeVolume = () => {},
    beforeToggleMute = () => {},
    afterToggleMute = () => {},

    beforeChangeZoomLv = () => {},
    afterChangeZoomLv = () => {},

    beforeChangeTime = () => {},
    afterChangeTime = () => {},

    beforeGotoLiveView = () => {},
    afterGotoLiveView = () => {},
}) {
    //
    const ref_is_play = useRef(initial_is_play);
    const ref_zoom_lv = useRef(initial_zoom_lv);

    const ref_volume = useRef(initial_volume);
    const ref_is_mute = useRef(initial_is_mute);

    const ref_c_time = useRef(initial_c_time);
    const ref_total_time = useRef(initial_total_time);
    const ref_buffer_time = useRef(0);

    const ref_holding_slider = useRef(false);
    const ref_is_over = useRef(false);

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        ref_video_elm.current.addEventListener(
            'loadedmetadata',
            handleLoadMetadata
        );
        ref_video_elm.current.addEventListener('timeupdate', handleTimeUpDate);
        ref_video_elm.current.addEventListener('progress', handleProgress);
        ref_video_elm.current.addEventListener('ended', handleEnded);

        ref_video_elm.current.addEventListener(
            'durationchange',
            handleChangeDuration
        );
        ref_video_elm.current.addEventListener('pause', handleWhenPause);

        return () => {
            if (ref_video_elm.current) {
                ref_video_elm.current.removeEventListener(
                    'loadedmetadata',
                    handleLoadMetadata
                );
                ref_video_elm.current.removeEventListener(
                    'timeupdate',
                    handleTimeUpDate
                );
                ref_video_elm.current.removeEventListener(
                    'progress',
                    handleProgress
                );
                ref_video_elm.current.removeEventListener('ended', handleEnded);

                ref_video_elm.current.removeEventListener(
                    'durationchange',
                    handleChangeDuration
                );
                ref_video_elm.current.removeEventListener(
                    'pause',
                    handleWhenPause
                );
            }
        };
    }, []);

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

    // ---- EVENTS

    //
    function handleLoadMetadata() {
        ref_total_time.current = ref_video_elm.current.duration;
        ref_is_play.current && ref_video_elm.current.play();
        ref_is_mute.current && (ref_video_elm.current.muted = true);

        if (is_live) {
            ref_c_time.current = ref_total_time.current;
            ref_video_elm.current.currentTime = ref_total_time.current;
        }

        forceUpdate();
    }

    //
    function handleTimeUpDate() {
        ref_c_time.current = ref_video_elm.current.currentTime;
        forceUpdate();
    }

    //
    function handleProgress() {
        let range = 0;
        const bf = ref_video_elm.current.buffered;
        const c_time = ref_video_elm.current.currentTime;

        if (bf.length == 0) {
            return;
        }

        while (!(bf.start(range) <= c_time || bf.end(range) >= c_time)) {
            range += 1;
        }

        ref_buffer_time.current = bf.end(range);
    }

    //
    function handleEnded() {
        ref_is_play.current = false;
        forceUpdate();
    }

    //
    function handleChangeDuration() {
        ref_total_time.current = ref_video_elm.current.duration;
        forceUpdate();
    }

    //
    function handleWhenPause() {
        if (!ref_holding_slider.current) {
            ref_is_play.current = false;
            forceUpdate();
        }
    }

    // ---- NORMAL

    //
    function togglePlay() {
        beforeTogglePlay();

        const new_is_play = !ref_is_play.current;
        ref_is_play.current = new_is_play;
        if (new_is_play) {
            ref_video_elm.current.play();
        } else {
            ref_video_elm.current.pause();
        }

        forceUpdate();
        afterTogglePlay();
    }

    //
    function changeZoomLv() {
        let new_zoom_lv = ref_zoom_lv.current + 1;
        if (new_zoom_lv > max_zoom_lv) {
            new_zoom_lv = 0;
        }

        console.log(new_zoom_lv);

        beforeChangeZoomLv();
        ref_zoom_lv.current = new_zoom_lv;
        forceUpdate();
        afterChangeZoomLv();
    }

    // ---

    //
    function changeVolume({ new_volume = 0 }) {
        beforeChangeVolume();
        ref_volume.current = new_volume;
        ref_is_mute.current = false;
        ref_video_elm.current.volume = new_volume;
        ref_video_elm.current.muted && (ref_video_elm.current.muted = false);
        forceUpdate();
        afterChangeVolume();
    }

    //
    function toggleMute() {
        beforeToggleMute();
        const new_is_mute = !ref_is_mute.current;
        ref_is_mute.current = new_is_mute;
        ref_video_elm.current.muted = new_is_mute;
        forceUpdate();
        afterToggleMute();
    }

    // ----

    //
    function changeTime({ new_c_time }) {
        beforeChangeTime();
        ref_c_time.current = new_c_time;
        ref_video_elm.current.currentTime = new_c_time;
        forceUpdate();
        afterChangeTime();
    }

    //
    function changeTotalTime(new_total_time) {
        ref_total_time.current = new_total_time;
        ref_video_elm.current.duration = new_total_time;
        forceUpdate();
    }

    //
    function startMoveTime() {
        ref_holding_slider.current = true;
        if (ref_is_play.current) {
            ref_video_elm.current.pause();
        }
    }

    //
    function endMoveTime() {
        ref_holding_slider.current = false;
        if (ref_is_play.current) {
            ref_video_elm.current.play();
        }
    }

    // ---- NORMAL

    function getTotalTime() {
        return ref_video_elm.current.duration;
    }

    // ---- LIVE

    //
    function gotoLiveView() {
        if (ref_c_time.current == ref_total_time.current) {
            return;
        }

        beforeGotoLiveView();
        // ref_is_play.current = true;
        // ref_video_elm.current.play();
        ref_c_time.current = ref_total_time.current;
        ref_video_elm.current.currentTime = ref_total_time.current;
        forceUpdate();
        afterGotoLiveView();
    }

    // ----

    return {
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
    };
}
