import React from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../../../component/stars_rate/_main/StarsRate';
// 
import './FilterRateItem.scss';

//
FilterRateItem.propTypes = {
    is_active: PropTypes.bool,
    ix: PropTypes.number,
    handleFilterRate: PropTypes.func,
};

//
function FilterRateItem({ is_active, ix, handleFilterRate }) {
    //
    function onFilterRate() {
        handleFilterRate(ix);
    }
    //
    return (
        <div
            className={`FilterRateItem cursor-pointer ${
                is_active ? '' : 'opacity-04'
            }`}
            onClick={onFilterRate}
        >
            <div className="inline-flex align-item-center">
                <StarsRate rate_avg={ix} size_icon="14px" />

                <span className="FilterRateItem_up margin-left-5px">Trở lên</span>
            </div>
        </div>
    );
}

export default FilterRateItem;
