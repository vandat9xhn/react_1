import { useMouseFakeDrag } from './useMouseFakeDrag';
import { useScrollToX } from './useScrollToX';

//
export function useMouseDragScrollToX(elm, scroll_percent) {
    //
    function handleAfterMouseUp() {
        hasNextPrev();
    }

    //
    const { handleMouseDown, handleMouseMove, handleMouseUp, is_mouse_down } =
        useMouseFakeDrag(elm, handleAfterMouseUp);

    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX(elm, scroll_percent);

    return {
        handleMouseDown,
        handleMouseMove,
        handleMouseUp,
        is_mouse_down,

        is_has_next,
        is_has_prev,
        handleNext,
        handlePrev,
        // hasNextPrev,
    };
}
