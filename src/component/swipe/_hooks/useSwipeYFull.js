import { useEffect, useRef } from "react";

import { useMouseMoveY } from "../../../_hooks/useMouseMoveY";
import { handleScrollSmooth } from "../../../_some_function/handleScrollSmooth";

//
export function useSwipeYFull({
    initial_ref_main,
    needed_change_y = 20,
    swipe_up = true,

    handleDownOrUp = (is_next = true) => {},
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

    //
    const handleScrollY = (scroll_y) => {
        const scrollTop = ref_main.current.scrollTop;
        ref_main.current.scrollTop = scrollTop + scroll_y;
    };

    //
    const handleScrollYSmooth = (scroll_y) => {
        handleScrollSmooth(() => {
            handleScrollY(scroll_y);
        }, ref_main.current);
    };

    // -----

    // move
    function handleTouchMove(client_change_y = 0) {
        const _client_change_y = swipe_up ? -client_change_y : client_change_y;
        ref_y_change.current += _client_change_y;
        handleScrollY(_client_change_y);
        callbackTouchMove(ref_y_change.current / ref_item_height.current);
    }

    //
    function handleTouchEnd() {
        if (ref_y_change.current >= needed_change_y) {
            handleWhenUp();
        } else if (ref_y_change.current <= -needed_change_y) {
            handleWhenDown();
        } else {
            handleNotChange();
        }

        ref_y_change.current = 0;
    }

    // when up
    const handleWhenUp = () => {
        handleScrollYSmooth(ref_item_height.current - ref_y_change.current);
        handleDownOrUp(false);
    };

    // when down
    const handleWhenDown = () => {
        handleScrollYSmooth(-ref_item_height.current - ref_y_change.current);
        handleDownOrUp(true);
    };

    // when not change
    const handleNotChange = () => {
        handleScrollYSmooth(-ref_y_change.current);
    };

    // ----

    return {
        ref_main,
        handleStart,
    };
}
