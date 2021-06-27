import { useRef } from 'react';
//
import { useAppearancePosition } from './useAppearancePosition';

//
export function useMouseEnterLeave(
    handle_API_L,
    ref_child_elm,
    ref_parent_elm,
    handleChildWidth = () => 0,
    handleParentBoundingClientRect = function () {
        return {};
    }
) {
    //
    const is_mouse_enter = useRef(false);

    //
    const {
        handleOpen,
        handleClose,

        position_state: mouse_state,
        setPositionState: setMouseState,
    } = useAppearancePosition({
        ref_child_elm: ref_child_elm,
        ref_parent_elm: ref_parent_elm,
        other_state: {
            list: [],
            count: 0,
            is_fetching: false,
        },
        extra_transform_x: 0,
        handleChildWidth: handleChildWidth,
        handleParentBoundingClientRect: handleParentBoundingClientRect,
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
