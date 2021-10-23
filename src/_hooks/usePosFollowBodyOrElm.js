import { useEffect, useRef } from 'react';
//
import { HEADER_HEAD } from '../_constant/Constant';
import { html_elm, initial_div_elm } from '../_initial/htm_elm/html_elm';
//
import { getPosAtBody } from '../_some_function/getPosAtBody';
import { getPosAtElm } from '../_some_function/getPosAtElm';
//
import { useWaitingResize } from './useWaitingResize';
import { useForceUpdate } from './UseForceUpdate';

//
export function usePosFollowBodyOrElm({
    getScrollElm = () => html_elm,
    ref_base_elm = { current: initial_div_elm },
    getChildWidth = () => 0,
    header_head = HEADER_HEAD,

    use_time_trans = false,
    time_trans = 200,

    is_at_body = true,
    use_scroll = true,
    use_resize = true,
}) {
    //
    const ref_is_open = useRef(false);
    const ref_starting = useRef(false);
    const ref_closing = useRef(false);
    const ref_pos = useRef({
        left_or_right: 'left',
        position_x: '0px',
        transform_y: '0px',
        transform_x: '0px',

        top_or_bottom: 'top',
        position_y: '0px',
        max_height: 0,
    });

    const ref_has_add_scroll = useRef(false);

    //
    const forceUpdate = useForceUpdate();

    //
    use_resize && useWaitingResize({ handleResize: calculatePos });

    //
    use_scroll &&
        useEffect(() => {
            if (ref_is_open.current) {
                const scroll_elm = getScrollElm();

                if (!ref_has_add_scroll.current && scroll_elm) {
                    ref_has_add_scroll.current = true;
                    scroll_elm.addEventListener('scroll', calculatePos);

                    return () => {
                        scroll_elm.removeEventListener('scroll', calculatePos);
                    };
                }
            }
        }, [ref_is_open.current]);

    // -------

    //
    function changePos() {
        if (!ref_base_elm.current) {
            return
        }
        
        const getPost = is_at_body ? getPosAtBody : getPosAtElm;

        ref_pos.current = getPost({
            child_width: getChildWidth(),
            base_elm: ref_base_elm.current,
            header_head: header_head,
        });
    }

    //
    async function handleOpen({ callbackOpen = forceUpdate }) {
        ref_starting.current = true;
        ref_is_open.current = true;
        forceUpdate();

        setTimeout(() => {
            ref_starting.current = false;
            changePos();
            callbackOpen();
        }, 0);
    }

    //
    function handleClose({ callbackClose = forceUpdate }) {
        ref_closing.current = true;
        ref_is_open.current = false;
        ref_starting.current = false;

        if (use_time_trans) {
            forceUpdate();

            setTimeout(() => {
                ref_closing.current = false;
                callbackClose();
            }, time_trans);
        } else {
            callbackClose();
        }
    }

    //
    function calculatePos() {
        if (!ref_is_open.current) {
            return;
        }

        changePos();
        forceUpdate();
    }

    //
    return {
        ref_is_open,
        ref_starting,
        ref_closing,
        ref_pos,

        handleOpen,
        handleClose,
        calculatePos,
    };
}
