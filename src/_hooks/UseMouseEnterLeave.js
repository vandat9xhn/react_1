import { useRef } from 'react';
// 
import { useForceUpdate } from './UseForceUpdate';

//
export function useMouseEnterLeave({
    use_closing = true,
    time_closing = 200,

    handle_API_L,
    handleLoading,
    handleOpen,
    handleClose,
}) {
    //
    const is_mouse_enter = useRef(false);

    const ref_arr = useRef([]);
    const ref_count = useRef(0);
    const ref_fetched = useRef(false);
    const ref_fetching = useRef(false);
    const ref_closing = useRef(false);

    // 
    const forceUpdate = useForceUpdate()

    // -----

    //
    async function handleMouseenter() {
        is_mouse_enter.current = true;

        if (ref_fetched.current) {
            handleOpen();

            return;
        }

        ref_fetching.current = true;
        handleLoading();

        const { data, count: new_count } = await handle_API_L();

        if (is_mouse_enter.current) {
            ref_arr.current = data;
            ref_count.current = new_count;
            ref_fetched.current = true;
            ref_fetching.current = false;
            handleOpen();

            return;
        }
    }

    //
    function handleMouseleave() {
        ref_closing.current = true;
        is_mouse_enter.current = false;
        ref_fetching.current = false;

        if (use_closing) {
            forceUpdate();

            setTimeout(() => {
                ref_closing.current = false;
                handleClose();
            }, time_closing);
        } else {
            handleClose();
        }
    }

    //
    return {
        ref_arr,
        ref_count,
        ref_fetching,
        ref_closing,

        handleMouseenter,
        handleMouseleave,
    };
}
