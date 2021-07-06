import React from 'react';
import PropTypes from 'prop-types';
//
import './NoticeDiv.scss';

//
NoticeDiv.propTypes = {
    children: PropTypes.element,
};

//
function NoticeDiv({ children }) {
    return <div className="NoticeDiv">{children}</div>;
}

export default NoticeDiv;
