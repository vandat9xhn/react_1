import { useRef, useState } from 'react';

//
export function useHold({
    time = 500,
    use_holding = false,
    time_holding_start = 100,
}) {
    //
    const [holding, setHolding] = useState(false);

    //
    const timeout = useRef(null);
    const timeout_holding = useRef(null);

    //
    function StartHold(callback = function () {}) {
        timeout_holding.current = setTimeout(() => {
            use_holding && setHolding(true);
            handleHolding(callback);
        }, time_holding_start);
    }

    //
    function handleHolding(callback = function () {}) {
        timeout.current = setTimeout(() => {
            use_holding && setHolding(false);
            timeout_holding.current && clearTimeout(timeout_holding.current);
            callback();
        }, time);
    }

    function StopHold() {
        use_holding && setHolding(false);
        timeout_holding.current && clearTimeout(timeout_holding.current);
        timeout.current && clearTimeout(timeout.current);
    }

    return { holding, StartHold, StopHold };
}
