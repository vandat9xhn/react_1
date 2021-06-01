import { useRef } from 'react';

//
export function useStopTyping({ time_stop = 100, callback = () => {} }) {
    //
    const is_typing = useRef(false);
    const interval = useRef(null);

    //
    function handleKeyDownTying() {
        is_typing.current = true;
        clearInterval(interval.current);
        interval.current = null;
    }

    //
    function handleKeyUpTying() {
        interval.current = setInterval(() => {
            is_typing.current = false;
        }, time_stop);
    }

    //
    function handleChangeTying() {
        is_typing.current = true;
        clearInterval(interval.current);

        interval.current = setInterval(() => {
            is_typing.current = false;
            clearInterval(interval.current);

            callback();
        }, time_stop);
    }

    //
    return {
        is_typing,
        handleKeyDownTying,
        handleKeyUpTying,
        handleChangeTying,
    };
}
