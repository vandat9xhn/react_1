import React from 'react';
import PropTypes from 'prop-types';
//
import {
    CUPost_propTypes,
    CUPost_defaultProps,
} from '../../../../../_prop-types/post/CUPost';
//
import { useCUPost } from '../../../../../_hooks/post/useCUPost';
//
import './CUPostCommon.scss';
//
import CUPostHome from '../home/_main/CUPostHome';
import FixAll from '../fix_all/_main/FixAll';
import CUPostDetail from '../detail/_main/CUPostDetail';
import CUPostTagUsers from '../tag_uses/_main/CUPostTagUsers';
import CUPostEmoji from '../emoji/_main/CUPostEmoji';
//
import './CUPost.scss';
import CUPostMoreInput from '../more_input/_main/CUPostMoreInput';

//
CUPost.propTypes = {
    ...CUPost_propTypes,
};

CUPost.defaultProps = {
    ...CUPost_defaultProps,
};

//
function CUPost({
    main_content: old_main_content,
    vid_pics: old_vid_pics,
    permission: old_permission,
    user_tag_arr: old_user_tag_arr,
    emoji_obj: old_emoji_obj,

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

        openCUPostPart,
        openHome,
        openFixAll,
        openDetail,
        openTag,
        openEmoji,
        openMoreInput,

        handleChoosePermission,
        handleChangeMainContent,
        handleChangeTag,
        changeEmoji,

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
        old_permission: old_permission,
        old_main_content: old_main_content,
        old_vid_pics: old_vid_pics,
        user_tag_arr: old_user_tag_arr,
        old_emoji_obj: old_emoji_obj,
        chosen_vid_pic: chosen_vid_pic,
        handleCUPost: handleCUPost,
    });

    const {
        main_content,
        c_vid_pics,
        permission,
        user_tag_arr,
        emoji_obj,

        created_arr,
        deleted_arr,
        updated_arr,

        is_loading,
        cu_post_part,
        detail_ix,
        changed_detail,
    } = state_obj;

    // -------

    //
    function handleMoreInputVidPic() {
        setStateObj((state_obj) => {
            return {
                ...state_obj,
                cu_post_part: 'home',
            };
        });

        ref_input_file.current.click();
    }

    //
    return (
        <div className="CUPost scroll-width-0">
            <div className="CUPost_row">
                <div
                    className={`${
                        cu_post_part == 'home' ? '' : 'display-none'
                    }`}
                >
                    <CUPostHome
                        title={title}
                        title_action={title_action}
                        //
                        main_content={main_content}
                        vid_pics={c_vid_pics}
                        permission={permission}
                        user_tag_arr={user_tag_arr}
                        emoji_obj={emoji_obj}
                        //
                        ref_input_file={ref_input_file}
                        has_change={has_change}
                        is_loading={is_loading}
                        //
                        handleChangeMainContent={handleChangeMainContent}
                        handleChoosePermission={handleChoosePermission}
                        showFixAll={openFixAll}
                        delAllVidPic={openDelAllVidPic}
                        //
                        handleStartLoadFile={handleStartLoadFile}
                        handleChooseFiles={handleChooseFiles}
                        openTagUsers={openTag}
                        openEmoji={openEmoji}
                        openMoreInput={openMoreInput}
                        //
                        handleCUPost={onCUPost}
                        handleClose={handleClose}
                    />
                </div>

                <div>
                    {cu_post_part == 'fix_all' ? (
                        <FixAll
                            cu_post_part={cu_post_part}
                            vid_pics={c_vid_pics}
                            //
                            handleBackHome={openHome}
                            openDetail={openDetail}
                            handleChangeContentVidPic={
                                handleChangeContentVidPic
                            }
                            handleChooseFiles={handleChooseFiles}
                            deleteAnItem={deleteAnItem}
                        />
                    ) : cu_post_part == 'detail' ? (
                        <CUPostDetail
                            vid_pics={c_vid_pics}
                            detail_ix={detail_ix}
                            confirmDetailImg={confirmDetailImg}
                            confirmDetailVideo={confirmDetailVideo}
                            handleDetailBack={handleDetailBack}
                        />
                    ) : cu_post_part == 'tag' ? (
                        <CUPostTagUsers
                            user_tag_arr={user_tag_arr}
                            handleChangeTag={handleChangeTag}
                            handleBackHome={openHome}
                        />
                    ) : cu_post_part == 'emoji' ? (
                        <CUPostEmoji
                            emoji_obj={emoji_obj}
                            changeEmoji={changeEmoji}
                            handleBackHome={openHome}
                        />
                    ) : cu_post_part == 'more_input' ? (
                        <CUPostMoreInput
                            vid_pic_checked={c_vid_pics.length > 0}
                            tag_checked={user_tag_arr.length > 0}
                            emoji_checked={emoji_obj.id && emoji_obj.id > 0}
                            openCUPostPart={openCUPostPart}
                            handleMoreInputVidPic={handleMoreInputVidPic}
                        />
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default CUPost;
