import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';
//
import './StoryCreatePcCommon.scss';
//
import StoryCreateHomePc from '../home/_main/StoryCreateHomePc';
import StoryCreateTextPc from '../text/_main/StoryCreateTextPc';
import StoryCreatePicPc from '../pic/_main/StoryCreatePicPc';
//
import './StoryCreatePc.scss';

//
StoryCreatePc.propTypes = {
    show_fav: PropTypes.bool,
    closeScreen: PropTypes.func,
};

StoryCreatePc.defaultProps = {
    show_fav: false,
};

//
function StoryCreatePc({ show_fav, closeScreen }) {
    //
    const { openScreenFloor } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        create_type: '',
        vid_pic: '',
        vid_pic_width: 0,
        permission: 0,
    });

    const { create_type, vid_pic, vid_pic_width, permission } = state_obj;

    // 
    useEffect(() => {
        document.title = 'Create story'
    }, [])

    //
    function changeScreenStory(new_type = '') {
        setStateObj((state_obj) => ({
            ...state_obj,
            create_type: new_type,
        }));
    }

    //
    function openScreenStoryText() {
        changeScreenStory('text');
    }

    //
    function openScreenStoryPic(data_files) {
        const new_vid_pic = data_files.vid_pics[0].vid_pic;
        const files = data_files.files;

        console.log(files);

        setStateObj({
            ...state_obj,
            create_type: 'pic',
            vid_pic: new_vid_pic,
        });
    }

    //
    function handleChoosePermission(ix) {
        setStateObj({
            ...state_obj,
            permission: ix,
        });
    }

    //
    function handleCreate(data) {
        console.log(data);
    }

    //
    function handleDiscard() {
        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Discard story?',
            notification:
                "Are you sure that you want to discard this story? Your story won't be saved.",
            handleConfirm: changeScreenStory,
        });
    }

    //
    function handleCloseStoryCreate() {
        closeScreen();
    }

    //
    function handleCloseScreen() {
        if (create_type == '') {
            handleCloseStoryCreate();

            return;
        }

        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Discard story?',
            notification:
                "Are you sure that you want to discard this story? Your story won't be saved.",
            handleConfirm: handleCloseStoryCreate,
        });
    }

    //
    return (
        <div
            className={`StoryCreatePc ${
                show_fav ? 'StoryCreatePc_has_fav' : 'StoryCreatePc_not_fav'
            }`}
        >
            {create_type == '' ? (
                <StoryCreateHomePc
                    show_fav={show_fav}
                    permission={permission}
                    handleChoosePermission={handleChoosePermission}
                    openScreenStoryText={openScreenStoryText}
                    openScreenStoryPic={openScreenStoryPic}
                    handleCloseScreen={handleCloseScreen}
                />
            ) : create_type == 'text' ? (
                <StoryCreateTextPc
                    show_fav={show_fav}
                    permission={permission}
                    handleChoosePermission={handleChoosePermission}
                    handleCreate={handleCreate}
                    handleDiscard={handleDiscard}
                    handleClose={handleCloseScreen}
                />
            ) : (
                <StoryCreatePicPc
                    show_fav={show_fav}
                    vid_pic={vid_pic}
                    vid_pic_width={vid_pic_width}
                    permission={permission}
                    handleChoosePermission={handleChoosePermission}
                    handleCreate={handleCreate}
                    handleDiscard={handleDiscard}
                    handleClose={handleCloseScreen}
                />
            )}
        </div>
    );
}

export default StoryCreatePc;
