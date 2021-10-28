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
        use_holding &&
            (timeout_holding.current = setTimeout(() => {
                setHolding(true);
            }, time_holding_start));

        timeout.current = setTimeout(() => {
            use_holding && setHolding(false);
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
