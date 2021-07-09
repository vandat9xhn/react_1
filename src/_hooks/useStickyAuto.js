import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from './useMounted';

//
const header_head = 56;

//
export function useStickyAuto({ ref_main_elm, ref_preview_elm, ref_fake_elm }) {
    //
    const ref_fetched = useRef(false);

    const more_height = useRef(0);
    const ref_scroll_y = useRef(0);
    const is_last_scroll_down = useRef(true);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        ref_preview_elm.current.style.bottom = '0px';
        ref_fake_elm.current.style.height = '0px';

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    //
    function handleScroll() {
        if (
            innerWidth < 900 ||
            !ref_fetched.current ||
            more_height.current <= 0 ||
            !mounted
        ) {
            ref_fake_elm.current.style.height = '0px';

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
            if (!is_last_scroll_down.current) {
                if (at_last_top) {
                    ref_fake_elm.current.style.height = '0px';
                } else if (at_temp_top) {
                    ref_fake_elm.current.style.height =
                        hide_height_main + header_head + 'px';
                }
            }

            ref_preview_elm.current.style.top = -more_height.current + 'px';
            ref_preview_elm.current.style.bottom = 'auto';

            is_last_scroll_down.current = true;
        }

        //  scroll up
        else {
            if (at_bottom && is_last_scroll_down.current) {
                ref_fake_elm.current.style.height =
                    hide_height_main - more_height.current + 'px';
            }

            ref_preview_elm.current.style.top = 'auto';
            ref_preview_elm.current.style.bottom =
                -more_height.current - header_head + 'px';

            is_last_scroll_down.current = false;
        }

        ref_scroll_y.current = pageYOffset;
    }

    //
    function changeMoreHeight() {
        const { height } = ref_preview_elm.current.getBoundingClientRect();
        more_height.current =
            height - innerHeight >= 0 ? height - innerHeight : 0;
    }

    //
    function handleResize() {
        changeMoreHeight();
        handleScroll();
    }

    //
    function handleStartStickyAuto() {
        ref_fetched.current = true;
        changeMoreHeight();
    }

    //
    return { handleStartStickyAuto };
}
