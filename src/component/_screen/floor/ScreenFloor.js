import React from 'react';
import PropTypes from 'prop-types';

//
ScreenFloor.propTypes = {};

//
function ScreenFloor({ FloorComponent, ...props }) {
    //
    return <FloorComponent {...props} />;
}

export default ScreenFloor;
