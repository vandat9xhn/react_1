//
export const ScrollDownBool = (
    elm,
    posScroll,
    is_fetching,
    max_page,
    thresh_hold = 0.7,
    more_bottom = 0
) => {
    if (
        is_fetching ||
        max_page ||
        elm.scrollTop <= posScroll ||
        elm.scrollTop <=
            thresh_hold * (elm.scrollHeight - elm.clientHeight) - more_bottom
    ) {
        return false;
    }

    return true;
};

//
export const WindowScrollDownBool = (
    posScroll = 0,
    is_fetching = true,
    max_page = true,
    thresh_hold = 0.9,
    more_bottom = 0
) => {
    if (
        is_fetching ||
        max_page ||
        pageYOffset <= posScroll ||
        pageYOffset <=
            thresh_hold * (document.body.offsetHeight - innerHeight) -
                more_bottom
    ) {
        return false;
    }

    return true;
};
