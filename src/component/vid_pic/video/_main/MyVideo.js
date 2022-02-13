import React from 'react';
import PropTypes from 'prop-types';
import { Video } from 'react-video-ts';
// import Video from './Video';
import 'react-video-ts/dist/index.css'

//
MyVideo.propTypes = {};

//
function MyVideo({
    video,
    total_view,
    face_video_elm,

    stop_when_over = true,
    max_zoom_lv = 0,
    use_fullscreen = false,

    initial_is_play,
    initial_zoom_lv,
    initial_volume,
    initial_is_mute,
    initial_c_time,
    initial_total_time,

    beforeTogglePlay,
    afterTogglePlay,
    beforeChangeVolume,
    afterChangeVolume,
    beforeToggleMute,
    afterToggleMute,
    beforeChangeZoomLv,
    afterChangeZoomLv,
    beforeChangeTime,
    afterChangeTime,
}) {
    //
    return (
        <Video
            video={video}
            total_view={total_view}
            face_video_elm={face_video_elm}
            //
            stop_when_over={stop_when_over}
            max_zoom_lv={max_zoom_lv}
            use_fullscreen={use_fullscreen}
            //
            initial_is_play={initial_is_play}
            initial_zoom_lv={initial_zoom_lv}
            initial_volume={initial_volume}
            initial_is_mute={initial_is_mute}
            initial_c_time={initial_c_time}
            initial_total_time={initial_total_time}
            //
            beforeTogglePlay={beforeTogglePlay}
            afterTogglePlay={afterTogglePlay}
            beforeChangeVolume={beforeChangeVolume}
            afterChangeVolume={afterChangeVolume}
            beforeToggleMute={beforeToggleMute}
            afterToggleMute={afterToggleMute}
            beforeChangeZoomLv={beforeChangeZoomLv}
            afterChangeZoomLv={afterChangeZoomLv}
            beforeChangeTime={beforeChangeTime}
            afterChangeTime={afterChangeTime}
        />
    );
}

export default MyVideo;
