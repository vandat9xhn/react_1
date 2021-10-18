import { useRef, useState } from 'react';

//
export function useDisplayBlockToNone({
    trans_time = 250,
    initial_display_none = true,
}) {
    //
    const [opacity_0, setOpacity0] = useState(initial_display_none);
    const [display_none, setDisplayNone] = useState(initial_display_none);

    //
    const ref_changing = useRef(false);

    // -----

    //
    function changeBlockToNone() {
        setOpacity0(true);

        setTimeout(() => {
            setDisplayNone(true);
            ref_changing.current = false;
        }, trans_time);
    }

    //
    function changeNoneToBlock() {
        setDisplayNone(false);
        
        setTimeout(() => {
            setOpacity0(false);
            ref_changing.current = false;
        }, 0);
        //
    }

    function toggleBlockNone() {
        if (ref_changing.current) {
            return;
        }

        ref_changing.current = true;

        if (opacity_0) {
            changeNoneToBlock();
        } else {
            changeBlockToNone();
        }
    }

    // ----

    return {
        opacity_0,
        display_none,

        changeNoneToBlock,
        changeBlockToNone,
        toggleBlockNone,
    };
}
