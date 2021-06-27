import { useRef } from 'react';

//
export function useWaitingLastAction({ time_waiting = 100, callback = () => {} }) {
    //
    const is_acting = useRef(false);
    const interval = useRef(null);

    //
    function handleWaitingLastAction() {
        is_acting.current = true;
        clearTimeout(interval.current);

        interval.current = setTimeout(() => {
            is_acting.current = false;
            clearTimeout(interval.current);

            callback();
        }, time_waiting);
    }

    //
    return {
        is_acting,
        handleWaitingLastAction,
    };
}
