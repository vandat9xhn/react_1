import { useRef } from 'react';

//
export function useHold(time = 500) {
    //
    const timeout = useRef(null);

    //
    function StartHold(callback = function () {}) {
        timeout.current = setTimeout(() => {
            callback();
        }, time);
    }

    function StopHold() {
        clearTimeout(timeout.current);
    }

    return { StartHold, StopHold };
}
