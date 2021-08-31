import { useEffect, useRef } from 'react';
//
import { IS_MOBILE } from '../_constant/Constant';

//
export function useModelAppear({ has_handle_appear = false }) {
    //
    const ref_pos_elm = useRef(null);
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        onAppear();
    }, []);

    //
    function onAppear() {
        if (!IS_MOBILE) {
            return;
        }

        if (has_handle_appear) {
            handleAppear();
        } else {
            ref_pos_elm.current.style.transform = 'translateY(-100%)';
            ref_pos_elm.current.style.transition = 'transform 200ms ease-in';
        }
    }

    //
    function onClose(callbackClose = () => {}) {
        if (IS_MOBILE) {
            ref_pos_elm.current.style.transform = 'translateY(0%)';
            setTimeout(() => {
                callbackClose();
            }, 200);
        } else {
            callbackClose();
        }
    }

    //
    return {
        ref_pos_elm,
        ref_main_elm,
        onClose,
    };
}
