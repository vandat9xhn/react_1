import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//
LearnPortal.propTypes = {};

//
function LearnPortal({ children }) {
    return ReactDOM.createPortal(
        <div id="portal">{children}</div>,
        document.getElementsByTagName('body')[0]
    );
}

export default LearnPortal;
