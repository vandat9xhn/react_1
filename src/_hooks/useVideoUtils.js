import { useEffect, useRef, useState } from 'react';
//
import { useWaitingLastAction } from './useWaitingLastAction';

//
export function useVideoUtils({ other_state = {} }) {
    //
    const [state_obj, setStateObj] = useState({
        is_play: false,
        show_btn_play: false,
        ...other_state,
    });

    const { is_play, show_btn_play } = state_obj;

    //
    const ref_video_elm = useRef(null);

    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 2000,
        callback: hideBtnPlay,
    });

    //
    useEffect(() => {
        handleWaitingLastAction();
    }, [is_play, show_btn_play]);

    useEffect(() => {
        if (ref_video_elm.current.readyState == 4) {
            if (!is_play) {
                ref_video_elm.current.pause();
            } else {
                ref_video_elm.current.play();
            }
        }
    }, [is_play]);

    /* ------------ */

    //
    function togglePlayPause() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_play: !state_obj.is_play,
        }));
    }

    //
    function doPause() {
        if (is_play) {
            ref_video_elm.current.pause();
    
            setStateObj((state_obj) => ({
                ...state_obj,
                is_play: false,
            }));
        }
    }

    //
    function toggleBtnPlay() {
        setStateObj((state_obj) => ({
            ...state_obj,
            show_btn_play: !state_obj.show_btn_play,
        }));
    }

    //
    function hideBtnPlay() {
        setStateObj((state_obj) => ({
            ...state_obj,
            show_btn_play: false,
        }));
    }

    //
    function handleEnded() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_play: false,
            show_btn_play: true,
        }));
    }

    //
    return {
        ref_video_elm,

        state_obj,
        setStateObj,

        toggleBtnPlay,
        togglePlayPause,

        doPause,
        hideBtnPlay,
        handleEnded,
    };
}
