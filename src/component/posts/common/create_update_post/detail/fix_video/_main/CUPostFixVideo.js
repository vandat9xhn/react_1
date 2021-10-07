import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
//
import CUPostFixHead from '../../../_components/fix_head/CUPostFixHead';
import CUPFixVideoLeft from '../left/_main/CUPFixVideoLeft';
import CUPostFixVideoRight from '../right/_main/CUPostFixVideoRight';
import CUPostConfirmBtns from '../../../_components/confirm_btns/CUPostConfirmBtns';
//
import './CUPostFixVideo.scss';

//
CUPostFixVideo.propTypes = {};

//
function CUPostFixVideo({
    video,
    old_caption,
    old_thumbnail,

    vid_pic_count,
    vid_pic_ix,

    handleNextPrev,
    handleConfirm,
    handleBack,
}) {
    //
    const [state_obj, setStateObj] = useState({
        caption: old_caption,
        srt_file: null,
        thumbnail: old_thumbnail,
        thumbnail_ix: 0,
        thumbnail_upload: '',
    });

    const { caption, thumbnail, thumbnail_ix, thumbnail_upload } = state_obj;

    const has_change = (() => {
        if (caption != old_caption) {
            return true;
        }

        if (thumbnail_ix == 1 && old_thumbnail != thumbnail) {
            return true;
        }

        return false;
    })();

    // ---- LEFT

    //
    function handleChangeCaption(e) {
        setStateObj({
            ...state_obj,
            caption: e.target.value,
        });
    }

    //
    function handleChangeSrt(params) {
        console.log(params);
    }

    //
    function chooseThumbnail(new_thumbnail_ix) {
        setStateObj({
            ...state_obj,
            thumbnail_ix: new_thumbnail_ix,
        });
    }

    //
    function changeThumbnailUpload({ vid_pics, files }) {
        setStateObj({
            ...state_obj,
            thumbnail_upload: vid_pics[0].img,
        });
    }

    //
    function deleteThumbnailUpload() {
        setStateObj({
            ...state_obj,
            thumbnail_upload: '',
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
        <div className="CUPostFixVideo">
            <div>
                <CUPostFixHead title="Video detail" handleBack={handleBack} />
            </div>
            <div className="CUPostFixVideo_row display-flex">
                <div className="CUPostFixVideo_left display-flex flex-col cu-post-detail-left">
                    <div className="CUPostFixVideo_left_contain flex-grow-1 padding-left-16px padding-right-10px padding-top-16px overflow-y-auto scroll-thin">
                        <CUPFixVideoLeft
                            caption={caption}
                            vid_pic_count={vid_pic_count}
                            thumbnail_ix={thumbnail_ix}
                            thumbnail_upload={thumbnail_upload}
                            //
                            handleChangeCaption={handleChangeCaption}
                            handleChangeSrt={handleChangeSrt}
                            //
                            chooseThumbnail={chooseThumbnail}
                            changeThumbnailUpload={changeThumbnailUpload}
                            deleteThumbnailUpload={deleteThumbnailUpload}
                        />
                    </div>

                    <div className="CUPostFixVideo_confirm padding-10px font-600">
                        <CUPostConfirmBtns
                            has_change={has_change}
                            handleConfirm={onConfirm}
                            handleCancel={onBack}
                        />
                    </div>
                </div>

                <div className="flex-grow-1">
                    <CUPostFixVideoRight
                        video={video}
                        thumbnail={thumbnail}
                        is_has_next={vid_pic_ix < vid_pic_count - 1}
                        is_has_prev={vid_pic_ix >= 1}
                        handleNext={onNext}
                        handlePrev={onPrev}
                    />
                </div>
            </div>
        </div>
    );
}

export default CUPostFixVideo;
