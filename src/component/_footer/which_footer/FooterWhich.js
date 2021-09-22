import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//
import FooterFashion from '../fashion/_main/FooterFashion';

//
FooterWhich.propTypes = {};

//
function FooterWhich(props) {
    if (location.pathname.indexOf('/fashion') == 0) {
        return <FooterFashion />;
    }

    return null;
}

export default withRouter(FooterWhich);
