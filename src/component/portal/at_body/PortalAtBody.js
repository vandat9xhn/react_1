import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

//
PortalAtBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

//
function PortalAtBody(props) {
    return ReactDOM.createPortal(
        <div className="portal_at_body">{props.children}</div>,
        document.getElementsByTagName('body')[0]
    );
}

export default PortalAtBody;
