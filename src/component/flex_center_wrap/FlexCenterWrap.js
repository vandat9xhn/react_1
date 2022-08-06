import React from "react";
import PropTypes from "prop-types";

import { useCenterWrap } from "../../_hooks/useCenterWrap";

//
function FlexCenterWrap({
    ref_parent,
    children,
    more_item_width,
    more_parent_width,
}) {
    //
    const { padding_x } = useCenterWrap({
        getItemWidth,
        getParentWidth,
    });

    // ---

    function getItemWidth() {
        return (
            ref_parent.current
                .getElementsByClassName("FlexCenterWrap_item")[0]
                .getBoundingClientRect().width + more_item_width
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
