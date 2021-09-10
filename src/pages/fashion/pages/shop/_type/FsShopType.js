import React from 'react';
import PropTypes from 'prop-types';

//
FsShopType.propTypes = {};

//
function FsShopType({ TypeComponent, ...other_props }) {
    return <TypeComponent {...other_props} />;
}

export default FsShopType;
