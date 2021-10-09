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
//
import './CUPost.scss';

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

        handleChoosePermission,
        handleChangeMainContent,
        handleStartLoadFile,
        handleChooseFiles,
        deleteAnItem,
        openDelAllVidPic,

        handleChangeContentVidPic,
        showFixAll,
        closeFixAll,

        openFixDetail,
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
        chosen_vid_pic: chosen_vid_pic,
        handleCUPost: handleCUPost,
    });

    const {
        main_content,
        c_vid_pics,
        permission,
        user_tag_arr,

        created_arr,
        deleted_arr,
        updated_arr,

        is_loading,
        open_fix_ix,
        detail_ix,
        changed_detail,
    } = state_obj;

    //
    return (
        <div className="CUPost scroll-width-0">
            <div className="CUPost_row">
                <div
                    className={`CUPost_home ${
                        open_fix_ix == 0 ? '' : 'display-none'
                    }`}
                >
                    <CUPostHome
                        main_content={main_content}
                        vid_pics={c_vid_pics}
                        title={title}
                        title_action={title_action}
                        permission={permission}
                        //
                        ref_input_file={ref_input_file}
                        has_change={has_change}
                        is_loading={is_loading}
                        //
                        handleChangeMainContent={handleChangeMainContent}
                        handleChoosePermission={handleChoosePermission}
                        showFixAll={showFixAll}
                        delAllVidPic={openDelAllVidPic}
                        //
                        handleStartLoadFile={handleStartLoadFile}
                        handleChooseFiles={handleChooseFiles}
                        handleCUPost={onCUPost}
                        handleClose={handleClose}
                    />
                </div>

                {open_fix_ix == 1 ? (
                    <div>
                        <FixAll
                            open_fix_ix={open_fix_ix}
                            vid_pics={c_vid_pics}
                            //
                            openFixDetail={openFixDetail}
                            handleChangeContentVidPic={
                                handleChangeContentVidPic
                            }
                            handleChooseFiles={handleChooseFiles}
                            closeFixAll={closeFixAll}
                            deleteAnItem={deleteAnItem}
                        />
                    </div>
                ) : null}

                {open_fix_ix == 2 ? (
                    <div>
                        <CUPostDetail
                            vid_pics={c_vid_pics}
                            detail_ix={detail_ix}
                            confirmDetailImg={confirmDetailImg}
                            confirmDetailVideo={confirmDetailVideo}
                            handleDetailBack={handleDetailBack}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default CUPost;
