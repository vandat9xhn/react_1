import { useState } from 'react';
//
import { handleScrollSmooth } from '../_some_function/handleScrollSmooth';

//
export function useScrollToX(ref_elm, scroll_percent = 1) {
    //
    const [state_obj, setStateObj] = useState({
        is_has_next: false,
        is_has_prev: false,
    });

    const { is_has_next, is_has_prev } = state_obj;

    //
    function hasNextPrev(
        new_scroll_left = ref_elm.current ? ref_elm.current.scrollLeft : 0
    ) {
        if (!ref_elm.current || ref_elm.current.scrollWidth == 0) {
            return;
        }

        const client_width = ref_elm.current.clientWidth;
        const scroll_width = ref_elm.current.scrollWidth;

        if (scroll_width == client_width) {
            setStateObj({
                is_has_next: false,
                is_has_prev: false,
            });
        }
        //
        else if (new_scroll_left >= scroll_width - client_width) {
            setStateObj({
                is_has_next: false,
                is_has_prev: true,
            });
        }
        //
        else if (new_scroll_left <= 0) {
            setStateObj({
                is_has_next: true,
                is_has_prev: false,
            });
        }
        //
        else {
            setStateObj({
                is_has_next: true,
                is_has_prev: true,
            });
        }
    }

    //
    function handleNextPrev(is_next) {
        const client_width = ref_elm.current.clientWidth;
        const scroll_left = ref_elm.current.scrollLeft;
        const new_scroll_left =
            scroll_left +
            (is_next ? 1 : -1) *
                (client_width -
                    parseInt(getComputedStyle(ref_elm.current).padding)) *
                scroll_percent;

        hasNextPrev(new_scroll_left);
        ref_elm.current.scrollTo(new_scroll_left, 0);
    }

    //
    function handleScrollTo(is_next = true) {
        handleScrollSmooth(() => handleNextPrev(is_next), ref_elm.current);
    }

    /* ---------------------------------- */

    //
    function handleNext() {
        handleScrollTo(true);
    }

    //
    function handlePrev() {
        handleScrollTo(false);
    }

    return { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev };
}
