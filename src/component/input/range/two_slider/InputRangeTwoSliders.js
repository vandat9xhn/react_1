import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMouseMoveX } from '../../../../_hooks/useMouseMoveX';
//
import './InputRangeTwoSliders.scss';

//
const SLIDER_1 = 1;
const SLIDER_2 = 2;

//
InputRangeTwoSliders.propTypes = {
    range: PropTypes.element,
    active_range: PropTypes.element,
    slider_1: PropTypes.element,
    slider_2: PropTypes.element,
    value_1: PropTypes.number,
    value_2: PropTypes.number,

    handleMouseMove: PropTypes.func,
    handleMouseEnd: PropTypes.func,
};

//
function InputRangeTwoSliders({
    range,
    active_range,
    slider_1,
    slider_2,
    value_1,
    value_2,

    handleMouseMove,
    handleMouseEnd,
    handleClickChange,
}) {
    //
    const [slider_run, setSliderRun] = useState(-1);

    //
    const ref_range_elm = useRef(null);

    //
    const { handleStart: handleStartSlider1 } = useMouseMoveX({
        handleMouseDown: () => handleMouseDown(SLIDER_1),
        handleMouseMove: (client_x_change) =>
            onMouseMove(client_x_change, SLIDER_1),
        handleMouseEnd: () => onMouseEnd(SLIDER_1),
    });

    //
    const { handleStart: handleStartSlider2 } = useMouseMoveX({
        handleMouseDown: () => handleMouseDown(SLIDER_2),
        handleMouseMove: (client_x_change) =>
            onMouseMove(client_x_change, SLIDER_2),
        handleMouseEnd: () => onMouseEnd(SLIDER_2),
    });

    // ------

    //
    function handleMouseDown(new_slider_run = slider_run) {
        setSliderRun(new_slider_run);
    }

    //
    function onMouseMove(client_x_change, new_slider_run = slider_run) {
        handleMouseMove({
            slider_run: new_slider_run,
            value_change:
                (client_x_change * 100) / ref_range_elm.current.scrollWidth,
        });
    }

    //
    function onMouseEnd(new_slider_run = slider_run) {
        handleMouseEnd(new_slider_run);
        setSliderRun(-1);
    }

    // ------

    //
    function handleChange(e) {
        const { x } = ref_range_elm.current.getBoundingClientRect();
        const new_value =
            ((e.clientX - x) * 100) / ref_range_elm.current.scrollWidth;

        const value_center = (value_1 + value_2) / 2;
        const new_slider_run = new_value <= value_center ? SLIDER_1 : SLIDER_2;

        handleClickChange({
            slider_run: new_slider_run,
            value_change:
                new_slider_run == SLIDER_1
                    ? new_value - value_1
                    : new_value - value_2,
        });
    }

    //
    return (
        <div
            ref={ref_range_elm}
            className={`InputRangeTwoSliders pos-rel wh-100 ${
                slider_run == 1
                    ? 'InputRangeTwoSliders-1-run'
                    : slider_run == 2
                    ? 'InputRangeTwoSliders-2-run'
                    : 'InputRangeTwoSliders-not-run'
            }`}
        >
            <div
                className="InputRangeTwoSliders_range pos-abs left-0 y-center wh-100 cursor-pointer"
                onClick={handleChange}
            >
                {range}
            </div>

            <div
                className="InputRangeTwoSliders_range-active pos-abs h-100per y-center pointer-events-none"
                style={{ left: `${value_1}%`, width: `${value_2 - value_1}%` }}
            >
                {active_range}
            </div>

            <div
                className="InputRangeTwoSliders_slider pos-abs"
                style={{ left: `${value_1}%` }}
                //
                onMouseDown={handleStartSlider1}
                onTouchStart={handleStartSlider1}
            >
                {slider_1}
            </div>

            <div
                className="InputRangeTwoSliders_slider pos-abs"
                style={{ left: `${value_2}%` }}
                //
                onMouseDown={handleStartSlider2}
                onTouchStart={handleStartSlider2}
            >
                {slider_2}
            </div>
        </div>
    );
}

export default InputRangeTwoSliders;
