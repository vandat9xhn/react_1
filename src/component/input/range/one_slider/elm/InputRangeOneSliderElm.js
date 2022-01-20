import React from 'react';
import PropTypes from 'prop-types';
//
import './InputRangeOneSliderElm.scss';

//
InputRangeOneSliderElm.propTypes = {};

//
function InputRangeOneSliderElm({
    ref_range_elm,
    is_run,
    only_drag_slider = true,

    range,
    active_range,
    slider,
    value,

    handleClick,
    handleStart,
}) {
    //
    return (
        <div
            ref={ref_range_elm}
            className={`InputRangeOneSliderElm pos-rel wh-100 ${
                is_run ? 'input-range-running' : ''
            }`}
            onMouseDown={!only_drag_slider ? handleStart : undefined}
            onTouchStart={!only_drag_slider ? handleStart : undefined}
        >
            <div
                className="InputRangeOneSliderElm_range pos-abs left-0 y-center wh-100 cursor-pointer"
                onClick={handleClick}
            >
                {range}
            </div>

            <div
                className="InputRangeOneSliderElm_active pos-abs left-0 y-center h-100per pointer-events-none"
                style={{ width: `${value}%` }}
            >
                {active_range}
            </div>

            <div
                className="InputRangeOneSliderElm_slider pos-abs top-50per"
                style={{ left: `${value}%` }}
                //
                onMouseDown={only_drag_slider ? handleStart : undefined}
                onTouchStart={only_drag_slider ? handleStart : undefined}
            >
                {slider}
            </div>
        </div>
    );
}

export default InputRangeOneSliderElm;
