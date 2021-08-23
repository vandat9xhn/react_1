import React from 'react';
import PropTypes from 'prop-types';
//
import FashionRateItem from '../item/_main/FashionRateItem';

//
FashionRateList.propTypes = {};

//
function FashionRateList({ rate_page_arr }) {
    //
    return (
        <div className="FashionRateList">
            {rate_page_arr.map((rate_item, ix) => (
                <div key={`${rate_item.id}`}>
                    <FashionRateItem ix={ix} item={rate_item} />
                </div>
            ))}
        </div>
    );
}

export default FashionRateList;
