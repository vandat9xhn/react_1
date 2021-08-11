import { useEffect, useRef } from 'react';
//
import { getClientX } from '../_some_function/getClientXY';

//
export function useMouseMoveX({
    handleMouseDown = () => {},
    handleMouseMove = () => {},
    handleMouseEnd = () => {},
}) {
    //
    const is_run = useRef(false);
    const client_x = useRef(0);

    //
    function handleStart(e) {
        e.stopPropagation()
        
        is_run.current = true;
        client_x.current = getClientX(e);
        handleMouseDown();

        window.onmousemove = handleMove
        window.onmouseup = handleEnd
    }

    //
    function handleMove(e) {
        if (!is_run.current) {
            return;
        }

        const new_client_x = getClientX(e);

        handleMouseMove(new_client_x - client_x.current);
        client_x.current = new_client_x;
    }

    //
    function handleEnd() {
        is_run.current = false;
        handleMouseEnd();

        window.onmousemove = null
        window.onmouseup = null
    }

    //
    return {
        handleStart,
        handleMove,
        handleEnd,
    };
}
