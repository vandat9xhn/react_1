import { useEffect, useRef } from 'react';
import { IS_MOBILE } from '../_constant/Constant';
//
import { getClientXY } from '../_some_function/getClientXY';

//
export function useMouseMoveXY({
    handleMouseMove = () => {},
    handleMouseEnd = () => {},
}) {
    //
    const is_run = useRef(false);

    const client_x = useRef(0);
    const client_y = useRef(0);

    // const client_x_1 = useRef(0);
    // const client_y_1 = useRef(0);

    //
    function handleStart(e) {
        e.stopPropagation();

        is_run.current = true;

        const { client_x: new_client_x, client_y: new_client_y } =
            getClientXY(e);

        client_x.current = new_client_x;
        client_y.current = new_client_y;

        if (IS_MOBILE) {
            window.ontouchmove = handleMove
            window.ontouchend = handleEnd
        } else {
            window.onmousemove = handleMove
            window.onmouseup = handleEnd;
        }
    }

    //
    function handleMove(e) {
        if (!is_run.current) {
            return;
        };

        const { client_x: new_client_x, client_y: new_client_y } =
            getClientXY(e);

        handleMouseMove({
            old_client_x: client_x.current,
            old_client_y: client_y.current,

            new_client_x: new_client_x,
            new_client_y: new_client_y,

            client_x_change: new_client_x - client_x.current,
            client_y_change: new_client_y - client_y.current,
        });

        client_x.current = new_client_x;
        client_y.current = new_client_y;
    }

    //
    function handleEnd() {
        is_run.current = false;
        handleMouseEnd();

        if (IS_MOBILE) {
            window.ontouchmove = null
            window.ontouchend = null
        } else {
            window.onmousemove = null
            window.onmouseup = null
        }
    }

    //
    return {
        handleStart,
    };
}
