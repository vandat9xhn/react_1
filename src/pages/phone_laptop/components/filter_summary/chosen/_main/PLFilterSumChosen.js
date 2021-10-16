import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import { formatNum } from '../../../../../../_some_function/FormatNum';
// 
import PLFilterSumChosenItem from '../item/PLFilterSumChosenItem';

//
PLFilterSumChosen.propTypes = {};

//
function PLFilterSumChosen({
    filter_arr,
    filter_count,

    is_price_custom,
    price_custom_1,
    price_custom_2,

    toggleFilterPrice,
    clearFilterItem,
    clearAllFilter,
}) {
    //
    return (
        <div className="PLFilterSumChosen">
            {IS_MOBILE ? (
                <div className="display-flex align-items-center">
                    <div className="font-16px font-700">Tiêu chí đã chọn:</div>

                    <div>
                        {filter_count >= 2 && IS_MOBILE ? (
                            <div
                                className="margin-left-10px padding-5px text-blue"
                                onClick={clearAllFilter}
                            >
                                Xóa tất cả
                            </div>
                        ) : null}
                    </div>
                </div>
            ) : null}

            <div className="PLFilterSumChosen_row display-flex flex-wrap align-items-center">
                {IS_MOBILE ? null : (
                    <div className="padding-5px font-700">Đã chọn:</div>
                )}

                {filter_arr.map((filter_obj, filter_ix) =>
                    filter_obj.item_arr.map(
                        (item, item_ix) =>
                            item.checked && (
                                <div
                                    className="padding-5px font-13px"
                                    key={`${filter_ix}_${item_ix}`}
                                >
                                    <PLFilterSumChosenItem
                                        filter_ix={filter_ix}
                                        item_ix={item_ix}
                                        title={item.title}
                                        clearFilterItem={clearFilterItem}
                                    />
                                </div>
                            )
                    )
                )}

                {is_price_custom ? (
                    <PLFilterSumChosenItem
                        filter_ix={-1}
                        item_ix={-1}
                        title={`Từ ${formatNum(price_custom_1)}đ - ${formatNum(
                            price_custom_2
                        )}đ`}
                        clearFilterItem={toggleFilterPrice}
                    />
                ) : null}

                {filter_count >= 2 && !IS_MOBILE ? (
                    <div
                        className="padding-5px text-blue cursor-pointer"
                        onClick={clearAllFilter}
                    >
                        Xóa tất cả
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default PLFilterSumChosen;
