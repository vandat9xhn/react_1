import { useEffect } from 'react';
//
import { initial_div_elm } from '../_initial/htm_elm/html_elm';

//
export function useScrollChange({
    scroll_elm = initial_div_elm || window,
    handleScrollChange = ({ scroll_left = 0, scroll_top = 0 }) => {},
}) {
    //
    useEffect(() => {
        scroll_elm.addEventListener('scroll', handleScroll);

        return () => {
            scroll_elm.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // ----

    //
    function handleScroll() {
        handleScrollChange({
            scroll_top: scroll_elm != window ? scroll_elm.scrollTop : scrollY,
            scroll_left: scroll_elm != window ? scroll_elm.scrollLeft : scrollX,
        });
    }
}
