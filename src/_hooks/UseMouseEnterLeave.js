import { useRef, useState } from 'react';

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
