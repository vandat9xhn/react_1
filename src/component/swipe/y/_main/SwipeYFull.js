import React from "react";
import PropTypes from "prop-types";

import { IS_MOBILE } from "../../../../_constant/Constant";

import { useSwipeYFull } from "../../_hooks/useSwipeYFull";

import "./SwipeYFull.scss";

//
SwipeYFull.propTypes = {};

//
function SwipeYFull({
    initial_ref_main,
    needed_change_y,
    swipe_up,

    className,
    children,

    handleChangeIx,
    callbackTouchMove,
}) {
    //
    const { ref_main, handleStart } = useSwipeYFull({
        initial_ref_main: initial_ref_main,
        needed_change_y: needed_change_y,
        swipe_up: swipe_up,

        handleChangeIx: handleChangeIx,
        callbackTouchMove: callbackTouchMove,
    });

    //
    return (
        <div
            ref={ref_main}
            className={`SwipeYFull wh-100 touch-action-none overflow-y-auto scroll-width-0 ${className}`}
            onTouchStart={handleStart}
            onMouseDown={IS_MOBILE ? undefined : handleStart}
        >
            {children}
        </div>
    );
}

export default SwipeYFull;
