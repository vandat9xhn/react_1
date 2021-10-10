import React from 'react';
import PropTypes from 'prop-types';
//
import { data_story_bg_arr } from '../../../../../_data/story/text';
//
import {
    CUPost_propTypes,
    CUPost_defaultProps,
} from '../../../../../_prop-types/post/CUPost';
//
import { useCUPost } from '../../../../../_hooks/post/useCUPost';
//
import InputFile from '../../../../input/input_file/InputFile';
//
import CUPostHomeMb from '../home/_main/CUPostHomeMb';
import CUPostPhotoMb from '../photo/_main/CUPostPhotoMb';
import CUPostTagUsersMb from '../tag_users/_main/CUPostTagUsersMb';
//
import './CUPostMb.scss';

//
const BG_ARR = [
    {
        is_bg_img: false,
        bg: 'var(--md-bg-primary)',
        color: 'var(--color-333)',
    },
    {
        is_bg_img: false,
        bg: 'var(--green)',
        color: 'var(--white)',
    },
    {
        is_bg_img: false,
        bg: 'var(--heart)',
        color: 'var(--white)',
    },
    ...data_story_bg_arr.slice(0, 10).map((bg_img) => {
        return {
            is_bg_img: true,
            bg: bg_img,
            color: 'var(--white)',
        };
    }),
];

//
CUPostMb.propTypes = {
    ...CUPost_propTypes,
};

CUPostMb.defaultProps = {
    ...CUPost_defaultProps,
};

//
function CUPostMb({
    main_content: old_main_content,
    vid_pics: old_vid_pics,
    permission: old_permission,
    user_tag_arr: old_user_tag_arr,

    title,
    title_action,
    chosen_vid_pic,

    handleCUPost,
}) {
    //
    const {
        state_obj,
        setStateObj,

        ref_input_file,
        has_change,

        openHome,
        openFixAll,
        openDetail,
        openTag,
        openEmoji,

        handleChoosePermission,
        handleChangeMainContent,
        handleChangeTag,

        handleStartLoadFile,
        handleChooseFiles,
        deleteAnItem,
        openDelAllVidPic,

        handleChangeContentVidPic,
        handleChooseBg,

        confirmDetailImg,
        confirmDetailVideo,
        handleDetailBack,

        onCUPost,
        handleClose,
    } = useCUPost({
        old_main_content: old_main_content,
        old_vid_pics: old_vid_pics,
        old_permission: old_permission,
        old_user_tag_arr: old_user_tag_arr,

        chosen_vid_pic: chosen_vid_pic,
        handleCUPost: handleCUPost,
    });

    const {
        permission,
        main_content,
        c_vid_pics,
        user_tag_arr,

        created_arr,
        deleted_arr,
        updated_arr,

        cu_post_part,
        detail_ix,
        bg_ix,

        is_loading,
        changed_detail,
    } = state_obj;

    // -----

    //
    function chooseVidPic() {
        ref_input_file.current.click();
    }

    // ----

    //
    function confirmChangeVidPicMb({ caption }) {
        confirmDetailImg({
            vid_pic_ix: detail_ix,
            img: c_vid_pics[detail_ix].vid_pic,
            caption: caption,
            alt: c_vid_pics[detail_ix].alt,
            user_tag_arr: c_vid_pics[detail_ix].user_tag_arr,
        });
    }

    //
    return (
        <div className="CUPostMb bg-primary">
            <div className={`${cu_post_part == 'home' ? '' : 'display-none'}`}>
                <CUPostHomeMb
                    title={title}
                    title_action={title_action}
                    permission={permission}
                    //
                    main_content={main_content}
                    bg_arr={BG_ARR}
                    bg_ix={bg_ix}
                    vid_pics={c_vid_pics}
                    user_tag_arr={user_tag_arr}
                    //
                    has_change={has_change}
                    //
                    openEditPhoto={openDetail}
                    openTagUsers={openTag}
                    //
                    handleChoosePermission={handleChoosePermission}
                    changeMainContent={handleChangeMainContent}
                    handleChooseBg={handleChooseBg}
                    chooseVidPic={chooseVidPic}
                    handleDelVidPic={deleteAnItem}
                    //
                    handleCUPost={onCUPost}
                    handleClose={handleClose}
                />
            </div>

            {cu_post_part == 'detail' ? (
                <div>
                    <CUPostPhotoMb
                        img={c_vid_pics[detail_ix].vid_pic}
                        text={c_vid_pics[detail_ix].content}
                        handleConfirm={confirmChangeVidPicMb}
                        handleBackHome={openHome}
                    />
                </div>
            ) : cu_post_part == 'tag' ? (
                <CUPostTagUsersMb
                    user_tag_arr={user_tag_arr}
                    handleChangeTag={handleChangeTag}
                    handleBackHome={openHome}
                />
            ) : null}

            <div className="display-none">
                <InputFile
                    accept="image/**,video/**"
                    file_multiple={true}
                    face_circle={false}
                    handleChange={handleChooseFiles}
                >
                    <div ref={ref_input_file}></div>
                </InputFile>
            </div>
        </div>
    );
}

export default CUPostMb;
