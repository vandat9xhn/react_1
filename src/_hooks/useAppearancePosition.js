import { useEffect, useRef, useState } from 'react';
//
import { defineAppearancePosition } from '../_some_function/defineAppearancePosition';
import { useWaitingLastAction } from './useWaitingLastAction';

//
export function useAppearancePosition({
    ref_child_elm,
    ref_parent_elm,
    handleChildWidth = () => 0,
    handleParentBoundingClientRect = function () {
        return {};
    },
    extra_transform_x = 0,
    other_state = {},
}) {
    //
    const [position_state, setPositionState] = useState({
        ...other_state,
        is_open: false,
        transform_x: 0,
        position_y: 'bottom',
        max_height: 0,
    });

    const { is_open, transform_x, position_y, max_height } = position_state;

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
    function getChildWidth() {
        if (ref_child_elm) {
            return ref_child_elm.current.getBoundingClientRect().width;
        }

        return handleChildWidth();
    }

    //
    function getParentBoundingClientRect() {
        if (ref_parent_elm) {
            return ref_parent_elm.current.getBoundingClientRect();
        }

        return handleParentBoundingClientRect();
    }

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

        const child_width = getChildWidth();
        const {
            x: parent_x,
            y: parent_y,
            width: parent_width,
            height: parent_height,
        } = getParentBoundingClientRect();

        const data_define_state = defineAppearancePosition(
            child_width,
            parent_x,
            parent_width,
            parent_y,
            parent_height,
            extra_transform_x
        );

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
        is_open,
        transform_x,
        position_y,
        max_height,

        handleOpen,
        handleClose,

        position_state,
        setPositionState,
    };
}
