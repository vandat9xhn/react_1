//
export const ScrollDownBool = (
    elm,
    posScroll,
    is_fetching,
    max_page,
    thresh_hold = 0.7
) => {
    if (elm.scrollTop <= posScroll) {
        return false;
    }
    if (is_fetching) {
        return false;
    }
    if (max_page) {
        return false;
    }
    if (
        elm.scrollTop <=
        thresh_hold * (elm.scrollHeight - elm.clientHeight)
    ) {
        return false;
    }

    return true
};

//
export const WindowScrollDownBool = (
    posScroll = 0,
    is_fetching = true,
    max_page = true,
    thresh_hold = 0.9
) => {
    //
    if (posScroll >= window.pageYOffset) {
        return false;
    }
    if (is_fetching) {
        return false;
    }
    if (max_page) {
        return false;
    }
    if (
        window.pageYOffset <
        thresh_hold * (document.body.offsetHeight - window.innerHeight)
    ) {
        return false;
    }
    //
    return true;
};
