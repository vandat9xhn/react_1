import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useVideoBtnPlayCenter } from '../../../../_hooks/useVideoBtnPlayCenter';
//
import VideoBtnPlayCenter from '../../../vid_pic/video_btn_play_center/VideoBtnPlayCenter';

//
CarouselVideo.propTypes = {};

//
function CarouselVideo({ vid_pic, vid_pic_ix, stopInterval }) {
    //
    const {
        ref_video_elm,
        state_obj,
        // setStateObj,

        toggleBtnPlay,
        togglePlayPause,

        doPause,
        // hideBtnPlay,
        handleEnded,
    } = useVideoBtnPlayCenter({
        other_state: {},
    });

    const { is_play, show_btn_play } = state_obj;

    //
    useEffect(() => {
        doPause();
    }, [vid_pic_ix]);

    /* ---------- */

    //
    function handlePlay() {
        stopInterval(true);
    }

    //
    function handlePause() {
        stopInterval(false);
    }

    //
    return (
        <div className="wh-100 pos-rel">
            <video
                ref={ref_video_elm}
                className="wh-100 object-fit-content"
                src={vid_pic}
                onPlay={handlePlay}
                onPause={handlePause}
                onEnded={handleEnded}
            />

            <VideoBtnPlayCenter
                size_icon="2.5rem"
                // color={color}
                is_play={is_play}
                show_btn_play={show_btn_play}
                toggleBtnPlay={toggleBtnPlay}
                togglePlayPause={togglePlayPause}
            />
        </div>
    );
}

export default CarouselVideo;
