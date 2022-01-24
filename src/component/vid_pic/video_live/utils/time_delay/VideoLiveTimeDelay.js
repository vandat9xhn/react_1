import React from 'react';
import PropTypes from 'prop-types';
//
import { getVideoTimeFromSeconds } from '../../../../../_some_function/video_time';

//
VideoLiveTimeDelay.propTypes = {};

//
function VideoLiveTimeDelay({ c_time, total_time }) {
    //
    if (c_time >= total_time) {
        return null;
    }

    //
    return (
        <div className="VideoLiveTimeDelay font-12px">
            -{getVideoTimeFromSeconds({ second: total_time - c_time })}
        </div>
    );
}

export default VideoLiveTimeDelay;
