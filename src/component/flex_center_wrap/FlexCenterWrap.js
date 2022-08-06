import React from "react";
import PropTypes from "prop-types";

import { useCenterWrap } from "../../_hooks/useCenterWrap";

//
function FlexCenterWrap({
    ref_parent,
    children,
    more_item_width = 0,
    more_parent_width = 0,
}) {
    //
    const { padding_x } = useCenterWrap({
        getItemWidth,
        getParentWidth,
    });

    // ---

    function getItemWidth() {
        const item_elm = ref_parent.current.getElementsByClassName(
            "FlexCenterWrap_item"
        )[0];
        const { width, marginLeft, marginRight } = getComputedStyle(item_elm);

        return (
            parseFloat(width) +
            parseFloat(marginLeft) +
            parseFloat(marginRight) +
            more_item_width
        );
    }

    function getParentWidth() {
        return (
            ref_parent.current.getBoundingClientRect().width + more_parent_width
        );
    }

    //
    return (
        <div
            className="FlexCenterWrap"
            style={{ padding: `0px ${padding_x}px` }}
        >
            {children}
        </div>
    );
}

export default FlexCenterWrap;
