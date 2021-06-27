import { useEffect, useState } from 'react';
//
import { handleScrollSmooth } from '../_some_function/handleScrollSmooth';

//
export function useScrollToX(elm, scroll_percent = 1) {
    //
    const [mess_head_state, setMessHeadState] = useState({
        is_has_next: true,
        is_has_prev: false,
    });

    const { is_has_next, is_has_prev } = mess_head_state;

    //
    useEffect(() => {
        elm && hasNextPrev();
    }, []);

    //
    function hasNextPrev(new_scroll_left = elm ? elm.scrollLeft : 0) {
        const client_width = elm.clientWidth;
        const scroll_width = elm.scrollWidth;

        if (new_scroll_left >= scroll_width - client_width) {
            setMessHeadState({
                is_has_next: false,
                is_has_prev: true,
            });
        }
        //
        else if (new_scroll_left <= 0) {
            setMessHeadState({
                is_has_next: true,
                is_has_prev: false,
            });
        }
        //
        else {
            setMessHeadState({
                is_has_next: true,
                is_has_prev: true,
            });
        }
    }

    //
    function handleNextPrev(is_next) {
        const client_width = elm.clientWidth;
        const scroll_left = elm.scrollLeft;
        const new_scroll_left =
            scroll_left +
            (is_next ? 1 : -1) *
                (client_width - parseInt(getComputedStyle(elm).padding)) *
                scroll_percent;

        hasNextPrev(new_scroll_left);
        elm.scrollTo(new_scroll_left, 0);
    }

    //
    function handleScrollTo(is_next = true) {
        handleScrollSmooth(() => handleNextPrev(is_next), elm);
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
