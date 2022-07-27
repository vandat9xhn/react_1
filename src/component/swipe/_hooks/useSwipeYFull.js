import { useEffect, useRef } from "react";

import { useMouseMoveY } from "../../../_hooks/useMouseMoveY";
import { handleScrollSmooth } from "../../../_some_function/handleScrollSmooth";

//
export function useSwipeYFull({
    initial_ref_main,
    needed_change_y = 20,
    swipe_up = true,

    handleChangeIx = (new_ix = 0) => {},
    callbackTouchMove = (per_y_change = 0) => {},
}) {
    //
    const _ref_main = useRef(null);
    const ref_main = initial_ref_main || _ref_main;
    const ref_item_height = useRef(0);
    const ref_y_change = useRef(0);

    //
    const { handleStart } = useMouseMoveY({
        // handleMouseDown: () => console.log(1),
        handleMouseMove: handleTouchMove,
        handleMouseEnd: handleTouchEnd,
    });

    //
    useEffect(() => {
        detectItemHeight();
        window.addEventListener("resize", detectItemHeight);

        return () => {
            window.removeEventListener("resize", detectItemHeight);
        };
    }, []);

    // ----

    const detectItemHeight = () => {
        ref_item_height.current = ref_main.current.clientHeight;
    };

    const handleScrollY = (scroll_y) => {
        ref_main.current.scrollTop = scroll_y;
    };

    const handleScrollYSmooth = (scroll_y) => {
        handleScrollSmooth(() => {
            handleScrollY(scroll_y);
        }, ref_main.current);
    };

    const getNewIx = () => {
        const m = ref_main.current.scrollTop % ref_item_height.current;
        const i = (ref_main.current.scrollTop - m) / ref_item_height.current;
        const is_up = ref_y_change.current * (swipe_up ? -1 : 1) > 0;

        if (is_up) {
            return i + (m < ref_item_height.current - needed_change_y ? 0 : 1);
        }

        return i + (m < needed_change_y ? 0 : 1);
    };

    // -----

    // move
    function handleTouchMove(client_change_y = 0) {
        const _client_change_y = swipe_up ? -client_change_y : client_change_y;
        ref_y_change.current += _client_change_y;
        handleScrollY(ref_main.current.scrollTop + _client_change_y);
        callbackTouchMove(ref_y_change.current / ref_item_height.current);
    }

    //
    function handleTouchEnd() {
        if (ref_y_change.current === 0) {
            return;
        }

        const new_ix = getNewIx();
        handleChangeIx(new_ix);
        handleScrollYSmooth(ref_item_height.current * new_ix);
        ref_y_change.current = 0;
    }

    // ----

    return {
        ref_main,
        handleStart,
    };
}
