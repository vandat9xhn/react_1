import { useRef, useState } from 'react';

//
export function useMouseEnterLeave(handle_API_L) {
    const [data_obj, setDataObj] = useState({
        list: [],
        count: 0,
        is_fetching: false,
        open_list: false,
    });
    // 
    const is_mouse_enter = useRef(false)

    //
    async function handleMouseEnter() {
        is_mouse_enter.current = true
        if (!data_obj.list.length) {
            setDataObj(data_obj => ({
                ...data_obj,
                is_fetching: true,
            }));
            // 
            const [data, count] = await handle_API_L();
            if (is_mouse_enter.current) {
                setDataObj(data_obj => ({
                    ...data_obj,
                    list: data,
                    count: count,
                    is_fetching: false,
                    open_list: true,

                }))
            } else {
                setDataObj(data_obj => ({
                    ...data_obj,
                    is_fetching: false,
                    open_list: false,
                }))
            }
        } else {
            setDataObj({ ...data_obj, open_list: true });
        }
    }

    //
    function handleMouseOut() {
        is_mouse_enter.current = false
        setDataObj(data_obj => ({
            ...data_obj,
            is_fetching: false,
            open_list: false,
        }));
    }

    //
    return [data_obj, handleMouseEnter, handleMouseOut];
}
