import React from 'react';
import PropTypes from 'prop-types';
//
import PortalAtElm from '../at_elm/PortalAtElm';

//
PortalAtBody.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
};

//
function PortalAtBody({ children }) {
    //
    return (
        <PortalAtElm
            elm={document.getElementsByTagName('body')[0]}
            className="portal_at_body"
        >
            {children}
        </PortalAtElm>
    );
}

export default PortalAtBody;
