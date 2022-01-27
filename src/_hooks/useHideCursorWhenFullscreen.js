import { useEffect, useRef } from 'react';
//
import { useForceUpdate } from './UseForceUpdate';

//
export function useHideCursorWhenFullscreen({
    fullscreen = false,
    time_to_hide = 1500,
}) {
    //
    const ref_interval = useRef(null);
    const ref_c_time = useRef(0);
    const ref_is_hide_cursor = useRef(false);

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        if (fullscreen) {
            window.addEventListener('mousemove', handleMouseMove);
            startCountUp();
        } else {
            window.removeEventListener('mousemove', handleMouseMove);
            clearInterval(ref_interval.current);
        }
    }, [fullscreen]);

    //
    useEffect(() => {
        const html = document.getElementsByTagName('html')[0];

        if (ref_is_hide_cursor.current) {
            html.dataset.fullscreenHideCursor = 1;
        } else {
            if (html.dataset.fullscreenHideCursor) {
                html.dataset.fullscreenHideCursor =
                    parseInt(html.dataset.fullscreenHideCursor) - 1;

                if (parseInt(html.dataset.fullscreenHideCursor) == 0) {
                    html.removeAttribute('data-fullscreen-hide-cursor');
                }
            }
        }
    }, [ref_is_hide_cursor.current]);

    // ----

    //
    function startCountUp() {
        console.log(1);
        ref_interval.current = setInterval(() => {
            ref_c_time.current += 100;

            if (ref_c_time.current == time_to_hide) {
                clearInterval(ref_interval.current);

                ref_interval.current = null;
                ref_is_hide_cursor.current = true;
                ref_c_time.current = 0;

                forceUpdate();
            }
        }, 100);
    }

    //
    function handleMouseMove() {
        ref_c_time.current = 0;

        if (ref_is_hide_cursor.current) {
            ref_is_hide_cursor.current = false;
            forceUpdate();
        } else if (ref_interval.current == null) {
            startCountUp();
        }
    }

    // ----

    return {
        ref_is_hide_cursor,
    };
}
