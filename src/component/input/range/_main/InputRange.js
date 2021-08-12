import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseMoveX } from '../../../../_hooks/useMouseMoveX';
//
import './InputRange.scss';

//
InputRange.propTypes = {
    range: PropTypes.element,
    active_range: PropTypes.element,
    slider: PropTypes.element,
    value: PropTypes.number,
};

//
function InputRange({
    range,
    active_range,
    slider,
    value,

    handleMouseMove,
    handleMouseEnd,
}) {
    // 
    const [is_run, setIsRun] = useState(false)

    //
    const ref_range_elm = useRef(null);

    //
    const { handleStart } = useMouseMoveX({
        handleMouseDown: handleMouseDown,
        handleMouseMove: onMouseMove,
        handleMouseEnd: onMouseEnd,
    });

    // 
    function handleMouseDown() {
        setIsRun(true)
    }

    // 
    function onMouseEnd() {
        setIsRun(false)
        handleMouseEnd()
    }

    //
    function onMouseMove(client_x_change) {
        handleMouseMove(
            (client_x_change * 100) / ref_range_elm.current.scrollWidth
        );
    }

    //
    function handleChange(e) {
        const { x } = ref_range_elm.current.getBoundingClientRect();
        const new_value = e.clientX - x;
        const value_change =
            (new_value * 100) / ref_range_elm.current.scrollWidth - value;

        handleMouseMove(value_change);
    }

    //
    return (
        <div
            ref={ref_range_elm}
            className={`InputRange pos-rel wh-100 ${
                is_run ? 'input-range-running' : ''
            }`}
        >
            <div
                className="InputRange_range pos-abs left-0 y-center w-100per cursor-pointer"
                onClick={handleChange}
            >
                {range}
            </div>

            <div
                className="InputRange_active pos-abs left-0 y-center pointer-events-none"
                style={{ width: `${value}%` }}
            >
                {active_range}
            </div>

            <div
                className="InputRange_slider pos-abs"
                style={{ left: `${value}%` }}
                //
                onMouseDown={handleStart}
                onTouchStart={handleStart}
            >
                {slider}
            </div>
        </div>
    );
}

export default InputRange;
