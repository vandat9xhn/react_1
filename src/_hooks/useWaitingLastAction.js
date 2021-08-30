import { useRef } from 'react';
// 
import { useMounted } from './useMounted';

//
export function useWaitingLastAction({
    time_waiting = 100,
    callback = () => {},
}) {
    //
    const is_acting = useRef(false);
    const interval = useRef(null);

    //
    const mounted = useMounted();

    //
    function handleWaitingLastAction(data) {
        is_acting.current = true;
        clearTimeout(interval.current);

        interval.current = setTimeout(() => {
            is_acting.current = false;
            clearTimeout(interval.current);

            mounted && callback(data);
        }, time_waiting);
    }

    //
    return {
        is_acting,
        handleWaitingLastAction,
    };
}
