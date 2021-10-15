import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import PLFilterConfirm from '../../filter/confirm/PLFilterConfirm';
import PLFilterSumCommonList from '../common_list/PLFilterSumCommonList';
import PLFilterSumPrice from '../price/_main/PLFilterSumPrice';
import PLFilterSumChosen from '../chosen/_main/PLFilterSumChosen';
//
import './PLFilterSummary.scss';

//
PLFilterSummary.propTypes = {};

//
function PLFilterSummary({
    filter_arr,
    filter_count,
    filter_result_count,
    filter_fetching,

    is_price_custom,
    price_custom_1,
    price_custom_2,
    price_custom_min,
    price_custom_max,

    toggleFilterPrice,
    changePrice1,
    changePrice2,

    chooseFilterItem,
    handleFilter,
    clearAllFilter,
    closeFilterSummary,
}) {
    //
    return (
        <div className="PLFilterSummary pos-rel">
            <div className="PLFilterSummary_close pos-abs right-0 top-0 padding-10px">
                <button
                    className="display-flex-center btn-hv btn-active padding-5px brs-4px border-blur cursor-pointer"
                    type="button"
                    onClick={closeFilterSummary}
                >
                    <IconsArrow y={400} size_icon="15px" />

                    <span className="margin-left-5px">Đóng</span>
                </button>
            </div>

            {filter_count ? (
                <div className="PLFilterSummary_chosen">
                    <PLFilterSumChosen
                        filter_arr={filter_arr}
                        filter_count={filter_count}
                        clearFilterItem={chooseFilterItem}
                        clearAllFilter={clearAllFilter}
                    />
                </div>
            ) : null}

            <div className="PLFilterSummary_contain display-flex flex-wrap padding-20px">
                <div className="PLFilterSummary_brand w-100per">
                    <PLFilterSumCommonList
                        filter_ix={0}
                        title={filter_arr[0].title}
                        item_arr={filter_arr[0].item_arr}
                        chooseFilterItem={chooseFilterItem}
                    />
                </div>

                {IS_MOBILE ? null : (
                    <div className="PLFilterSummary_separate"></div>
                )}

                <div className="PLFilterSummary_part">
                    <PLFilterSumPrice
                        filter_ix={1}
                        title={filter_arr[1].title}
                        item_arr={filter_arr[1].item_arr}
                        //
                        is_price_custom={is_price_custom}
                        price_custom_1={price_custom_1}
                        price_custom_2={price_custom_2}
                        price_custom_min={price_custom_min}
                        price_custom_max={price_custom_max}
                        //
                        chooseFilterItem={chooseFilterItem}
                        toggleFilterPrice={toggleFilterPrice}
                        changePrice1={changePrice1}
                        changePrice2={changePrice2}
                    />
                </div>

                {filter_arr.slice(2).map((item, ix) => (
                    <React.Fragment key={ix + 2}>
                        <div className="PLFilterSummary_part">
                            <PLFilterSumCommonList
                                filter_ix={ix + 2}
                                title={item.title}
                                item_arr={item.item_arr}
                                chooseFilterItem={chooseFilterItem}
                            />
                        </div>

                        {!IS_MOBILE && (ix + 2) % 3 == 0 ? (
                            <div className="PLFilterSummary_separate"></div>
                        ) : null}
                    </React.Fragment>
                ))}
            </div>

            <div className="PLFilterSummary_confirm pos-sticky bottom-0 left-0">
                <div
                    className={`PLFilterSummary_confirm_contain padding-y-10px bg-primary overflow-hidden transition-all-250ms ${
                        filter_count
                            ? ''
                            : 'PLFilterSummary_confirm_contain-none'
                    }`}
                >
                    <PLFilterConfirm
                        filter_result_count={filter_result_count}
                        is_fetching={filter_fetching}
                        handleFilter={handleFilter}
                        clearFilter={clearAllFilter}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLFilterSummary;
