import { useEffect, useRef, useState } from 'react';
//
import { useWaitingLastAction } from './useWaitingLastAction';
//
import { definePositionXY } from '../_some_function/definePositionXY';

//
export function usePositionXY({
    ref_child_elm,
    ref_btn_elm,
    other_state = {},
}) {
    //
    const [position_state, setPositionState] = useState({
        ...other_state,
        is_open: false,
        position_x: 'center',
        transform_x: 0,
        position_y: 'bottom',
        max_height: 0,
    });

    const { is_open } = position_state;

    //
    const ref_is_open = useRef(false);

    //
    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 200,
        callback: handleResize,
    });

    //
    useEffect(() => {
        window.addEventListener('resize', handleWaitingLastAction);

        return () => {
            window.removeEventListener('resize', handleWaitingLastAction);
        };
    }, []);

    /* --------------------- */

    //
    function handleOpen({
        self_handle = true,
        is_resize = false,
        handleCallbackOpen = () => {},
    }) {
        if (is_open && !is_resize) {
            return;
        }

        const data_define_state = definePositionXY({
            child_width: ref_child_elm.current.getBoundingClientRect().width,
            ref_btn_elm: ref_btn_elm,
        });

        ref_is_open.current = true;

        if (self_handle) {
            setPositionState((position_state) => ({
                ...position_state,
                is_open: is_resize ? position_state.is_open : true,
                ...data_define_state,
            }));

            return;
        }

        handleCallbackOpen({
            is_open: true,
            ...data_define_state,
        });
    }

    //
    function handleClose(self_handle = true, handleCallbackClose = () => {}) {
        ref_is_open.current = false;

        if (!is_open) {
            return;
        }

        if (self_handle) {
            setPositionState((position_state) => ({
                ...position_state,
                is_open: false,
            }));

            return;
        }

        handleCallbackClose();
    }

    //
    function handleResize() {
        if (!ref_is_open.current) {
            return;
        }

        handleOpen({ is_resize: true });
    }

    return {
        handleOpen,
        handleClose,

        position_state,
        setPositionState,
    };
}
