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
        <div className="ZoomPostCommonLeft wh-100 padding-x-10px">
            <div className="pos-rel display-flex-center wh-100">
                <div className="ZoomPostCommonLeft_vid-pic display-flex-center">
                    <img
                        className="max-w-100per max-h-100per object-fit-cover"
                        src={vid_pic}
                        alt=""
                    />
                </div>

                <div className="text-smoke">
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
            </div>
        </div>
    );
}

export default ZoomPostCommonLeft;
