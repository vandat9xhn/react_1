import { useEffect, useLayoutEffect, useRef } from 'react';
//
import { observerDisplay } from '../_some_function/observerDisplay';
//
import { useWaitingLastAction } from './useWaitingLastAction';

//
export function useSaveScroll({ ref_elm }) {
    //
    const scroll_pos = useRef(0);

    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 100,
        callback: handleScroll,
    });

    //
    useEffect(() => {
        ref_elm.current.onscroll = handleWaitingLastAction;

        console.log(1);

        return () => {
            ref_elm.current.onscroll = null;
        };
    }, []);

    useLayoutEffect(() => {
        observerDisplay({
            elm: ref_elm.current,
            callback: scrollToLastPosition,
        });
    }, []);

    //
    function handleScroll() {
        scroll_pos.current = ref_elm.current.scrollTop;
    }

    //
    function scrollToLastPosition() {
        ref_elm.current.scrollTop = scroll_pos.current;
    }

    return {
        scroll_pos,
    };
}
