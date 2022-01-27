import React from 'react';
import PropTypes from 'prop-types';

//
VideoItem.propTypes = {};

//
function VideoItem({ ref_video_elm, video }) {
    //
    return (
        <div className="VideoItem display-flex-center wh-100">
            <video
                ref={ref_video_elm}
                className="VideoItem_video max-w-100per max-h-100per min-w-50per"
                src={video}
                controls={false}
                preload="metadata"
            />
        </div>
    );
}

export default VideoItem;
