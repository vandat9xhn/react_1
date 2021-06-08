import { useEffect, useRef } from 'react';

//
export function useInterval({ time, callback = function () {} }) {
    //
    const skip_interval = useRef(false);
    const mounted = useRef(true);

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
    function doSkipInterval() {
        skip_interval.current = true;
    }

    //
    return { doSkipInterval };
}
