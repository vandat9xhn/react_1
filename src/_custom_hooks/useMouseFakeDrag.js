import { useRef, useState } from 'react';

//
export function useMouseFakeDrag(elm, handleAfterMouseUp = () => {}) {
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
            elm.scrollTo(elm.scrollLeft - e.clientX + ref_clientX.current, 0);
            ref_clientX.current = e.clientX;
        }
    }

    //
    function handleMouseUp() {
        ref_should_scroll.current = false;
        setTimeout(() => {
            setIsMouseDown(false);
            handleAfterMouseUp();
        }, 0);
    }

    return { handleMouseDown, handleMouseMove, handleMouseUp, is_mouse_down };
}
