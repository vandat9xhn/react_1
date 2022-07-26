import { useEffect, useRef, useState } from "react";
import { useBool } from "react-commons-ts";

//
export function useShortVideoMainMb({
    paused = true,
    initial_ref_main = { current: null },
    initial_ref_video = { current: null },
    time_show_btn_play = 2500,
}) {
    //
    const [is_play, setIsPlay] = useState(true);
    const [is_loaded, setIsLoaded] = useState(false);

    //
    const ref_video = initial_ref_video || useRef(null);
    const ref_main = initial_ref_main || useRef(null);

    //
    const { is_true, toggleBool, setIsTrue } = useBool(false);

    //
    useEffect(() => {
        let timeout = null;

        if (is_true) {
            timeout = setTimeout(() => {
                setIsTrue(false);
            }, time_show_btn_play);
        } else {
            timeout && clearTimeout(timeout);
        }

        return () => {
            timeout && clearTimeout(timeout);
        };
    }, [is_true, is_play]);

    //
    useEffect(() => {
        if (is_loaded) {
            if (!paused && is_play) {
                ref_video.current.play();
            } else {
                ref_video.current.pause();
            }
        }
    }, [is_loaded, !paused && is_play]);

    // ----

    const togglePlay = () => {
        setIsPlay((is_play) => !is_play);
    };

    const handleLoadedMetadata = () => {
        setIsLoaded(true);
    };

    // ---

    return {
        ref_main,
        ref_video,
        is_play,
        is_true,

        togglePlay,
        toggleBool,
        handleLoadedMetadata,
    };
}
