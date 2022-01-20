import React from 'react';
import PropTypes from 'prop-types';

//
VideoLiveUtils.propTypes = {};

//
function VideoLiveUtils(props) {
    //
    return (
        <div className="VideoLiveUtils">
            <div className="display-flex align-items-center">
                <div>
                    pause
                </div>

                <div>c_time/total_time</div>

                <div className="flex-grow-1"></div>

                <div>zoom</div>

                <div>sound</div>
            </div>
        </div>
    );
}

export default VideoLiveUtils;
