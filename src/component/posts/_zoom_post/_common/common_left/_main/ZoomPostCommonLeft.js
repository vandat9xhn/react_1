import React from 'react';
import PropTypes from 'prop-types';
//
import NextPrevDiv from '../../../../../some_div/next_prev_div/NextPrevDiv';
//
import ZoomPostCommonLeftImg from '../img/ZoomPostCommonLeftImg';
import ZoomPostCommonLeftVideo from '../video/ZoomPostCommonLeftVideo';
//
import './ZoomPostCommonLeft.scss';

//
ZoomPostCommonLeft.propTypes = {};

//
function ZoomPostCommonLeft({
    vid_pic,
    is_live,
    video_or_img,
    is_fetching,

    is_has_next,
    is_has_prev,

    handleNextVidPic,
    handlePrevVidPic,
}) {
    //
    return (
        <div className="ZoomPostCommonLeft wh-100">
            <div className="pos-rel display-flex-center wh-100">
                <div className="ZoomPostCommonLeft_item display-flex-center">
                    {is_fetching ? null : video_or_img == 'img' ? (
                        <ZoomPostCommonLeftImg img={vid_pic} />
                    ) : (
                        <ZoomPostCommonLeftVideo
                            video={vid_pic}
                            is_live={is_live}
                        />
                    )}
                </div>

                <div className="text-555">
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
