import { useRef } from 'react';
//
import { getTouchClientXY } from '../_some_function/getClientXY';

//
export function use2FingersResize({
    handleResize = () => {},
    handleResizeEnd = () => {},
}) {
    //
    const is_run = useRef(false);

    const is_start = useRef(false);
    const is_move = useRef(false);
    const is_end = useRef(false);

    const client_x_0 = useRef(0);
    const client_y_0 = useRef(0);
    const client_x_1 = useRef(0);
    const client_y_1 = useRef(0);

    const client_length_start = useRef(0);
    const client_length = useRef(0);

    //
    function getClientLength(e) {
        const { client_x: new_client_x_0, client_y: new_client_y_0 } =
            getTouchClientXY(e, 0);

        const { client_x: new_client_x_1, client_y: new_client_y_1 } =
            getTouchClientXY(e, 1);

        client_x_0.current = new_client_x_0;
        client_y_0.current = new_client_y_0;
        client_x_1.current = new_client_x_1;
        client_y_1.current = new_client_y_1;

        return (
            ((new_client_x_1 - new_client_x_0) ** 2 +
                (new_client_y_1 - new_client_y_0) ** 2) **
            0.5
        );
    }

    //
    function handleStartResize(e) {
        if (e.touches.length != 2) {
            return;
        }

        if (!is_move.current) {
            is_move.current = true;
            window.addEventListener('touchmove', handleMove, true);
        }
        if (!is_end.current) {
            is_end.current = true;
            window.addEventListener('touchend', handleTouchEnd, true);
        }

        is_run.current = true;

        client_length_start.current = getClientLength(e);
        client_length.current = client_length_start.current;
    }

    //
    function handleStart(e) {
        // e.stopPropagation();

        if (!is_start.current) {
            is_start.current = true;
            window.addEventListener('touchstart', handleStartResize, true);
        }
    }

    //
    function handleMove(e) {
        if (!is_run.current) {
            return;
        }

        const new_client_length = getClientLength(e);

        handleResize({
            client_change: new_client_length - client_length.current,
            client_x_0: client_x_0.current,
            client_x_1: client_x_1.current,
            client_y_0: client_y_0.current,
            client_y_1: client_y_1.current,
        });
        client_length.current = new_client_length;
    }

    //
    function handleTouchEnd() {
        is_run.current = false;
        // handleResizeEnd();

        is_start.current = false
        is_end.current = false;
        is_move.current = false;
        // window.ontouchstart = null
        window.removeEventListener('touchstart', handleStart, true);
        window.removeEventListener('touchmove', handleMove, true);
        window.removeEventListener('touchend', handleTouchEnd, true);
    }

    //
    // function handleElmTouchEnd() {
    //     is_run.current = false;
    //     handleResizeEnd();

    //     is_start.current = false;
    //     is_end.current = false;
    //     is_move.current = false;

    //     window.removeEventListener('touchstart', handleStartResize, true);
    //     window.removeEventListener('touchmove', handleMove, true);
    //     window.removeEventListener('touchend', handleTouchEnd, true);
    // }

    //
    return {
        handleStart,
        // handleElmTouchEnd,
    };
}
