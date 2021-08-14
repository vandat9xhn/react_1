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

        window.ontouchmove = handleMove;
        window.ontouchend = handleEnd;

        is_run.current = true;

        client_length_start.current = getClientLength(e);
        client_length.current = client_length_start.current;
    }

    //
    function handleStart(e) {
        window.ontouchstart = handleStartResize;
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
    function handleEnd() {
        is_run.current = false;
        handleResizeEnd();

        window.ontouchstart = null
        window.ontouchmove = null;
        window.ontouchend = null;
    }

    //
    return {
        handleStart,
    };
}
