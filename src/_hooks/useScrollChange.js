import { useEffect } from 'react';

//
export function useScrollChange({
    scroll_elm = document.getElementsByTagName('div')[0],
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
            scroll_top: scroll_elm.scrollTop,
            scroll_left: scroll_elm.scrollLeft,
        });
    }
}
