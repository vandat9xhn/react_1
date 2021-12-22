import { handleScrollSmooth } from './handleScrollSmooth';

//
export function scrollItemToCenter({
    scroll_elm,
    item_elm,
    scroll_smooth = true,
}) {
    const { left, right } = scroll_elm.getBoundingClientRect();
    const { left: left_item, right: right_item } =
        item_elm.getBoundingClientRect();
    const scroll_x = (left_item + right_item) / 2 - (right + left) / 2;

    scroll_smooth
        ? handleScrollSmooth(() => {
              scroll_elm.scrollTo(scroll_x, 0);
          }, scroll_elm)
        : scroll_elm.scrollTo(scroll_x, 0);
}
