//
export const funcHandleBeforeOpen = (context, scroll_elm) => {
    if (scroll_elm) {
        context.start_scroll_x = scroll_elm.scrollLeft;
        context.start_scroll_y = scroll_elm.scrollTop;
    }
};

//
export const funcHandleScrollDiff = (context, e) => {
    if (Math.abs(context.start_scroll_y - e.target.scrollTop) > 100) {
        context.closeDivFix();

        return;
    }

    context.setState({
        scroll_x_diff: context.start_scroll_x - e.target.scrollLeft,
        scroll_y_diff: context.start_scroll_y - e.target.scrollTop,
    });
};
