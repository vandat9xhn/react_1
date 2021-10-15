import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
//
import { handleScrollSmooth } from '../../../../../../_some_function/handleScrollSmooth';
// 
import PLFilterSummary from '../../../../components/filter_summary/_main/PLFilterSummary';
import PLBtnFilterSummary from '../../../../components/btn_filter_summary/PLBtnFilterSummary';
//
import './PLPhonesFilterSummary.scss';

//
PLPhonesFilterSummary.propTypes = {};

//
function PLPhonesFilterSummary({
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
}) {
    //
    const [is_show, setIsShow] = useState(false);

    //
    const ref_main = useRef(null);

    // ----

    //
    function toggleShow() {
        setIsShow((is_show) => {
            if (!is_show && !IS_MOBILE) {
                handleScrollSmooth(() => {
                    ref_main.current.scrollIntoView();
                });
            }

            return !is_show;
        });
    }

    //
    function onFilter() {
        toggleShow();
        handleFilter();
    }

    //
    function onClearAllFilter() {
        toggleShow();
        clearAllFilter();
    }

    //
    return (
        <div ref={ref_main} className="PLPhonesFilterSummary pos-rel">
            {is_show && !IS_MOBILE ? (
                <div
                    className="pos-fixed-100per z-index-lv1 bg-shadow-5"
                    onClick={toggleShow}
                ></div>
            ) : null}

            <div className="PLPhonesFilterSummary_btn pos-rel z-index-lv1">
                <PLBtnFilterSummary
                    filter_count={filter_count}
                    handleClick={toggleShow}
                />
            </div>

            {is_show ? (
                <div className="PLPhonesFilterSummary_filter pos-abs left-0 top-100per z-index-lv1 padding-top-10px">
                    {IS_MOBILE ? null : <div className="PLPhonesFilterSummary_filter_caret"></div>}

                    <div className="PLPhonesFilterSummary_filter_contain pos-rel bg-primary brs-8px overflow-y-auto scroll-thin">
                        <PLFilterSummary
                            filter_arr={filter_arr}
                            filter_count={filter_count}
                            filter_result_count={filter_result_count}
                            filter_fetching={filter_fetching}
                            //
                            is_price_custom={is_price_custom}
                            price_custom_1={price_custom_1}
                            price_custom_2={price_custom_2}
                            price_custom_min={price_custom_min}
                            price_custom_max={price_custom_max}
                            //

                            toggleFilterPrice={toggleFilterPrice}
                            changePrice1={changePrice1}
                            changePrice2={changePrice2}
                            //
                            chooseFilterItem={chooseFilterItem}
                            handleFilter={onFilter}
                            clearAllFilter={onClearAllFilter}
                            closeFilterSummary={toggleShow}
                        />
                    </div>
                </div>
            ) : null}
        </div>
    );
}

export default PLPhonesFilterSummary;
