import { initial_div_elm } from '../_initial/htm_elm/html_elm';

//
export function getScrollToX({
    scroll_elm = initial_div_elm,
    item_elm = initial_div_elm,
}) {
    if (!item_elm || !scroll_elm) {
        return 0;
    }

    const client_width = scroll_elm.clientWidth;
    const { width, marginLeft, marginRight } = getComputedStyle(item_elm);
    const item_width =
        parseFloat(width) + parseFloat(marginLeft) + parseFloat(marginRight);

    return Math.floor(client_width / item_width) * item_width;
}
