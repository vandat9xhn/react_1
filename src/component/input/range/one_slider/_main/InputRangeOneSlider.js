import React from 'react';
import { OneSlider } from 'react-range-slider-ts';
import 'react-range-slider-ts/dist/index.css';
//

//
function InputRangeOneSlider({
    range,
    active_range,
    slider,
    value,

    only_drag_slider,
    ref_has_change_range,
    ref_is_run,

    getRangeAngel,
    handleChange,

    afterMouseDown,
    afterMousemove,
    afterMouseUp,
}) {
    //
    return (
        <OneSlider
            range={range}
            active_range={active_range}
            slider={slider}
            value={value}
            //
            only_drag_slider={only_drag_slider}
            ref_has_change_range={ref_has_change_range}
            ref_is_run={ref_is_run}
            //
            getRangeAngel={getRangeAngel}
            handleChange={handleChange}
            afterMouseDown={afterMouseDown}
            afterMousemove={afterMousemove}
            afterMouseUp={afterMouseUp}
        />
    );
}

export default InputRangeOneSlider;
