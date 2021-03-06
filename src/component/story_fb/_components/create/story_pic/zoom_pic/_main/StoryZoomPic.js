import React from 'react';
import PropTypes from 'prop-types';
//
import InputRangeOneSlider from '../../../../../../input/range/one_slider/_main/InputRangeOneSlider';
//
import StoryZoomRange from '../range/StoryZoomRange';
import StoryZoomActive from '../active_range/StoryZoomActive';
import StoryZoomSlider from '../slider/StoryZoomSlider';
//
import './StoryZoomPic.scss';

//
StoryZoomPic.propTypes = {};

//
function StoryZoomPic({ value, handleChange, afterMouseUp }) {
    //
    function handleZoomAdd() {
        handleChange(value + 5);
    }

    //
    function handleZoomSub() {
        handleChange(value - 5);
    }

    //
    return (
        <div className="StoryZoomPic">
            <div className="flex-between-center">
                <div
                    className={`padding-4px ${
                        value <= 0 ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    onClick={handleZoomSub}
                >
                    <span className="StoryZoomPic_btn text-white font-500">
                        -
                    </span>
                </div>

                <div className="StoryZoomPic_center flex-grow-1">
                    <InputRangeOneSlider
                        range={<StoryZoomRange />}
                        active_range={<StoryZoomActive />}
                        slider={<StoryZoomSlider />}
                        value={value}
                        //
                        handleChange={handleChange}
                        afterMouseUp={afterMouseUp}
                    />
                </div>

                <div
                    className={`padding-4px ${
                        value >= 100 ? 'cursor-not-allowed' : 'cursor-pointer'
                    }`}
                    onClick={handleZoomAdd}
                >
                    <span className="StoryZoomPic_btn text-white font-500">
                        +
                    </span>
                </div>
            </div>
        </div>
    );
}

export default StoryZoomPic;
