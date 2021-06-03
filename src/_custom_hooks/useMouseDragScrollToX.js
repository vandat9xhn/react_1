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

    // 
    function handleScroll() {
        if (elm.scrollLeft == 0 || elm.scrollLeft == elm.scrollWidth - elm.clientWidth) {
            hasNextPrev()
        }
    }

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
