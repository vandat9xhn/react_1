import React from 'react';
import PropTypes from 'prop-types';

//
ChatScreenFloor.propTypes = {};

//
function ChatScreenFloor({ ChatFloorComponent, ...rest_props }) {
    //
    return <ChatFloorComponent {...rest_props} />;
}

export default ChatScreenFloor;
