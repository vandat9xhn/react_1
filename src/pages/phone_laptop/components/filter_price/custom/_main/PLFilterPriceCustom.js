import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import IconCaret from '../../../../../../_icons_svg/_icon_caret/IconCaret';
//
import InputRangeTwoSliders from '../../../../../../component/input/range/two_slider/InputRangeTwoSliders';
//
import PLFPCustomPrice from '../price/PLFPCustomPrice';
//
import './PLFilterPriceCustom.scss';

//
PLFilterPriceCustom.propTypes = {};

//
function PLFilterPriceCustom({
    is_price_custom,
    price_custom_1,
    price_custom_2,
    price_custom_min,
    price_custom_max,

    toggleFilterPrice,
    changePrice1,
    changePrice2,
}) {
    //
    const ref_value_1 = useRef(getPercent(price_custom_1));
    const ref_value_2 = useRef(getPercent(price_custom_2));

    //
    const forceUpdate = useForceUpdate();

    //
    useEffect(() => {
        ref_value_1.current = getPercent(price_custom_1);
        forceUpdate()
    }, [price_custom_1]);

    //
    useEffect(() => {
        ref_value_2.current = getPercent(price_custom_2);
        forceUpdate()
    }, [price_custom_2]);

    // ---

    //
    function getPercent(price = 0) {
        return (
            ((price - price_custom_min) * 100) /
            (price_custom_max - price_custom_min)
        );
    }

    function getRoundValue(percent = 0) {
        return (
            Math.round(
                (percent * (price_custom_max - price_custom_min)) / 100
            ) + price_custom_min
        );
    }

    // ---

    //
    function handleMouseMovePrice({ slider_run = 1 || 2, value_change = 0 }) {
        if (slider_run == 1) {
            const new_value_1 = ref_value_1.current + value_change;

            ref_value_1.current =
                new_value_1 <= 0
                    ? 0
                    : new_value_1 >= ref_value_2.current
                    ? ref_value_2.current
                    : new_value_1;
        } else {
            const new_value_2 = ref_value_2.current + value_change;

            ref_value_2.current =
                new_value_2 >= 100
                    ? 100
                    : new_value_2 <= ref_value_1.current
                    ? ref_value_1.current
                    : new_value_2;
        }

        forceUpdate();
    }

    //
    function handleMouseEndPrice(slider_run) {
        if (slider_run == 1) {
            const new_price_1 = getRoundValue(ref_value_1.current);
            changePrice1(new_price_1);
        } else {
            const new_price_2 = getRoundValue(ref_value_2.current);
            changePrice2(new_price_2);
        }
    }

    //
    function handleClickChange({ slider_run = 1 || 2, value_change = 0 }) {
        if (slider_run == 1) {
            const new_price_1 = getRoundValue(
                ref_value_1.current + value_change
            );
            changePrice1(new_price_1);
        } else {
            const new_price_2 = getRoundValue(
                ref_value_2.current + value_change
            );
            changePrice2(new_price_2);
        }
    }

    //
    return (
        <div className="PLFilterPriceCustom">
            <div
                className="display-flex align-items-center text-blue cursor-pointer"
                onClick={toggleFilterPrice}
            >
                <div className="margin-right-10px">
                    Hoặc chọn mức giá phù hợp với bạn
                </div>

                <IconCaret size_icon="15px" fill="currentColor" />
            </div>

            <div
                className={`PLFilterPriceCustom_contain overflow-hidden ${
                    is_price_custom
                        ? 'PLFilterPriceCustom_contain-active'
                        : 'PLFilterPriceCustom_contain-none'
                }`}
            >
                <div className="display-flex align-items-center margin-bottom-15px">
                    <PLFPCustomPrice
                        value={getRoundValue(ref_value_1.current)}
                        min={price_custom_min}
                        max={price_custom_2}
                        changePrice={changePrice1}
                    />

                    <div className="PLFilterPriceCustom_connect flex-grow-1 bg-blur"></div>

                    <PLFPCustomPrice
                        value={getRoundValue(ref_value_2.current)}
                        min={price_custom_1}
                        max={price_custom_max}
                        changePrice={changePrice2}
                    />
                </div>

                <div className="PLFilterPriceCustom_input_range">
                    <InputRangeTwoSliders
                        range={
                            <div className="PLFilterPriceCustom_range h-100per bg-ccc"></div>
                        }
                        active_range={
                            <div className="PLFilterPriceCustom_range h-100per bg-blue"></div>
                        }
                        slider_1={
                            <div className="PLFilterPriceCustom_slider PLFilterPriceCustom_slider-1"></div>
                        }
                        slider_2={
                            <div className="PLFilterPriceCustom_slider PLFilterPriceCustom_slider-2"></div>
                        }
                        value_1={ref_value_1.current}
                        value_2={ref_value_2.current}
                        handleMouseMove={handleMouseMovePrice}
                        handleMouseEnd={handleMouseEndPrice}
                        handleClickChange={handleClickChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default PLFilterPriceCustom;
