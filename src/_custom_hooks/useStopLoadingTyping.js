import { useRef } from 'react';

//
export function useStopLoadingTyping({ time_stop = 100, callback = () => {} }) {
    //
    const is_typing = useRef(false);
    const interval = useRef(null);

    //
    function handleKeyDownTying() {
        is_typing.current = true;
        clearTimeout(interval.current);
        interval.current = null;
    }

    //
    function handleKeyUpTying() {
        interval.current = setTimeout(() => {
            is_typing.current = false;
            callback()
        }, time_stop);
    }

    //
    function handleChangeTying() {
        is_typing.current = true;
        clearTimeout(interval.current);

        interval.current = setTimeout(() => {
            is_typing.current = false;
            clearTimeout(interval.current);

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
