import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPVoucherMenuItem.scss';

//
FsPVoucherMenuItem.propTypes = {};

//
function FsPVoucherMenuItem({ title, ix, is_active, handleChangeMenu }) {
    //
    function onChangeMenu() {
        !is_active && handleChangeMenu(ix);
    }

    //
    return (
        <div
            className={`FsPVoucherMenuItem padding-y-20px text-cap text-align-center font-16px cursor-pointer ${
                is_active ? 'FsPVoucherMenuItem-active color-fashion' : ''
            }`}
            onClick={onChangeMenu}
        >
            {title}
        </div>
    );
}

export default FsPVoucherMenuItem;
