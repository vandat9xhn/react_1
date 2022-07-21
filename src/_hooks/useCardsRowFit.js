import { useEffect, useRef } from "react";
import { IS_MOBILE } from "../_constant/Constant";
//
import { initial_div_elm } from "../_initial/htm_elm/html_elm";
//
import { useDataShowMore } from "./useDataShowMore";
import { useScrollToX } from "./useScrollToX";

//
export function useCardsRowFit({
    handle_API_L = () => new Promise(),
    getItemElm = () => initial_div_elm,
    handleFetched = () => {},
}) {
    //
    const ref_scroll_elm = useRef(null);

    //
    const data_scroll_x = useScrollToX({
        ref_scroll_elm: ref_scroll_elm,
        getItemElm: getItemElm,
    });

    const { hasNextPrev } = data_scroll_x;

    //
    const data_show_more = useDataShowMore({
        handle_API_L: handle_API_L,
    });

    const { getData_API } = data_show_more;

    //
    useEffect(() => {
        getData_API_AtFirst();
    }, []);

    // -------

    //
    async function getData_API_AtFirst() {
        await getData_API();

        handleFetched && handleFetched();
        data_scroll_x.changeItemElm();

        if (!IS_MOBILE) {
            hasNextPrev();
        }
    }

    // ----

    return {
        ref_scroll_elm,
        ...data_scroll_x,
        ...data_show_more,
    };
}
