import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostVideoRadio from '../../../../../_components/video_radio/CUPostVideoRadio';

//
CUPFVLThumnailVideo.propTypes = {};

//
function CUPFVLThumnailVideo({ thumbnail_ix, chooseThumbnail }) {
    //
    return (
        <div className="CUPFVLThumnailVideo">
            <div>
                <CUPostVideoRadio
                    ix={2}
                    is_active={thumbnail_ix == 2}
                    handleChoose={chooseThumbnail}
                >
                    <div className="cu-post-detail-sub">Choose from video</div>
                </CUPostVideoRadio>
            </div>

            {thumbnail_ix == 2 ? (
                <div className="cu-post-detail-info margin-y-15px">
                    Choose a still frame from your video to show before it
                    starts playing.
                </div>
            ) : null}
        </div>
    );
}

export default CUPFVLThumnailVideo;
