import React from 'react';
import PropTypes from 'prop-types';

//
export function openScreenWithElm({
    openScreenFloor = () => {},
    elm = <div></div>,
}) {
    openScreenFloor({
        FloorComponent: ScreenWithElm,
        elm: elm,
    });
}

//
ScreenWithElm.propTypes = {
    elm: PropTypes.element,
};

//
function ScreenWithElm({ elm }) {
    //
    return elm;
}

export default ScreenWithElm;
