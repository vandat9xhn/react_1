import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import InputRangeOneSliderElm from '../elm/InputRangeOneSliderElm';
//
import { useRangeOneSlider } from '../../../../../_hooks/useRangeOneSlider';

//
InputRangeOneSlider.propTypes = {
    range: PropTypes.element,
    active_range: PropTypes.element,
    slider: PropTypes.element,
    value: PropTypes.number,

    callbackStart: PropTypes.func,
    handleMouseMove: PropTypes.func,
    handleMouseEnd: PropTypes.func,
};

InputRangeOneSlider.defaultProps = {
    callbackStart: () => {},
};

//
function InputRangeOneSlider({
    range,
    active_range,
    slider,
    value,

    only_drag_slider,
    ref_has_change_range,
    getRangeAngel,

    callbackStart,
    handleChange,

    afterMouseDown,
    afterMousemove,
    afterMouseUp,
}) {
    //
    const ref_range_elm = useRef(null);

    //
    const { ref_is_run, onDown, handleClick } = useRangeOneSlider({
        ref_range_elm: ref_range_elm,
        ref_has_change_range: ref_has_change_range,

        getRangeAngel: getRangeAngel,
        handleChange: handleChange,

        afterMouseDown: afterMouseDown,
        afterMousemove: afterMousemove,
        afterMouseUp: afterMouseUp,
    });

    //
    return (
        <InputRangeOneSliderElm
            ref_range_elm={ref_range_elm}
            is_run={ref_is_run.current}
            only_drag_slider={only_drag_slider}
            //
            range={range}
            active_range={active_range}
            slider={slider}
            value={value}
            //
            handleClick={handleClick}
            handleStart={onDown}
        />
    );
}

export default InputRangeOneSlider;
