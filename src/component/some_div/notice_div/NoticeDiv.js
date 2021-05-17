import React from 'react';
import PropTypes from 'prop-types';

import './NoticeDiv.scss';
//
NoticeDiv.propTypes = {
    children: PropTypes.element,
};
//
function NoticeDiv(props) {
    return (
        <div className="NoticeDiv">
            {props.children}
        </div>
    );
}

export default NoticeDiv;