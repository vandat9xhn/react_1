import { useRef, useState } from 'react';

//
export function useHold({ time = 500, use_holding = false }) {
    //
    const [holding, setHolding] = useState(false);

    //
    const timeout = useRef(null);

    //
    function StartHold(callback = function () {}) {
        use_holding && setHolding(true);
        timeout.current = setTimeout(() => {
            use_holding && setHolding(false);
            callback();
        }, time);
    }

    function StopHold() {
        use_holding && setHolding(false);
        timeout.current && clearTimeout(timeout.current);
    }

    return { holding, StartHold, StopHold };
}
