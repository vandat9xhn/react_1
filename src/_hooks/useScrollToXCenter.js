import { useEffect, useRef } from 'react';
//
import { waitingToDoLast } from '../_some_function/waitingToDoLast';
//
import { useScrollToX } from './useScrollToX';

//
export function useScrollToXCenter({ count_item_center = 1 }) {
    //
    const ref_scroll_elm = useRef(null);
    const ref_first_item = useRef(null);

    const ref_side_width = useRef(0);
    const ref_item_width = useRef(null);

    const ref_interval = useRef(null);

    //
    const { is_has_next, is_has_prev, handleNext, handlePrev, hasNextPrev } =
        useScrollToX({
            ref_scroll_elm: ref_scroll_elm,
            custom_scroll_x: true,
            getCustomScrollX: getCustomScrollX,
        });

    //
    useEffect(() => {
        window.addEventListener('resize', changeItemSideWidth);

        return () => {
            window.removeEventListener('resize', changeItemSideWidth);
        };
    }, []);

    // ------

    //
    function changeItemSideWidth() {
        waitingToDoLast({
            ref_interval: ref_interval,
            callback: () => {
                ref_item_width.current =
                    ref_first_item.current.getBoundingClientRect().width;

                ref_side_width.current =
                    (ref_scroll_elm.current.clientWidth -
                        ref_item_width.current * count_item_center) /
                    2;
            },
        });
    }

    //
    function getCustomScrollX(is_next = true) {
        if ((!is_has_prev && is_next) || (!is_has_next && !is_next)) {
            return (
                ref_item_width.current * count_item_center -
                ref_side_width.current
            );
        }

        return ref_item_width.current * count_item_center;
    }

    // ----
    return {
        ref_scroll_elm,
        ref_first_item,

        is_has_next,
        is_has_prev,

        changeItemSideWidth,

        handleNext,
        handlePrev,
        hasNextPrev,
    };
}
