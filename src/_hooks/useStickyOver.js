import { useEffect, useRef, useState } from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';
//
import { observerSticky } from '../_some_function/observerSticky';
import { useMounted } from './useMounted';

//
export function useStickyOver({
    fake_bottom,
    ref_initial_fake_sticky = { current: null },
}) {
    //
    const [scroll_over, setScrollOver] = useState(false);

    //
    const ref_fake_sticky = ref_initial_fake_sticky.current
        ? ref_initial_fake_sticky
        : useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        if (!IS_MOBILE) {
            setScrollOver(
                ref_fake_sticky.current.getBoundingClientRect().bottom <=
                    fake_bottom
            );

            observerSticky({
                fake_elm: ref_fake_sticky.current,
                fake_bottom: fake_bottom,
                callbackNotOver: () => {
                    mounted && setScrollOver(false);
                },
                callbackOver: () => {
                    mounted && setScrollOver(true);
                },
            });
        }
    }, []);

    //
    return {
        scroll_over,
        setScrollOver,

        ref_fake_sticky,
    };
}
