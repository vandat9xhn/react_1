import React from 'react';
import PropTypes from 'prop-types';
//
import ZoomVidPicItem from '../../../posts/_zoom_post/zoom_vid_pic/_main/ZoomVidPicItem';

//
export function openScreenPostVidPic({
    openScreenFloor,

    show_screen_title,
    handleDeleteVidPicPost,
    ...other_props
}) {
    openScreenFloor({
        FloorComponent: ZoomVidPicPost,
        show_screen_title: show_screen_title,
        handleDeleteVidPicPost: handleDeleteVidPicPost,
        ...other_props,
    });
}

//
ZoomVidPicPost.propTypes = {};

//
function ZoomVidPicPost({
    closeScreen,
    show_screen_title,
    handleDeleteVidPicPost,
}) {
    return (
        <ZoomVidPicItem
            show_screen_title={show_screen_title}
            closeScreenTitle={closeScreen}
            handleDeleteVidPicPost={handleDeleteVidPicPost}
        />
    );
}

export default ZoomVidPicPost;
