import React from 'react';
import PropTypes from 'prop-types';
//
import CUPostDetailVidPic from '../../../../_components/detail_vid_pic/CUPostDetailVidPic';
import CUPFPRightCrop from '../crop/CUPFPRightCrop';
import CUPFPRightTag from '../tag/_main/CUPFPRightTag';
//
import './CUPostFixPhotoRight.scss';
import CUPFPRightTagNote from '../tag/note/CUPFPRightTagNote';

//
CUPostFixPhotoRight.propTypes = {};

//
function CUPostFixPhotoRight({
    img,
    choice_ix,

    ref_img,
    point_top_left_obj,
    point_top_right_obj,
    point_bottom_right_obj,
    point_bottom_left_obj,

    user_tag_arr,
    show_tag_add,
    tag_add_x,
    tag_add_y,

    is_has_next,
    is_has_prev,

    handleNext,
    handlePrev,

    handleCropEnd,
    handleStartTag,
    handleTagUser,
    handleDelTag,
}) {
    //
    return (
        <div className="CUPostFixPhotoRight wh-100">
            <CUPostDetailVidPic
                thumbnail={img}
                is_has_next={is_has_next}
                is_has_prev={is_has_prev}
                handleNext={handleNext}
                handlePrev={handlePrev}
            >
                <React.Fragment>
                    <img
                        ref={ref_img}
                        className="max-w-100per max-h-100per"
                        src={img}
                        alt=""
                    />

                    {choice_ix == 0 && ref_img.current ? (
                        <CUPFPRightCrop
                            ref_img={ref_img}
                            point_top_left_obj={point_top_left_obj}
                            point_top_right_obj={point_top_right_obj}
                            point_bottom_right_obj={point_bottom_right_obj}
                            point_bottom_left_obj={point_bottom_left_obj}
                            handleCropEnd={handleCropEnd}
                        />
                    ) : null}

                    {ref_img.current ? (
                        <CUPFPRightTag
                            ref_img={ref_img}
                            user_tag_arr={user_tag_arr}
                            is_active={choice_ix == 2}
                            //
                            show_tag_add={show_tag_add}
                            tag_add_x={tag_add_x}
                            tag_add_y={tag_add_y}
                            //
                            handleStartTag={handleStartTag}
                            handleTagUser={handleTagUser}
                            handleDelTag={handleDelTag}
                        />
                    ) : null}

                    <div className="pos-abs bottom-0 x-center">
                        <CUPFPRightTagNote
                            is_show={user_tag_arr.length == 0 && choice_ix == 2}
                        />
                    </div>
                </React.Fragment>
            </CUPostDetailVidPic>
        </div>
    );
}

export default CUPostFixPhotoRight;
