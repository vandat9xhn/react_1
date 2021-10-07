import React from 'react';
import PropTypes from 'prop-types';
//
import { useCropPic } from '../../_hooks/useCropPic';
//
import './CropPic.scss';

//
CropPic.propTypes = {};

//
function CropPic({
    old_point_top_left_obj,
    old_point_top_right_obj,
    old_point_bottom_right_obj,
    old_point_bottom_left_obj,

    pic_height,
    pic_width,

    handleCropEnd,
}) {
    //
    const {
        point_top_left_obj,
        point_top_right_obj,
        point_bottom_right_obj,
        point_bottom_left_obj,

        border_top_width,
        border_right_width,
        border_bottom_width,
        border_left_width,

        crop_width,
        crop_height,

        handleStartTopLeft,
        handleStartTopRight,
        handleStartBottomRight,
        handleStartBottomLeft,
    } = useCropPic({
        old_point_top_left_obj,
        old_point_top_right_obj,
        old_point_bottom_right_obj,
        old_point_bottom_left_obj,

        pic_height,
        pic_width,

        handleCropEnd: handleCropEnd,
    });

    //
    return (
        <div className="CropPic">
            <div
                className="CropPic_crop pos-abs"
                style={{
                    top: 0,
                    left: 0,

                    width: `${crop_width}px`,
                    height: `${crop_height}px`,

                    borderWidth: `${border_top_width}px ${border_right_width}px ${border_bottom_width}px ${border_left_width}px`,
                    borderStyle: 'solid',
                    borderColor: 'var(--shadow-5)',
                }}
            ></div>

            <div
                className="CropPic_border pos-abs"
                style={{
                    left: point_top_left_obj.x,
                    top: point_top_left_obj.y,

                    width: `${crop_width}px`,
                    height: `${crop_height}px`,
                }}
            ></div>

            <div>
                {[
                    {
                        ...point_top_left_obj,
                        handleStart: handleStartTopLeft,
                    },
                    {
                        ...point_top_right_obj,
                        handleStart: handleStartTopRight,
                    },
                    {
                        ...point_bottom_right_obj,
                        handleStart: handleStartBottomRight,
                    },
                    {
                        ...point_bottom_left_obj,
                        handleStart: handleStartBottomLeft,
                    },
                ].map((item, ix) => (
                    <div
                        key={ix}
                        className="CropPic_point"
                        style={{
                            left: item.x,
                            top: item.y,
                        }}
                        onMouseDown={item.handleStart}
                    >
                        <div className="CropPic_point_contain"></div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CropPic;
