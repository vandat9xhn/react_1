import { useEffect } from 'react';
import { IS_MOBILE } from '../_constant/Constant';
//
import { initial_div_elm } from '../_initial/htm_elm/html_elm';
//
import { useDataShowMore } from './useDataShowMore';
import { useScrollToXCenter } from './useScrollToXCenter';

//
export function useCardsRowCenter({
    count_item_center = 1,

    handle_API_L = () => new Promise(),
    getItemElm = () => initial_div_elm,
    handleFetched = () => {},
}) {
    //
    const data_scroll_x = useScrollToXCenter({
        count_item_center: count_item_center,
    });

    const { ref_scroll_elm, ref_first_item, changeItemSideWidth, hasNextPrev } =
        data_scroll_x;

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

        if (!IS_MOBILE) {
            hasNextPrev();
            ref_first_item.current = !ref_scroll_elm.current
                ? null
                : getItemElm();
            changeItemSideWidth();
        }
    }

    // ------

    return {
        ...data_scroll_x,
        ...data_show_more,
    };
}
