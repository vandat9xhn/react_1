import { useLayoutEffect } from 'react';
//
import { observeVirtualScroll } from '../_some_function/observeVirtualScroll';

//
export function useObserverVirtualScroll({
    ref_observer_elm = { current: null },
    ref_contain_elm = { current: null },
    rootMargin_y,

    has_callback = false,
    callback = () => {},
}) {
    //
    useLayoutEffect(() => {
        observeVirtualScroll(
            ref_observer_elm.current,
            handleIntersecting,
            rootMargin_y
        );
    }, []);

    //
    function handleIntersecting(is_intersecting = false) {
        if (!ref_observer_elm.current) {
            return;
        }

        const height = is_intersecting
            ? 'auto'
            : ref_observer_elm.current.offsetHeight + 'px';
        const display = is_intersecting ? 'block' : 'none';

        if (has_callback) {
            callback(height, display);
        } else {
            ref_observer_elm.current.style.height = height;
            ref_contain_elm.current.style.display = display;
        }
    }
}
