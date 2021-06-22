import React from 'react';
import PropTypes from 'prop-types';
//
import StarsRate from '../../../../../../../component/stars_rate/_main/StarsRate';
import './FilterRateItem.scss';

//
FilterRateItem.propTypes = {
    is_active: PropTypes.bool,
    ix: PropTypes.number,
    handleFilterRate: PropTypes.func,
};

//
function FilterRateItem(props) {
    const { is_active, ix, handleFilterRate } = props;
    //
    function onFilterRate() {
        handleFilterRate(ix);
    }
    //
    return (
        <div
            className={`FilterRateItem cursor-pointer ${
                is_active ? '' : 'opacity-05'
            }`}
            onClick={onFilterRate}
        >
            <div className="display-flex">
                <StarsRate rate_avg={ix} size_icon="1.25rem" />

                <div className="FilterRateItem_up">Up</div>
            </div>
        </div>
    );
}

export default FilterRateItem;
