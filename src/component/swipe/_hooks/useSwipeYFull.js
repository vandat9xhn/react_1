import { useEffect, useRef } from "react";

import { useMouseMoveY } from "../../../_hooks/useMouseMoveY";
import { handleScrollSmooth } from "../../../_some_function/handleScrollSmooth";

//
export function useSwipeYFull({ initial_ref_main, needed_change_y = 20 }) {
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
        ref_y_change.current += client_change_y;
        handleScrollY(client_change_y);
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
    };

    // when down
    const handleWhenDown = () => {
        handleScrollYSmooth(-ref_item_height.current - ref_y_change.current);
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
