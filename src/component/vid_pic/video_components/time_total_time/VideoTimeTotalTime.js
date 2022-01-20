import React from 'react';
import PropTypes from 'prop-types';
//
import { getVideoTimeFromSeconds } from '../../../../_some_function/video_time';

//
VideoTimeTotalTime.propTypes = {};

//
function VideoTimeTotalTime({ c_time, total_time }) {
    //
    return (
        <div className="VideoTimeTotalTime">
            {getVideoTimeFromSeconds({ second: c_time })} :{' '}
            {getVideoTimeFromSeconds({ second: total_time })}
        </div>
    );
}

export default VideoTimeTotalTime;
