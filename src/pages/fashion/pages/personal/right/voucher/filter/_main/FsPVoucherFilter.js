import React from 'react';
import PropTypes from 'prop-types';
//
import FsPVoucherFilterItem from '../item/FsPVoucherFilterItem';
// 
import './FsPVoucherFilter.scss';

//
FsPVoucherFilter.propTypes = {};

//
function FsPVoucherFilter({ filter_arr, filter_ix, handleChangeFilter }) {
    //
    return (
        <div className="FsPVoucherFilter bg-screen font-12px">
            <ul className="FsPVoucherFilter_row display-flex list-none">
                {filter_arr.map((item, ix) => (
                    <li key={ix} className="FsPVoucherFilter_item">
                        <FsPVoucherFilterItem
                            title={item}
                            ix={ix}
                            is_active={ix == filter_ix}
                            handleChangeFilter={handleChangeFilter}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FsPVoucherFilter;
