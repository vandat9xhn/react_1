import React from 'react';
import PropTypes from 'prop-types';
//
import FashionRateItem from '../item/FashionRateItem';

//
FashionRateList.propTypes = {};

//
function FashionRateList({ rate_arr }) {
    //
    return (
        <div>
            {rate_arr.map((item) => (
                <div key={`FashionRateList_item_${item.id}`}>
                    <FashionRateItem
                        id={item.id}
                        rate_user={item.user}
                        rate_num={item.rate}
                        content_obj={item.content_obj}
                    />
                </div>
            ))}
        </div>
    );
}

export default FashionRateList;
