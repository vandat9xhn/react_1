import React from 'react';
import PropTypes from 'prop-types';
//
import './FsPVoucherFilterItem.scss';

//
FsPVoucherFilterItem.propTypes = {};

//
function FsPVoucherFilterItem({ title, ix, is_active, handleChangeFilter }) {
    //
    function onChangeFilter() {
        !is_active && handleChangeFilter(ix);
    }

    //
    return (
        <div
            className={`FsPVoucherFilterItem padding-y-10px text-align-center cursor-pointer ${
                is_active ? 'color-fashion' : ''
            }`}
            onClick={onChangeFilter}
        >
            {title}
        </div>
    );
}

export default FsPVoucherFilterItem;
