import { useRef } from "react";
//
import { getClientXY } from "../_some_function/getClientXY";
//
import { useMouseDownToWindowUp } from "./useMouseDownToWindowUp";

//
export function useMouseMoveOneAxis({
    axis = "x" || "y",
    handleMouseDown = () => {},
    handleMouseMove = () => {},
    handleMouseEnd = () => {},
}) {
    //
    const is_run = useRef(false);
    const first_orientation = useRef("");

    const client_x = useRef(0);
    const client_y = useRef(0);

    //
    const { onDown } = useMouseDownToWindowUp({
        handleDown: handleMouseDown,
        handleMove: handleMove,
        handleEnd: handleEnd,
    });

    // -----

    //
    function handleStart(e) {
        e.stopPropagation();

        is_run.current = true;
        const { client_x: new_client_x, client_y: new_client_y } =
            getClientXY(e);
        client_x.current = new_client_x;
        client_y.current = new_client_y;

        onDown(e);
    }

    //
    function handleMove(e) {
        if (!is_run.current) {
            return;
        }

        const { client_x: new_client_x, client_y: new_client_y } =
            getClientXY(e);
        const client_change_x = new_client_x - client_x.current;
        const client_change_y = new_client_y - client_y.current;

        if (first_orientation.current == "") {
            first_orientation.current =
                Math.abs(client_change_x) >= Math.abs(client_change_y)
                    ? "x"
                    : "y";
        }

        handleMouseMove(axis === "x" ? client_change_x : client_change_y);

        client_x.current = new_client_x;
        client_y.current = new_client_y;
    }

    //
    function handleEnd() {
        is_run.current = false;
        handleMouseEnd();
        first_orientation.current = "";
    }

    //
    return {
        is_run,
        client_x,
        client_y,
        first_orientation,

        handleStart,
        handleMove,
        handleEnd,
    };
}
