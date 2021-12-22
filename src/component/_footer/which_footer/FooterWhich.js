import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//
import FooterFashion from '../fashion/_main/FooterFashion';
import FooterPhone from '../phone/_main/FooterPhone';

//
FooterWhich.propTypes = {};

//
function FooterWhich(props) {
    if (location.pathname.indexOf('/fashion') == 0) {
        return (
            <div className="margin-top-15px">
                <FooterFashion />;
            </div>
        );
    }

    if (location.pathname.indexOf('/phone') == 0) {
        return (
            <div className="margin-top-15px">
                <FooterPhone />;
            </div>
        );
    }

    return null;
}

export default withRouter(FooterWhich);
