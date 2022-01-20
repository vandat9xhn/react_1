import React from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../_constant/Constant';
// 
import { getVideoTimeFromSeconds } from '../../../../_some_function/video_time';

//
VideoTimeTotalTime.propTypes = {};

//
function VideoTimeTotalTime({ c_time, total_time }) {
    //
    return (
        <div className="VideoTimeTotalTime font-12px">
            {IS_MOBILE
                ? getVideoTimeFromSeconds({ second: total_time - c_time })
                : `${getVideoTimeFromSeconds({
                      second: c_time,
                  })} : ${getVideoTimeFromSeconds({ second: total_time })}`}
        </div>
    );
}

export default VideoTimeTotalTime;
