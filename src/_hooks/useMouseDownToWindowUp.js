import { useRef } from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';

//
function detectNoTouch(e) {
    return e.touches.length == 0;
}

//
function detectHasTouch(e) {
    return e.touches.length > 0;
}

//
export function useMouseDownToWindowUp({
    handleDown = () => {},
    handleMove = () => {},
    handleEnd = () => {},

    detectEndTouch = detectNoTouch,
    detectStartTouch = detectHasTouch,
}) {
    //
    const ref_func_move = useRef(null);
    const ref_func_up = useRef(null);

    //
    function onDown(e) {
        handleDown(e);

        if (!ref_func_move.current) {
            ref_func_move.current = onMove;
        }
        if (!ref_func_up.current) {
            ref_func_up.current = onUp;
        }

        if (IS_MOBILE) {
            if (detectStartTouch(e)) {
                window.addEventListener('touchmove', ref_func_move.current);
                window.addEventListener('touchend', ref_func_up.current);
            }
        } else {
            window.addEventListener('mousemove', ref_func_move.current);
            window.addEventListener('mouseup', ref_func_up.current);
        }
    }

    //
    function onMove(e) {
        handleMove(e);
    }

    //
    function onUp(e) {
        handleEnd(e);

        if (IS_MOBILE) {
            if (detectEndTouch(e)) {
                window.removeEventListener('touchmove', ref_func_move.current);
                window.removeEventListener('touchend', ref_func_up.current);
            }
        } else {
            window.removeEventListener('mousemove', ref_func_move.current);
            window.removeEventListener('mouseup', ref_func_up.current);
        }

        ref_func_move.current = null;
        ref_func_up.current = null;
    }

    //
    return {
        onDown,
    };
}
