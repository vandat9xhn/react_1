//
export const ScrollDown = (
    e,
    posScroll,
    is_fetching,
    max_page,
    thresh_hold = 0.7
) => {
    if (e.target.scrollTop <= posScroll) {
        return false;
    }
    if (is_fetching) {
        return false;
    }
    if (max_page) {
        return false;
    }
    if (
        e.target.scrollTop <=
        thresh_hold * (e.target.scrollHeight - e.target.clientHeight)
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
