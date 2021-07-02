import { useRef, useState } from 'react';
import { usePositionXY } from './usePositionXY';

//
export function useMouseEnterLeave({
    handle_API_L,
    
    handleOpenDivFixLoading,
    handleOpenDivFixPeople,
    handleCloseDivFixPeople,
}) {
    //
    const [mouse_state, setMouseState] = useState({
        list: [],
        count: 0,
    });

    // const { list, count } = mouse_state;

    //
    const is_mouse_enter = useRef(false);

    //
    async function handleMouseenter() {
        is_mouse_enter.current = true;

        if (mouse_state.list.length) {
            handleOpenDivFixPeople();

            return;
        }

        handleOpenDivFixLoading();

        const [data, new_count] = await handle_API_L();

        if (is_mouse_enter.current) {
            mouse_state.list = data;
            mouse_state.count = new_count;

            handleOpenDivFixPeople();

            return;
        }
    }

    //
    function handleMouseleave() {
        is_mouse_enter.current = false;

        handleCloseDivFixPeople();
    }

    //
    return { mouse_state, handleMouseenter, handleMouseleave };
}

//
export function useMouseEnterLeaveNormal(
    handle_API_L,
    ref_child_elm,
    ref_btn_elm,
) {
    //
    const is_mouse_enter = useRef(false);

    //
    const {
        handleOpen,
        handleClose,

        position_state: mouse_state,
        setPositionState: setMouseState,
    } = usePositionXY({
        ref_child_elm: ref_child_elm,
        ref_btn_elm: ref_btn_elm,
        other_state: {
            list: [],
            count: 0,
            is_fetching: false,
        },
        extra_transform_x: 0,
    });

    //
    async function onMouseenter(callback_state = {}) {
        is_mouse_enter.current = true;

        if (mouse_state.list.length) {
            setMouseState((mouse_state) => ({
                ...mouse_state,
                ...callback_state,
            }));

            return;
        }

        setMouseState((mouse_state) => ({
            ...mouse_state,
            ...callback_state,
            is_fetching: true,
        }));

        const [data, new_count] = await handle_API_L();

        if (is_mouse_enter.current) {
            setMouseState((mouse_state) => ({
                ...mouse_state,
                list: data,
                count: new_count,
                is_fetching: false,
                // is_open: true,
            }));

            return;
        }

        handleMouseleave()
    }

    //
    function onMouseleave() {
        is_mouse_enter.current = false;

        setMouseState((mouse_state) => ({
            ...mouse_state,
            is_fetching: false,
            is_open: false,
        }));
    }

    //
    function handleMouseenter() {
        handleOpen({
            self_handle: false,
            handleCallbackOpen: (callback_state) =>
                onMouseenter(callback_state),
        });
    }

    //
    function handleMouseleave() {
        handleClose(false, onMouseleave);
    }

    //
    return { mouse_state, handleMouseenter, handleMouseleave };
}
