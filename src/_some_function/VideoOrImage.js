import React from 'react';

//
export const VideoOrImage = (vid_pic, type, video) => {
    if (!vid_pic) {
        return;
    }

    if (
        vid_pic.search(/(\.(png|jpg|jpeg|svg)$|data:image)/) >= 0 ||
        type.startsWith('image')
    ) {
        return <img src={vid_pic} alt="" />;
    } else if (vid_pic.search(/\.(mp4)$/) > 0 || type.startsWith('video')) {
        return video || <video src={vid_pic} alt="" />;
    }
};
