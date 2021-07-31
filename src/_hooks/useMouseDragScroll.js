import { useRef, useState } from 'react';

//
export function useMouseDragScroll(ref_elm, handleAfterMouseUp = () => {}) {
    //
    const [is_mouse_down, setIsMouseDown] = useState(false);

    //
    const ref_should_scroll = useRef(false);
    const ref_clientX = useRef(0);

    //
    function handleMouseDown(e) {
        ref_should_scroll.current = true;
        ref_clientX.current = e.clientX;
    }

    //
    function handleMouseMove(e) {
        if (ref_should_scroll.current) {
            !is_mouse_down && setIsMouseDown(true);
            ref_elm.current.scrollTo(
                ref_elm.current.scrollLeft - e.clientX + ref_clientX.current,
                0
            );
            ref_clientX.current = e.clientX;
        }
    }

    //
    function handleMouseUp() {
        if (ref_should_scroll.current) {
            ref_should_scroll.current = false;

            if (is_mouse_down) {
                setTimeout(() => {
                    setIsMouseDown(false);
                    handleAfterMouseUp();
                }, 0);
            }
        }
    }

    return { handleMouseDown, handleMouseMove, handleMouseUp, is_mouse_down };
}
