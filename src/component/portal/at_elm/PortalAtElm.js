import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//
PortalAtElm.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    elm: PropTypes.oneOfType([PropTypes.element, PropTypes.object]),
};

//
function PortalAtElm({ children, elm, className }) {
    return ReactDOM.createPortal(
        <div className={className}>{children}</div>,
        elm
    );
}

export default PortalAtElm;
