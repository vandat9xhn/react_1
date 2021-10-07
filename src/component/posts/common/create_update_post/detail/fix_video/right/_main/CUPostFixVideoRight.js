import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostDetailVidPic from '../../../../_components/detail_vid_pic/CUPostDetailVidPic';
// 
import './CUPostFixVideoRight.scss';

//
CUPostFixVideoRight.propTypes = {};

//
function CUPostFixVideoRight({
    video,
    thumbnail,
    is_has_next,
    is_has_prev,

    handleNext,
    handlePrev,
}) {
    //
    return (
        <div className="CUPostFixVideoRight h-100per">
            <CUPostDetailVidPic
                thumbnail={thumbnail}
                is_has_next={is_has_next}
                is_has_prev={is_has_prev}
                handleNext={handleNext}
                handlePrev={handlePrev}
            >
                <video
                    className="w-100per max-h-100per"
                    src={video}
                    controls
                    preload="metadata"
                    alt=""
                />
            </CUPostDetailVidPic>
        </div>
    );
}

export default CUPostFixVideoRight;
