import React, { useContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';
//
import './CUPostCommon.scss';
//
import CUPostHome from '../home/_main/CUPostHome';
import FixAll from '../fix_all/_main/FixAll';
import CUPostDetail from '../detail/_main/CUPostDetail';
//
import './CUPost.scss';
import './CUPostRes.scss';

//
CUPost.propTypes = {
    main_content: PropTypes.string,
    vid_pics: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            vid_pic: PropTypes.string,
            content: PropTypes.string,
            type: PropTypes.string,
            alt: PropTypes.string,
        })
    ),
    permission: PropTypes.number,

    title: PropTypes.string,
    title_action: PropTypes.string,
    chosen_vid_pic: PropTypes.bool,

    handleCUPost: PropTypes.func,
};

CUPost.defaultProps = {
    main_content: '',
    vid_pics: [] || [
        {
            id: 0,
            vid_pic: '',
            content: '',
            alt: '',
            type: '',
        },
    ],
    permission: 0,

    title: '',
    title_action: 'Post',
    chosen_vid_pic: false,
};

//
function CUPost({
    main_content: old_main_content,
    vid_pics: old_vid_pics,
    permission: old_permission,

    title,
    title_action,
    chosen_vid_pic,

    handleCUPost,
}) {
    //
    const { openScreenFloor, closeScreenFloor, detectScreenHasChange } =
        useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        main_content: old_main_content || '',
        c_vid_pics: JSON.parse(JSON.stringify(old_vid_pics)),
        permission: old_permission,

        created_arr: Array(old_vid_pics.length).fill(''),
        deleted_arr: [] || [-1],
        updated_arr: [] || [
            {
                id: -1,
                content: '',
            },
        ],

        is_loading: false,
        open_fix_ix: 0,
        detail_ix: -1,
    });

    const {
        main_content,
        c_vid_pics,
        permission,

        created_arr,
        deleted_arr,
        updated_arr,

        is_loading,
        open_fix_ix,
        detail_ix,
    } = state_obj;

    //
    const ref_input_file = useRef(null);

    //
    useMakeBodyHidden();

    //
    useEffect(() => {
        if (chosen_vid_pic) {
            ref_input_file.current.click();
        }
    }, []);

    // ------

    //
    function checkHasChange() {
        if (
            old_main_content != main_content ||
            created_arr.some((item) => item != '') ||
            deleted_arr.length ||
            updated_arr.length
        ) {
            return true;
        }

        return false;
    }

    //
    function getNewUpdatedArr(updated_id, content) {
        if (!updated_id) {
            return updated_arr;
        }

        const old_item = old_vid_pics.find((item) => item.id == updated_id);

        if (old_item.content == content) {
            return updated_arr.filter((item) => item.id != updated_id);
        }

        const new_updated_arr = [...updated_arr];

        const old_item_updated = new_updated_arr.find(
            (item) => item.id == updated_id
        );

        if (old_item_updated) {
            old_item_updated.content = content;
        } else {
            new_updated_arr.push({ id: updated_id, content: content });
        }

        return new_updated_arr;
    }

    // ------ CHANGE

    //
    function handleChoosePermission(new_permission) {
        setStateObj((state_obj) => ({
            ...state_obj,
            permission: new_permission,
        }));
    }

    //
    function handleChangeMainContent(value) {
        setStateObj((state_obj) => ({
            ...state_obj,
            main_content: value,
        }));
    }

    //
    function handleStartLoadFile() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_loading: true,
        }));
    }

    //
    function handleChooseFiles(data_files) {
        const { files, vid_pics } = data_files;

        const new_vid_pics = vid_pics.map((item) => {
            item.id = 0;
            item.content = '';
            item.alt = '';
            item.thumbnail = '';
            item.rotate = 0;

            return item;
        });

        setStateObj((state_obj) => ({
            ...state_obj,
            created_arr: [...created_arr, ...files],
            c_vid_pics: [...c_vid_pics, ...new_vid_pics],
            is_loading: false,
        }));
    }

    //
    function deleteAnItem(index) {
        const deleted_item = c_vid_pics[index];
        const new_c_vid_pics = c_vid_pics.filter((_, ix) => ix != index);

        deleted_item.id && deleted_arr.push(deleted_item.id);

        setStateObj((state_obj) => ({
            ...state_obj,
            c_vid_pics: new_c_vid_pics,
            created_arr: created_arr.filter((_, ix) => ix != index),
            open_fix_ix: new_c_vid_pics.length > 0 ? open_fix_ix : 0,
        }));
    }

    //
    function handleDelAllVidPic() {
        setStateObj((state_obj) => ({
            ...state_obj,

            c_vid_pics: [],
            created_arr: [],
            deleted_arr: c_vid_pics
                .filter((item) => item.id > 0)
                .map((item) => item.id),
            updated_arr: [],

            is_loading: false,
            open_fix_ix: 0,
            detail_ix: -1,
        }));
    }

    //
    function openDelAllVidPic() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Delete',
            notification: (
                <div className="text-red font-400">
                    Do you want to delete all photos/videos?
                </div>
            ),
            handleConfirm: handleDelAllVidPic,
        });
    }

    // ----- EDIT

    //
    function handleChangeContentVidPic(content, index) {
        const new_c_vid_pics = [...c_vid_pics];
        new_c_vid_pics[index].content = content;

        const updated_id = c_vid_pics[index].id;
        const new_updated_arr = getNewUpdatedArr(updated_id, content);

        setStateObj({
            ...state_obj,
            c_vid_pics: new_c_vid_pics,
            updated_arr: new_updated_arr,
        });
    }

    //
    function showFixAll() {
        if (c_vid_pics.length > 1) {
            setStateObj((state_obj) => ({
                ...state_obj,
                open_fix_ix: 1,
            }));
        } else if (c_vid_pics.length == 1) {
            setStateObj((state_obj) => ({
                ...state_obj,
                open_fix_ix: 2,
                detail_ix: 0,
            }));
        }
    }

    //
    function closeFixAll() {
        setStateObj((state_obj) => ({
            ...state_obj,
            open_fix_ix: 0,
        }));
    }

    // -----

    //
    function openFixDetail(new_vid_pic_ix) {
        setStateObj({
            ...state_obj,
            open_fix_ix: 2,
            detail_ix: new_vid_pic_ix,
        });
    }

    //
    function handleDetailBack() {
        setStateObj({
            ...state_obj,
            open_fix_ix: c_vid_pics.length == 1 ? 0 : 1,
            detail_ix: -1,
        });
    }

    //
    const has_change = checkHasChange();
    detectScreenHasChange(has_change);

    // -----

    //
    function onCUPost() {
        has_change && handleCUPost(state_obj);
    }

    //
    function handleClose() {
        if (has_change) {
            openScreenConfirm({
                openScreenFloor: openScreenFloor,
                title: 'Unsaved changes',
                notification: "Changes you've made will not be saved.",
                handleConfirm: closeScreenFloor,
            });
        } else {
            closeScreenFloor();
        }
    }

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
                            handleDetailBack={handleDetailBack}
                        />
                    </div>
                ) : null}
            </div>
        </div>
    );
}

export default CUPost;
