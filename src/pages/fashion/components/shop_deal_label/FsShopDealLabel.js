import React from 'react';
import PropTypes from 'prop-types';

//
FsShopDealLabel.propTypes = {
    label: PropTypes.string,
    class_main: PropTypes.string,
};

FsShopDealLabel.defaultProps = {
    class_main: 'fashion-value-padding color-fashion font-12px',
};

//
function FsShopDealLabel({ label, class_main }) {
    //
    return <div className={`FsShopDealLabel ${class_main}`}>{label}</div>;
}

export default FsShopDealLabel;
