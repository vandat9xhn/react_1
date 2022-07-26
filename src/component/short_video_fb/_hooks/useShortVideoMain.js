import { useEffect, useRef, useState } from "react";

//
export function useShortVideoMain({
    initial_is_play = true,
    initial_ref_video = { current: null },
    currentTime = 0,
}) {
    //
    const [is_play, setIsPlay] = useState(initial_is_play);

    //
    const ref_video = initial_ref_video || useRef(null);

    //
    useEffect(() => {
        currentTime && (ref_video.current.currentTime = currentTime);
    }, []);

    // ----
    const togglePlay = () => {
        setIsPlay((is_play) => {
            const new_is_play = !is_play;

            if (new_is_play) {
                ref_video.current.play();
            } else {
                ref_video.current.pause();
            }

            return new_is_play;
        });
    };

    // ---

    return {
        ref_video,
        is_play,
        togglePlay,
        setIsPlay,
    };
}
