import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { getDataCanvasRotate } from '../../../../../../../_some_function/getDataCanvasRotate';
import { getDataCanvasCrop } from '../../../../../../../_some_function/getDataCanvasCrop';
//
import CUPostFixHead from '../../../_components/fix_head/CUPostFixHead';
import CUPFixPhotoLeft from '../left/_main/CUPFixPhotoLeft';
import CUPostFixPhotoRight from '../right/_main/CUPostFixPhotoRight';
import CUPostConfirmBtns from '../../../_components/confirm_btns/CUPostConfirmBtns';
//
import './CUPostFixPhoto.scss';

//
CUPostFixPhoto.propTypes = {};

//
function CUPostFixPhoto({
    old_img,
    old_caption,
    vid_pic_ix,
    vid_pic_count,

    old_alt,
    old_alt_ix,
    old_rotate,

    handleNextPrev,
    handleConfirm,
    handleBack,
}) {
    //
    const [state_obj, setStateObj] = useState({
        img: old_img,
        caption: old_caption,
        choice_ix: -1,

        alt: old_alt,
        alt_ix: old_alt_ix,
        rotate_ix: [0, 90, 180, 270].indexOf(old_rotate),

        user_tag_arr: [] || [
            {
                id: 0,
                profile_model: 0,
                first_name: '',
                last_name: '',
                top: '50%',
                left: '50%',
            },
        ],
        show_tag_add: false,
        tag_add_x: 0,
        tag_add_y: 0,
    });

    const {
        img,
        caption,
        choice_ix,

        alt,
        alt_ix,
        rotate_ix,

        user_tag_arr,
        show_tag_add,
        tag_add_x,
        tag_add_y,
    } = state_obj;

    const has_change = (() => {
        if (caption != old_caption) {
            return true;
        }

        if (old_alt_ix != alt_ix) {
            return true;
        }

        if (alt_ix == 1 && old_alt != alt) {
            return true;
        }

        return false;
    })();

    //
    const ref_img = useRef(null);
    const ref_point_top_left_obj = useRef({ x: 0, y: 0 });
    const ref_point_top_right_obj = useRef({ x: 0, y: 0 });
    const ref_point_bottom_right_obj = useRef({ x: 0, y: 0 });
    const ref_point_bottom_left_obj = useRef({ x: 0, y: 0 });

    // -----

    //
    function getCropImg() {
        const width =
            ref_point_top_right_obj.current.x -
            ref_point_top_left_obj.current.x;
        const height =
            ref_point_bottom_left_obj.current.y -
            ref_point_top_left_obj.current.y;

        if (!width || !height) {
            return img;
        }

        const new_img = getDataCanvasCrop({
            img_elm: ref_img.current,
            ...ref_point_top_left_obj.current,
            width: width,
            height: height,
        });

        ref_point_top_left_obj.current = { x: 0, y: 0 };
        ref_point_top_right_obj.current = { x: width, y: 0 };
        ref_point_bottom_right_obj.current = { x: width, y: height };
        ref_point_bottom_left_obj.current = { x: 0, y: height };

        return new_img;
    }

    // ---- LEFT

    //
    function handleChangeCaption(e) {
        setStateObj({
            ...state_obj,
            caption: e.target.value,
        });
    }

    //
    function clickFixChoice(new_choice_ix = -1) {
        let new_img = img;
        let new_rotate_ix = rotate_ix;

        if (choice_ix == 0 && new_choice_ix != 1) {
            new_img = getCropImg();
        }

        if (new_choice_ix == 1) {
            const { width, height } = ref_img.current.getBoundingClientRect();

            new_rotate_ix = rotate_ix + 1 >= 4 ? 0 : rotate_ix + 1;
            new_img = getDataCanvasRotate({
                img: ref_img.current,
                width: width,
                height: height,
            });
        }

        const new_c_choice_ix =
            new_choice_ix == 1
                ? 1
                : choice_ix == new_choice_ix
                ? -1
                : new_choice_ix;

        setStateObj({
            ...state_obj,
            img: new_img,
            choice_ix: new_c_choice_ix,
            rotate_ix: new_rotate_ix,
            show_tag_add: false,
        });
    }

    //
    function chooseAlt(new_alt_ix) {
        setStateObj({
            ...state_obj,
            alt_ix: new_alt_ix,
        });
    }

    //
    function handleChangeAlt(e) {
        setStateObj({
            ...state_obj,
            alt: e.target.value,
        });
    }

    // ----- RIGHT

    //
    function handleCropEnd({
        point_top_left_obj,
        point_top_right_obj,
        point_bottom_right_obj,
        point_bottom_left_obj,
    }) {
        ref_point_top_left_obj.current = point_top_left_obj;
        ref_point_top_right_obj.current = point_top_right_obj;
        ref_point_bottom_right_obj.current = point_bottom_right_obj;
        ref_point_bottom_left_obj.current = point_bottom_left_obj;
    }

    //
    function handleStartTag(e) {
        setStateObj((state_obj) => {
            //
            const { top, left } = ref_img.current.getBoundingClientRect();
            const new_tag_add_x = e.clientX - left;
            const new_tag_add_y = e.clientY - top;

            return {
                ...state_obj,
                show_tag_add: true,
                tag_add_x: new_tag_add_x,
                tag_add_y: new_tag_add_y,
            };
        });
    }

    //
    function handleTagUser(user) {
        if (user_tag_arr.some((item) => item.profile_model == user.id)) {
            return;
        }

        setStateObj((state_obj) => {
            const new_user_tag_arr = [...state_obj.user_tag_arr];
            const { width, height } = ref_img.current.getBoundingClientRect();

            new_user_tag_arr.push({
                id: user.id,
                profile_model: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                top: `${(tag_add_y * 100) / height}%`,
                left: `${(tag_add_x * 100) / width}%`,
            });

            return {
                ...state_obj,
                user_tag_arr: new_user_tag_arr,
                show_tag_add: false,
            };
        });
    }

    //
    function handleDelTag(ix) {
        setStateObj((state_obj) => {
            const new_user_tag_arr = [...state_obj.user_tag_arr];
            new_user_tag_arr.splice(ix, 1);

            return {
                ...state_obj,
                user_tag_arr: new_user_tag_arr,
            };
        });
    }

    // --- NEXT PREV

    //
    function onNext() {
        handleNextPrev({ is_next: true, has_change: has_change });
    }
    //
    function onPrev() {
        handleNextPrev({ is_next: false, has_change: has_change });
    }

    // --- CONFIRM

    //
    function onConfirm() {
        handleConfirm(state_obj);
    }

    //
    function onBack() {
        handleBack({ has_change: has_change });
    }

    //
    return (
        <div className="CUPostFixPhoto">
            <div>
                <CUPostFixHead title="Photo detail" handleBack={handleBack} />
            </div>

            <div className="CUPostFixPhoto_row display-flex">
                <div className="CUPostFixPhoto_left display-flex flex-col cu-post-detail-left">
                    <div className="CUPostFixPhoto_left_contain flex-grow-1 padding-left-16px padding-right-10px padding-top-16px overflow-y-auto scroll-thin">
                        <CUPFixPhotoLeft
                            vid_pic_count={vid_pic_count}
                            caption={caption}
                            choice_ix={choice_ix}
                            // 
                            user_tag_arr={user_tag_arr}
                            alt={alt}
                            alt_ix={alt_ix}
                            //
                            handleChangeCaption={handleChangeCaption}
                            clickFixChoice={clickFixChoice}
                            handleDelTag={handleDelTag}
                            chooseAlt={chooseAlt}
                            handleChangeAlt={handleChangeAlt}
                        />
                    </div>

                    <div className="CUPostFixPhoto_confirm padding-10px">
                        <CUPostConfirmBtns
                            has_change={has_change}
                            handleConfirm={onConfirm}
                            handleCancel={onBack}
                        />
                    </div>
                </div>

                <div className="flex-grow-1">
                    <CUPostFixPhotoRight
                        img={img}
                        choice_ix={choice_ix}
                        rotate_ix={rotate_ix}
                        //
                        ref_img={ref_img}
                        point_top_left_obj={ref_point_top_left_obj.current}
                        point_top_right_obj={ref_point_top_right_obj.current}
                        point_bottom_right_obj={
                            ref_point_bottom_right_obj.current
                        }
                        point_bottom_left_obj={
                            ref_point_bottom_left_obj.current
                        }
                        //
                        user_tag_arr={user_tag_arr}
                        show_tag_add={show_tag_add}
                        tag_add_x={tag_add_x}
                        tag_add_y={tag_add_y}
                        //
                        is_has_next={vid_pic_ix < vid_pic_count - 1}
                        is_has_prev={vid_pic_ix >= 1}
                        //
                        handleNext={onNext}
                        handlePrev={onPrev}
                        //
                        handleCropEnd={handleCropEnd}
                        handleStartTag={handleStartTag}
                        handleTagUser={handleTagUser}
                        handleDelTag={handleDelTag}
                    />
                </div>
            </div>
        </div>
    );
}

export default CUPostFixPhoto;
