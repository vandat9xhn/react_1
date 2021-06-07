import { useRef } from 'react';
//
import { useMouseDragScroll } from './useMouseDragScroll';
import { useScrollToX } from './useScrollToX';
import { useWaitingLastAction } from './useWaitingLastAction';

//
export function useMouseDragScrollToX(elm, scroll_percent) {
    //
    const just_click_btn = useRef(false);

    //
    const { handleMouseDown, handleMouseMove, handleMouseUp, is_mouse_down } =
        useMouseDragScroll(elm, handleAfterMouseUp);

    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(elm, scroll_percent);

    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 200,
        callback: handleScrollLast,
    });

    //
    function handleAfterMouseUp() {
        just_click_btn.current = true;
        hasNextPrev();
    }

    //
    function handleScrollLast() {
        if (just_click_btn.current) {
            just_click_btn.current = false;

            return;
        }

        hasNextPrev();
    }

    //
    function handleScroll() {
        handleWaitingLastAction();
    }

    //
    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        is_mouse_down,

        handleScroll,

        is_has_next,
        is_has_prev,
        handleNext,
        handlePrev,
        // hasNextPrev,
    };
}
