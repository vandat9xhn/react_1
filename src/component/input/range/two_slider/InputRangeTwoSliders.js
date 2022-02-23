import React from 'react';
import { TwoSliders } from 'react-range-slider-ts';
import PropTypes from 'prop-types';
//
import './InputRangeTwoSliders.scss';

//
InputRangeTwoSliders.propTypes = {
    range: PropTypes.element,
    active_range: PropTypes.element,
    slider1: PropTypes.element,
    slider2: PropTypes.element,
    value1: PropTypes.number,
    value2: PropTypes.number,

    ref_slider_num_run: PropTypes.object,
    ref_has_change_range: PropTypes.object,
    getRangeAngel: PropTypes.func,

    handleMouseMove: PropTypes.func,
    handleMouseEnd: PropTypes.func,

    afterMouseDown: PropTypes.func,
    afterMousemove: PropTypes.func,
    afterMouseUp: PropTypes.func,
};

//
function InputRangeTwoSliders({
    range,
    active_range,
    slider1,
    slider2,
    value1,
    value2,

    ref_slider_num_run,
    ref_has_change_range,
    getRangeAngel,

    handleChangeSlider1,
    handleChangeSlider2,

    afterMouseDown,
    afterMousemove,
    afterMouseUp,
}) {
    //
    return (
        <TwoSliders
            range={range}
            active_range={active_range}
            slider1={slider1}
            slider2={slider2}
            //
            value1={value1}
            value2={value2}
            ref_slider_num_run={ref_slider_num_run}
            ref_has_change_range={ref_has_change_range}
            getRangeAngel={getRangeAngel}
            //
            handleChangeSlider1={handleChangeSlider1}
            handleChangeSlider2={handleChangeSlider2}
            //
            afterMouseDown={afterMouseDown}
            afterMousemove={afterMousemove}
            afterMouseUp={afterMouseUp}
        />
    );
}

export default InputRangeTwoSliders;
