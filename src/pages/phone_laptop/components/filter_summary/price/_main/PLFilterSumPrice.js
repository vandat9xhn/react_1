import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterSumCommonList from '../../common_list/PLFilterSumCommonList';
import PLFilterPriceCustom from '../../../filter_price/custom/_main/PLFilterPriceCustom';

//
PLFilterSumPrice.propTypes = {};

//
function PLFilterSumPrice({
    filter_ix,
    title,
    item_arr,

    is_price_custom,
    price_custom_1,
    price_custom_2,
    price_custom_min,
    price_custom_max,

    chooseFilterItem,
    toggleFilterPrice,
    changePrice1,
    changePrice2,
}) {
    //
    return (
        <div className="PLFilterSumPrice">
            <PLFilterSumCommonList
                filter_ix={filter_ix}
                title={title}
                item_arr={item_arr}
                chooseFilterItem={chooseFilterItem}
            >
                <div className="padding-y-10px">
                    <PLFilterPriceCustom
                        is_price_custom={is_price_custom}
                        price_custom_1={price_custom_1}
                        price_custom_2={price_custom_2}
                        price_custom_min={price_custom_min}
                        price_custom_max={price_custom_max}
                        //
                        toggleFilterPrice={toggleFilterPrice}
                        changePrice1={changePrice1}
                        changePrice2={changePrice2}
                    />
                </div>
            </PLFilterSumCommonList>
        </div>
    );
}

export default PLFilterSumPrice;
