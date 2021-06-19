import { useEffect, useRef } from 'react';

//
export function useInterval({ time, callback = () => {} }) {
    //
    const skip_interval = useRef(true);
    const mounted = useRef(true);
    const stop_interval = useRef(true)

    //
    useEffect(() => {
        StartInterval();

        return () => {
            mounted.current = false;
        };
    }, []);

    //
    function StartInterval() {
        const interval = setInterval(() => {
            if (stop_interval.current) {
                return;
            }

            if (!mounted.current) {
                clearInterval(interval);
            } else if (!skip_interval.current) {
                callback();
            } else {
                skip_interval.current = false;
            }
        }, time);
    }

    // 
    function stopInterval(is_stop) {
        stop_interval.current = is_stop
    }

    //
    function doSkipInterval() {
        skip_interval.current = true;
    }

    //
    return { doSkipInterval, stopInterval };
}
