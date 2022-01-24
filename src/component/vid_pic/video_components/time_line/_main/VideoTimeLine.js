import React from 'react';
import PropTypes from 'prop-types';
//
import InputRangeOneSlider from '../../../../input/range/one_slider/_main/InputRangeOneSlider';
//
import './VideoTimeLine.scss';

//
VideoTimeLine.propTypes = {
    c_time: PropTypes.number,

    range: PropTypes.element,
    active_range: PropTypes.element,
    slider: PropTypes.element,

    handleChangeTime: PropTypes.func,
};

VideoTimeLine.defaultProps = {
    range: (
        <div className="VideoTimeLine_range">
            <div className="VideoTimeLine_range_contain"></div>
        </div>
    ),
    active_range: (
        <div className="VideoTimeLine_range VideoTimeLine_range-active">
            <div className="VideoTimeLine_range_contain VideoTimeLine_range_contain-active"></div>
        </div>
    ),
    slider: <div className="VideoTimeLine_slider cursor-pointer"></div>,
};

//
function VideoTimeLine({
    c_time,
    total_time,
    buffer_time,

    range,
    active_range,
    slider,

    handleChangeTime,
    handleStartMoveTime,
    handleEndMoveTime,
}) {
    //
    function onChangeTime(time_percent = 0) {
        handleChangeTime({
            new_c_time: (total_time * time_percent) / 100,
        });
    }

    //
    return (
        <div className="VideoTimeLine">
            <InputRangeOneSlider
                range={
                    <React.Fragment>
                        {range}
                        <div
                            className="VideoTimeLine_buffer pos-abs-0 h-100per"
                            style={{ width: `${buffer_time}%` }}
                        >
                            <div className="VideoTimeLine_buffer_contain"></div>
                        </div>
                    </React.Fragment>
                }
                active_range={active_range}
                slider={slider}
                value={c_time}
                only_drag_slider={false}
                //
                handleChange={onChangeTime}
                afterMouseDown={handleStartMoveTime}
                afterMouseUp={handleEndMoveTime}
            />
        </div>
    );
}

export default VideoTimeLine;
