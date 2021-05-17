import React from 'react';
import PropTypes from 'prop-types';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
// 
import './ZoomPostCommonLeft.scss';

//
ZoomPostCommonLeft.propTypes = {};

//
function ZoomPostCommonLeft(props) {
    const { vid_pic, handleNextVidPic, handlePrevVidPic } = props;

    //
    return (
        <div className="ZoomPostCommonLeft">
            <div className="ZoomPostCommonLeft_vid-pic">
                <img className="wh-100" src={vid_pic} alt="" />
            </div>

            <div className="ZoomPostCommonLeft_btn ZoomPostCommonLeft_next">
                <div onClick={handleNextVidPic}>
                    <IconsArrow x={200} />
                </div>
            </div>

            <div className="ZoomPostCommonLeft_btn ZoomPostCommonLeft_prev">
                <div onClick={handlePrevVidPic}>
                    <IconsArrow x={400} />
                </div>
            </div>
        </div>
    );
}

export default ZoomPostCommonLeft;
