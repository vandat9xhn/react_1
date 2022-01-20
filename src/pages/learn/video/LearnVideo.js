import React from 'react';
import PropTypes from 'prop-types';
//
import Video from '../../../component/vid_pic/video/_main/Video';
//
import './LearnVideo.scss';

// 
const video = 'http://media.w3.org/2010/05/sintel/trailer.webm'

//
LearnVideo.propTypes = {};

//
function LearnVideo(props) {
    //
    return (
        <div className="LearnVideo margin-auto border-blur bg-shadow-8">
            <Video
                video={video}
                //
                initial_is_play={false}
                initial_zoom_lv={0}
                // initial_volume={0}
                initial_is_mute={true}
                initial_c_time={0}
                initial_total_time={0}
            />
        </div>
    );
}

export default LearnVideo;
