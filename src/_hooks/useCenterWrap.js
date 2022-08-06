import { useEffect, useLayoutEffect, useState } from "react";

//
export function useCenterWrap({
    getParentWidth = () => 0,
    getItemWidth = () => 0,
}) {
    //
    const [padding_x, setPaddingX] = useState(0);

    //
    useEffect(() => {
        handleResize();
    }, []);

    //
    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // ----

    //
    function handleResize() {
        const item_width = getItemWidth();
        const parent_width = getParentWidth() + padding_x * 2;
        const _padding_x = (parent_width % item_width) / 2;

        setPaddingX(_padding_x);
    }

    // ---

    return {
        padding_x,
    };
}
