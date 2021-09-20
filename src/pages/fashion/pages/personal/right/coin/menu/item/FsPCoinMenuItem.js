import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPCoinMenuItem.scss';

//
FsPCoinMenuItem.propTypes = {};

//
function FsPCoinMenuItem({ title, ix, is_active, handleChangeMenu }) {
    //
    function onChangeMenu() {
        !is_active && handleChangeMenu(ix);
    }

    //
    return (
        <div
            className={`FsPCoinMenuItem padding-y-20px text-upper text-align-center font-16px cursor-pointer ${
                is_active ? 'FsPCoinMenuItem-active color-fashion' : ''
            }`}
            onClick={onChangeMenu}
        >
            {title}
        </div>
    );
}

export default FsPCoinMenuItem;
