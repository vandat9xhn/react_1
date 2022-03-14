import React from 'react';
import { Tooltip as _Tooltip } from 'react-tooltip-ts';
import PropTypes from 'prop-types';

//
Tooltip.propTypes = {
    ref_elm: PropTypes.object,
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    pos: PropTypes.string,
    distance: PropTypes.number,

    z_index: PropTypes.number,
    class_contain: PropTypes.string,
};

Tooltip.defaultProps = {
    class_contain:
        'padding-x-10px padding-y-6px brs-8px bg-shadow-8 font-13px text-white pointer-events-none',
};

//
function Tooltip({
    ref_elm,
    ref_scroll_elm,
    use_scroll,

    children,
    pos,
    distance,
    z_index,
    class_contain,
    hold_time,
}) {
    //
    return (
        <_Tooltip
            ref_elm={ref_elm}
            ref_scroll_elm={ref_scroll_elm}
            use_scroll={use_scroll}
            //
            pos={pos}
            distance={distance}
            z_index={z_index}
            hold_time={hold_time}
        >
            <div className={class_contain}>{children}</div>
        </_Tooltip>
    );
}

export default Tooltip;
