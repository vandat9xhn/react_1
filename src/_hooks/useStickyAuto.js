import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { HEADER_HEAD } from '../_constant/Constant';

//
const header_head = HEADER_HEAD + 10;
const isInnerWidthOk = () => innerWidth > 900;
const isHrefOk = (sticky_location) =>
    location.href.search(sticky_location) >= 0;

//
export function useStickyAuto({ sticky_location = /./ }) {
    //
    const ref_main_elm = useRef(null);
    const ref_fake_elm = useRef(null);
    const ref_preview_elm = useRef(null);

    const ref_is_innerWidth_ok = useRef(isInnerWidthOk());
    const ref_is_href_ok = useRef(isHrefOk(sticky_location));

    const ref_more_height = useRef(0);
    const ref_scroll_y = useRef(0);
    const ref_is_last_scroll_down = useRef(true);

    //
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        ref_is_href_ok.current = isHrefOk(sticky_location);

        setTimeout(() => {
            if (ref_is_href_ok.current) {
                ref_more_height.current = getNewMoreHeight();
                document.getElementsByTagName('html')[0].scrollTop += 1;
            }
        }, 0);
    }, [location.href]);

    //
    function handleScroll() {
        if (
            !ref_is_innerWidth_ok.current ||
            !ref_is_href_ok.current ||
            ref_more_height.current <= 0
        ) {
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
    function getNewMoreHeight() {
        const { height } = ref_preview_elm.current.getBoundingClientRect();

        return height - innerHeight > 0 ? height - innerHeight : 0;
    }

    //
    function handleResize() {
        if (!isHrefOk(sticky_location)) {
            return;
        }

        const new_innerWidth_ok = isInnerWidthOk();

        if (!new_innerWidth_ok) {
            ref_fake_elm.current.style.height = '0px';
            ref_preview_elm.current.style.position = 'static';

            if (ref_is_innerWidth_ok.current) {
                ref_scroll_y.current +=
                    ref_preview_elm.current.getBoundingClientRect().height;
            }
        } else {
            if (!ref_is_innerWidth_ok.current) {
                ref_scroll_y.current -=
                    ref_preview_elm.current.getBoundingClientRect().height;
            }
        }

        document.getElementsByTagName('html')[0].scrollTop =
            ref_scroll_y.current;
        ref_is_innerWidth_ok.current = new_innerWidth_ok;

        if (!new_innerWidth_ok) {
            return;
        }

        const new_more_height = getNewMoreHeight();
        ref_preview_elm.current.style.position = '';

        if (ref_more_height.current > 0 && new_more_height <= 0) {
            ref_preview_elm.current.style.top = `${header_head}px`;
            ref_preview_elm.current.style.bottom = 'auto';
            ref_fake_elm.current.style.height = '0px';
        }

        ref_more_height.current = new_more_height;
        ref_scroll_y.current = pageYOffset;

        document.getElementsByTagName('html')[0].scrollTop += 1;
    }

    //
    function handleStartStickyAuto() {
        ref_more_height.current = getNewMoreHeight();
        window.addEventListener('scroll', handleScroll);
    }

    //
    return {
        handleStartStickyAuto,
        ref_main_elm,
        ref_preview_elm,
        ref_fake_elm,
    };
}
