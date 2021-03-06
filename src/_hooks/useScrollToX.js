import { useRef, useState } from "react";
//
import { initial_div_elm } from "../_initial/htm_elm/html_elm";
//
import { getScrollToX } from "../_some_function/getScrollToX";
import { handleScrollSmooth } from "../_some_function/handleScrollSmooth";

//
export function useScrollToX({
    ref_scroll_elm = { current: initial_div_elm },
    getItemElm = () => initial_div_elm,

    custom_scroll_x = false,
    getCustomScrollX = (is_next = true) => 0,
}) {
    //
    const [state_obj, setStateObj] = useState({
        is_has_next: false,
        is_has_prev: false,
    });

    const { is_has_next, is_has_prev } = state_obj;

    //
    const ref_item_elm = useRef(null);

    // ----------

    //
    function changeItemElm() {
        ref_item_elm.current = getItemElm();
    }

    //
    function hasNextPrev(
        new_scroll_left = ref_scroll_elm.current
            ? ref_scroll_elm.current.scrollLeft
            : 0
    ) {
        if (
            !ref_scroll_elm.current ||
            ref_scroll_elm.current.scrollWidth == 0
        ) {
            return;
        }

        const client_width = ref_scroll_elm.current.clientWidth;
        const scroll_width = ref_scroll_elm.current.scrollWidth;

        if (scroll_width == client_width) {
            setStateObj({
                is_has_next: false,
                is_has_prev: false,
            });

            return;
        }

        if (new_scroll_left >= scroll_width - client_width) {
            setStateObj({
                is_has_next: false,
                is_has_prev: true,
            });

            return;
        }

        if (new_scroll_left <= 0) {
            setStateObj({
                is_has_next: true,
                is_has_prev: false,
            });

            return;
        }

        setStateObj({
            is_has_next: true,
            is_has_prev: true,
        });
    }

    //
    function handleNextPrev(is_next) {
        if (!ref_item_elm.current) {
            ref_item_elm.current = getItemElm();
        }

        const scroll_to_x = custom_scroll_x
            ? getCustomScrollX(is_next)
            : getScrollToX({
                  scroll_elm: ref_scroll_elm.current,
                  item_elm: ref_item_elm.current,
              });

        const { scrollLeft } = ref_scroll_elm.current;
        const new_scroll_left = scrollLeft + (is_next ? 1 : -1) * scroll_to_x;

        hasNextPrev(new_scroll_left);
        ref_scroll_elm.current.scrollTo(new_scroll_left, 0);
    }

    //
    function handleScrollTo(is_next = true) {
        handleScrollSmooth(
            () => handleNextPrev(is_next),
            ref_scroll_elm.current
        );
    }

    // ----------

    //
    function handleNext() {
        handleScrollTo(true);
    }

    //
    function handlePrev() {
        handleScrollTo(false);
    }

    // ------

    return {
        is_has_next,
        is_has_prev,

        changeItemElm,
        hasNextPrev,

        handleNext,
        handlePrev,
    };
}
