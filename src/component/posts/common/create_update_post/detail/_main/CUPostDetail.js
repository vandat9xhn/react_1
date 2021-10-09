import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
//
import { getTypeVidOrPic } from '../../../../../../_some_function/VideoOrImage';
//
import { openScreenConfirm } from '../../../../../_screen/type/confirm/ScreenConfirm';
//
import CUPostFixPhoto from '../fix_photo/_main/CUPostFixPhoto';
import CUPostFixVideo from '../fix_video/_main/CUPostFixVideo';
//
import './CUPostDetail.scss';

//
function openConfirmUnsaved({ openScreenFloor, handleConfirm }) {
    openScreenConfirm({
        openScreenFloor: openScreenFloor,
        title: 'Unsaved changes',
        notification: "If you discard now, you'll lose any changes.",
        handleConfirm: handleConfirm,
        title_yes: 'Discard',
        title_no: 'Continue Edditing',
        reversed_btn: true,
    });
}

//
CUPostDetail.propTypes = {};

//
function CUPostDetail({
    vid_pics,
    detail_ix,

    confirmDetailImg,
    confirmDetailVideo,
    handleDetailBack,
}) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        vid_pic_ix: detail_ix,
    });

    const { vid_pic_ix } = state_obj;

    const { vid_pic, content, alt, thumbnail, user_tag_arr } =
        vid_pics[vid_pic_ix];

    // ----

    //
    function handleNextPrev(is_next = true) {
        const new_vid_pic_ix = is_next ? vid_pic_ix + 1 : vid_pic_ix - 1;

        if (new_vid_pic_ix < 0 || new_vid_pic_ix >= vid_pics.length) {
            return;
        }

        setStateObj({
            ...state_obj,
            vid_pic_ix: new_vid_pic_ix,
        });
    }

    //
    function onNextPrev({ is_next = true, has_change = false }) {
        if (!has_change) {
            handleNextPrev(is_next);
        } else {
            openConfirmUnsaved({
                openScreenFloor: openScreenFloor,
                handleConfirm: () => {
                    handleNextPrev(is_next);
                },
            });
        }
    }

    //
    function onBack({ has_change }) {
        if (!has_change) {
            handleDetailBack();
        } else {
            openConfirmUnsaved({
                openScreenFloor: openScreenFloor,
                handleConfirm: handleDetailBack,
            });
        }
    }

    //
    return (
        <div
            key={vid_pic_ix}
            className="CUPostDetail margin-auto brs-8px bg-primary box-shadow-fb user-select-none"
        >
            {getTypeVidOrPic(vid_pic) == 'img' ? (
                <CUPostFixPhoto
                    old_img={vid_pic}
                    old_caption={content}
                    old_user_tag_arr={user_tag_arr}
                    old_alt={alt}
                    //
                    vid_pic_count={vid_pics.length}
                    vid_pic_ix={vid_pic_ix}
                    //
                    handleNextPrev={onNextPrev}
                    confirmDetailImg={confirmDetailImg}
                    handleBack={onBack}
                />
            ) : (
                <CUPostFixVideo
                    video={vid_pic}
                    old_caption={content}
                    vid_pic_ix={vid_pic_ix}
                    vid_pic_count={vid_pics.length}
                    old_thumbnail={thumbnail}
                    //
                    handleNextPrev={onNextPrev}
                    confirmDetailVideo={confirmDetailVideo}
                    handleBack={onBack}
                />
            )}
        </div>
    );
}

export default CUPostDetail;
