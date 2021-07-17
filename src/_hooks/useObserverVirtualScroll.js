import { useEffect } from 'react';
//
import { observeVirtualScroll } from '../_some_function/observeVirtualScroll';

//
export function useObserverVirtualScroll(
    ref_observer_elm = { current: null },
    ref_contain_elm = { current: null },
    rootMargin_y
) {
    //
    useEffect(() => {
        observeVirtualScroll(
            ref_observer_elm.current,
            handleIntersecting,
            rootMargin_y
        );
    }, []);

    //
    function handleIntersecting(new_is_intersecting = false) {
        if (
            !ref_observer_elm.current ||
            document.getElementsByTagName('body')[0].dataset.countHidden
        ) {
            return;
        }

        ref_observer_elm.current.style.height = new_is_intersecting
            ? 'auto'
            : ref_observer_elm.current.offsetHeight + 'px';

        ref_contain_elm.current.style.display = new_is_intersecting
            ? 'block'
            : 'none';
    }
}
