import React from 'react';
import PropTypes from 'prop-types';
//
import PLFilterItem from '../../filter/item/PLFilterItem';
import PLFilterPriceCustom from '../custom/_main/PLFilterPriceCustom';
import PLFilterConfirm from '../../filter/confirm/PLFilterConfirm';
//
import './PLFilterPrices.scss';

//
PLFilterPrices.propTypes = {};

//
function PLFilterPrices({
    price_arr,
    is_price_custom,
    price_custom_1,
    price_custom_2,
    price_custom_min,
    price_custom_max,

    filter_count,
    filter_result_count,
    filter_fetching,

    chooseFilterPrice,
    toggleFilterPrice,
    changePrice1,
    changePrice2,

    clearFilterPrice,
    handleFilter,
}) {
    //
    return (
        <div className="PLFilterPrices padding-10px brs-5px bg-primary box-shadow-filter-phone">
            <div className="margin-bottom-15px">
                <ul className="display-flex flex-wrap list-none">
                    {price_arr.map((item, item_ix) => (
                        <li key={item_ix} className="padding-5px">
                            <PLFilterItem
                                filter_ix={1}
                                item_ix={item_ix}
                                checked={item.checked}
                                chooseFilterItem={chooseFilterPrice}
                            >
                                {item.title}
                            </PLFilterItem>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="margin-bottom-15px">
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

            <div
                className={`PLFilterPrices_confirm overflow-hidden ${
                    filter_count || location.search
                        ? 'padding-top-15px'
                        : 'PLFilterPrices_confirm-none'
                }`}
            >
                <PLFilterConfirm
                    filter_result_count={filter_result_count}
                    is_fetching={filter_fetching}
                    handleFilter={handleFilter}
                    clearFilter={clearFilterPrice}
                />
            </div>
        </div>
    );
}

export default PLFilterPrices;
