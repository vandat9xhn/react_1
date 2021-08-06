import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../_hooks/useMakeBodyHidden';
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
}

//
function StoryCreatePc({ show_fav, closeScreen }) {
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
    function openScreenStoryText() {
        setStateObj((state_obj) => ({
            ...state_obj,
            create_type: 'text',
        }));
    }

    //
    function openScreenStoryPic() {
        setStateObj((state_obj) => ({
            ...state_obj,
            create_type: 'pic',
        }));
    }

    //
    function handleCloseScreen() {}

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
