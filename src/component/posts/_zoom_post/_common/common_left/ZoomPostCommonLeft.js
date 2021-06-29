import React from 'react';
import PropTypes from 'prop-types';
//
import NextPrevDiv from '../../../../some_div/next_prev_div/NextPrevDiv';
//
import './ZoomPostCommonLeft.scss';

//
ZoomPostCommonLeft.propTypes = {};

//
function ZoomPostCommonLeft({
    vid_pic,
    is_has_next,
    is_has_prev,
    
    handleNextVidPic,
    handlePrevVidPic,
}) {
    //
    return (
        <div className="ZoomPostCommonLeft">
            <div className="ZoomPostCommonLeft_vid-pic">
                <img className="wh-100" src={vid_pic} alt="" />
            </div>

            <NextPrevDiv
                is_btn_circle={true}
                is_has_next={is_has_next}
                is_has_prev={is_has_prev}
                // size_icon=""
                //
                handleNext={handleNextVidPic}
                handlePrev={handlePrevVidPic}
            />
        </div>
    );
}

export default ZoomPostCommonLeft;
