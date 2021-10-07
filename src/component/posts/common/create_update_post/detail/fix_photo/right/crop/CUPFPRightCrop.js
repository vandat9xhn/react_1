import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import CropPic from '../../../../../../../crop_pic/CropPic';

//
CUPFPRightCrop.propTypes = {};

//
function CUPFPRightCrop({
    ref_img,

    point_top_left_obj,
    point_top_right_obj,
    point_bottom_right_obj,
    point_bottom_left_obj,

    handleCropEnd,
}) {
    //
    const { width, height } = ref_img.current.getBoundingClientRect();

    //
    return (
        <div
            className="CUPFPRightCrop pos-abs-center"
            style={{ width: width, height: height }}
        >
            <CropPic
                old_point_top_left_obj={point_top_left_obj}
                old_point_top_right_obj={point_top_right_obj}
                old_point_bottom_right_obj={point_bottom_right_obj}
                old_point_bottom_left_obj={point_bottom_left_obj}
                pic_width={width}
                pic_height={height}
                handleCropEnd={handleCropEnd}
            />
        </div>
    );
}

export default CUPFPRightCrop;
