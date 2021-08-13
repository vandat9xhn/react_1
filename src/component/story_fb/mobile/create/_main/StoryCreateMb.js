import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { openScreenConfirm } from '../../../../_screen/type/confirm/ScreenConfirm';
import { openScreenPermission } from '../../../../_screen/type/permission/_main/ScreenPermission';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
//
import StoryCHomeMb from '../home/_main/StoryCHomeMb';
import StoryCreateTextMb from '../text/_main/StoryCreateTextMb';
import StoryCreatePicMb from '../pic/_main/StoryCreatePicMb';

//
StoryCreateMb.propTypes = {
    closeScreen: PropTypes.func,
};

//
function StoryCreateMb({ closeScreen }) {
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
    useMakeBodyHidden({
        hidden_app: true,
        hidden_header: true,
        blur_header: true,
    });

    /* ---- TYPE ---- */

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

    /* ----- PERMISSION + CREATE ---- */

    //
    function handleChoosePermission(ix) {
        setStateObj({
            ...state_obj,
            permission: ix,
        });
    }

    //
    function openPrivacy() {
        openScreenPermission({
            openScreenFloor: openScreenFloor,
            permission: permission,
            handleChoosePermission: handleChoosePermission,
        });
    }

    /* ----- CREATE ----- */

    //
    function handleCreateStory(data) {
        console.log(data);
    }

    /* ----- DISCARD ----- */

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
    function handleDiscardText(has_text = false) {
        if (has_text) {
            handleDiscard();
        } else {
            changeScreenStory();
        }
    }

    //
    function handleCloseStoryCreate() {
        closeScreen();
    }

    //
    // function handleCloseScreen() {
    //     if (create_type == '') {
    //         handleCloseStoryCreate();

    //         return;
    //     }

    //     openScreenConfirm({
    //         openScreenFloor: openScreenFloor,
    //         title: 'Discard story?',
    //         notification:
    //             "Are you sure that you want to discard this story? Your story won't be saved.",
    //         handleConfirm: handleCloseStoryCreate,
    //     });
    // }

    //
    return (
        <div className="StoryCreateMb wh-100v">
            {create_type == '' ? (
                <StoryCHomeMb
                    openScreenStoryText={openScreenStoryText}
                    openScreenStoryPic={openScreenStoryPic}
                />
            ) : create_type == 'text' ? (
                <StoryCreateTextMb
                    handleCreateStory={handleCreateStory}
                    openPrivacy={openPrivacy}
                    handleDiscard={handleDiscardText}
                />
            ) : (
                <StoryCreatePicMb
                    vid_pic={vid_pic}
                    handleCreateStory={handleCreateStory}
                    openPrivacy={openPrivacy}
                    handleDiscard={handleDiscardText}
                />
            )}
        </div>
    );
}

export default StoryCreateMb;
