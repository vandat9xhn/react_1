import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { HEADER_HEAD } from '../_constant/Constant';

//
import { useMounted } from './useMounted';

//
const header_head = HEADER_HEAD + 10;

const isInnerWidthOk = () => innerWidth > 900;
const isHrefOk = (sticky_location) =>
    location.href.search(sticky_location) >= 0;

function getScrollTop() {
    return document.getElementsByTagName('html')[0].scrollTop;
}

function handleScrollTo(new_pos = 0) {
    document.getElementsByTagName('html')[0].scrollTop = new_pos;
}

//
export function useStickyAuto({ sticky_location = /./ }) {
    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);
    const ref_preview_elm = useRef(null);

    const ref_is_innerWidth_ok = useRef(isInnerWidthOk());
    const ref_is_href_ok = useRef(isHrefOk(sticky_location));
    const has_event_scroll = useRef(false);

    const ref_more_height = useRef(0);
    const ref_scroll_y = useRef(0);
    const ref_is_last_scroll_down = useRef(true);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.onscroll = null;
        };
    }, []);

    useEffect(() => {
        handleChangeHref();
    }, [location.href]);

    /* --------- COMMON --------- */

    //
    function getNewMoreHeight() {
        const { height } = ref_preview_elm.current.getBoundingClientRect();

        return height - innerHeight > 0 ? height - innerHeight : 0;
    }

    //
    function handleRefWhenMoreHeightNotOk() {
        ref_preview_elm.current.style.position = 'sticky';
        ref_preview_elm.current.style.top = `${header_head}px`;
        ref_fake_elm.current.style.height = '0px';
    }

    //
    function handleRefWhenInnerWidthNotOk() {
        ref_preview_elm.current.style.position = 'static';
        ref_fake_elm.current.style.height = '0px';
        ref_is_innerWidth_ok.current = false;
    }

    //
    function handleRemoveScroll() {
        if (has_event_scroll.current) {
            window.onscroll = null;
            has_event_scroll.current = false;
        }
    }

    //
    function handleAddScroll() {
        if (!has_event_scroll.current) {
            window.onscroll = handleScroll;
            has_event_scroll.current = true;

            setTimeout(() => {
                handleScrollTo(getScrollTop() + 1);
            }, 0);
        }
    }

    /* ------------ */

    //
    function handleInnerWidthToOk() {
        ref_more_height.current = getNewMoreHeight();
        ref_is_innerWidth_ok.current = true;

        if (ref_more_height.current > 0) {
            ref_preview_elm.current.style.position = 'sticky';
            handleAddScroll();
        } else {
            handleRefWhenMoreHeightNotOk();
        }

        ref_scroll_y.current =
            pageYOffset -
            296 -
            ref_preview_elm.current.getBoundingClientRect().height;
    }

    //
    function handleInnerWidthToNotOk() {
        handleRemoveScroll();
        handleRefWhenInnerWidthNotOk();
        ref_scroll_y.current =
            pageYOffset +
            16 +
            ref_preview_elm.current.getBoundingClientRect().height;
    }

    /* ---------- */

    //
    function handleScroll() {
        if (!ref_preview_elm.current) {
            return;
        }

        const { top, bottom } = ref_preview_elm.current.getBoundingClientRect();
        const hide_height_main =
            -ref_main_elm.current.getBoundingClientRect().top;

        const is_scroll_down = pageYOffset - ref_scroll_y.current > 0;
        const at_bottom = bottom <= innerHeight;
        const at_last_top = hide_height_main <= header_head;
        const at_temp_top = top >= 0;

        // scroll down
        if (is_scroll_down) {
            if (!ref_is_last_scroll_down.current) {
                if (at_last_top) {
                    ref_fake_elm.current.style.height = '0px';
                } else if (at_temp_top) {
                    ref_fake_elm.current.style.height =
                        hide_height_main + header_head + 'px';
                }
            }

            ref_preview_elm.current.style.top = -ref_more_height.current + 'px';
            ref_preview_elm.current.style.bottom = 'auto';

            ref_is_last_scroll_down.current = true;
        }

        //  scroll up
        else {
            if (ref_is_last_scroll_down.current) {
                if (at_bottom) {
                    ref_fake_elm.current.style.height =
                        hide_height_main - ref_more_height.current + 'px';
                }
            }

            ref_preview_elm.current.style.top = 'auto';
            ref_preview_elm.current.style.bottom =
                -ref_more_height.current - header_head + 'px';

            ref_is_last_scroll_down.current = false;
        }

        ref_scroll_y.current = pageYOffset;
    }

    //
    function handleResize() {
        if (!ref_is_href_ok.current) {
            return;
        }

        const new_innerWidth_ok = isInnerWidthOk();

        if (new_innerWidth_ok) {
            if (!ref_is_innerWidth_ok.current) {
                handleInnerWidthToOk();
                handleScrollTo(ref_scroll_y.current);
            } else {
                ref_more_height.current = getNewMoreHeight();

                if (ref_more_height.current <= 0) {
                    handleRefWhenMoreHeightNotOk();
                    handleRemoveScroll();
                } else {
                    handleAddScroll()
                }
            }
        } else if (!new_innerWidth_ok && ref_is_innerWidth_ok.current) {
            handleInnerWidthToNotOk();
            handleScrollTo(ref_scroll_y.current);
        }
    }

    //
    function handleChangeHref() {
        setTimeout(() => {
            if (!mounted) {
                return;
            }

            ref_is_href_ok.current = isHrefOk(sticky_location);
            ref_is_innerWidth_ok.current = isInnerWidthOk();
            ref_more_height.current = getNewMoreHeight();

            if (ref_is_innerWidth_ok.current) {
                if (ref_more_height.current <= 0) {
                    handleRefWhenMoreHeightNotOk();
                }
            } else {
                handleRefWhenInnerWidthNotOk();
            }

            if (
                ref_more_height.current > 0 &&
                ref_is_href_ok.current &&
                ref_is_innerWidth_ok.current
            ) {
                handleAddScroll();
            } else {
                handleRemoveScroll();
            }
        }, 0);
    }

    //
    function handleStartStickyAuto() {
        ref_more_height.current = getNewMoreHeight();
    }

    //
    return {
        handleStartStickyAuto,
        ref_main_elm,
        ref_preview_elm,
        ref_fake_elm,
    };
}
