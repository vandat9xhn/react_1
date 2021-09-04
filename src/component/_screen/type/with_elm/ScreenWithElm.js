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
    return <React.Fragment>{elm}</React.Fragment>;
}

export default ScreenWithElm;
