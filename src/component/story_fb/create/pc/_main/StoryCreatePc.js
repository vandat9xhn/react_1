import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
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
    });

    const { create_type } = state_obj;

    //
    useMakeBodyHidden({
        hidden_app: true,
        hidden_header: show_fav,
        blur_header: show_fav,
    });

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
    function openScreenStoryPic() {
        changeScreenStory('pic');
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
    function handleCloseScreen() {
        if (create_type == '') {
            history.back();

            return;
        }

        openScreenConfirm({
            openScreenFloor: openScreenFloor,
            title: 'Discard story?',
            notification:
                "Are you sure that you want to discard this story? Your story won't be saved.",
            handleConfirm: () => {
                history.back();
            },
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
                    openScreenStoryText={openScreenStoryText}
                    openScreenStoryPic={openScreenStoryPic}
                    handleCloseScreen={handleCloseScreen}
                />
            ) : create_type == 'text' ? (
                <StoryCreateTextPc
                    show_fav={show_fav}
                    handleCreate={handleCreate}
                    handleDiscard={handleDiscard}
                    handleClose={handleCloseScreen}
                />
            ) : (
                <StoryCreatePicPc
                    show_fav={show_fav}
                    handleClose={handleCloseScreen}
                />
            )}
        </div>
    );
}

export default StoryCreatePc;
