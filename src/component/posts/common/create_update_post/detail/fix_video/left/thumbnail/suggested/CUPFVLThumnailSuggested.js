import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostVideoRadio from '../../../../../_components/video_radio/CUPostVideoRadio';

//
CUPFVLThumnailSuggested.propTypes = {};

//
function CUPFVLThumnailSuggested({ thumbnail_ix, chooseThumbnail }) {
    //
    return (
        <div className="CUPFVLThumnailSuggested">
            <div>
                <CUPostVideoRadio
                    ix={0}
                    is_active={thumbnail_ix == 0}
                    handleChoose={chooseThumbnail}
                >
                    <div className="cu-post-detail-sub">Choose suggested</div>
                </CUPostVideoRadio>
            </div>

            {thumbnail_ix == 0 ? (
                <div>
                    <div className="cu-post-detail-info margin-y-15px">
                        Choose one of these suggested images to show before your
                        video starts playing.
                    </div>

                    <div></div>
                </div>
            ) : null}
        </div>
    );
}

export default CUPFVLThumnailSuggested;
