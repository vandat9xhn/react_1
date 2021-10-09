import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { getThumbnailVideo } from '../../../../../../../_some_function/getThumbnailVideo';
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
    confirmDetailVideo,
    handleBack,
}) {
    //
    const [state_obj, setStateObj] = useState({
        caption: old_caption,
        srt_file: null,

        thumbnail_ix: -1,

        thumbnail_upload: '',
        thumbnail_suggeted_arr: [''],
        thumbnail_suggeted_ix: 0,
    });

    const {
        caption,
        srt_file,
        thumbnail_ix,

        thumbnail_upload,
        thumbnail_suggeted_arr,
        thumbnail_suggeted_ix,
    } = state_obj;

    const thumbnail =
        (thumbnail_ix == -1
            ? ''
            : [
                  thumbnail_suggeted_arr[thumbnail_suggeted_ix],
                  thumbnail_upload,
                  '',
              ][thumbnail_ix]) || old_thumbnail;

    const has_change = (() => {
        if (caption != old_caption) {
            return true;
        }

        if (old_thumbnail != thumbnail) {
            return true;
        }

        if (srt_file) {
            return true;
        }

        return false;
    })();

    //
    useEffect(() => {
        getThumbnailSuggestedArr();
    }, []);

    // ----

    //
    async function getThumbnailSuggestedArr() {
        getThumbnailVideo({
            video_src: video,
            c_time_arr: [0, 1, 2, 3, 4],
            callback: (thumbnail_arr) => {
                setStateObj({
                    ...state_obj,
                    thumbnail_suggeted_arr: thumbnail_arr,
                });
            },
        });
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
    function handleChangeSrt(params) {
        console.log(params);
    }

    // ----- THUMBNAIL

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

    //
    function nextThumbnailSuggested() {
        const new_thumbnail_suggeted_ix = thumbnail_suggeted_ix + 1;

        if (new_thumbnail_suggeted_ix <= thumbnail_suggeted_arr.length - 1) {
            setStateObj({
                ...state_obj,
                thumbnail_suggeted_ix: new_thumbnail_suggeted_ix,
            });
        }
    }

    //
    function prevThumbnailSuggested() {
        const new_thumbnail_suggeted_ix = thumbnail_suggeted_ix - 1;

        if (new_thumbnail_suggeted_ix >= 0) {
            setStateObj({
                ...state_obj,
                thumbnail_suggeted_ix: new_thumbnail_suggeted_ix,
            });
        }
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
        confirmDetailVideo({
            vid_pic_ix: vid_pic_ix,
            caption: caption,
            srt_file: srt_file,
            thumbnail: thumbnail,
        });
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
                            //
                            thumbnail_ix={thumbnail_ix}
                            thumbnail_upload={thumbnail_upload}
                            thumbnail_suggeted_arr={thumbnail_suggeted_arr}
                            thumbnail_suggeted_ix={thumbnail_suggeted_ix}
                            //
                            handleChangeCaption={handleChangeCaption}
                            handleChangeSrt={handleChangeSrt}
                            //
                            chooseThumbnail={chooseThumbnail}
                            changeThumbnailUpload={changeThumbnailUpload}
                            deleteThumbnailUpload={deleteThumbnailUpload}
                            nextThumbnailSuggested={nextThumbnailSuggested}
                            prevThumbnailSuggested={prevThumbnailSuggested}
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
