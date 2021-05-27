import React from 'react';

//
export const VideoOrImage = (vid_pic, type, video) => {
    if (!vid_pic) {
        return;
    }

    if (
        /(\.(png|jpg|jpeg|svg)$|data:image)/.test(vid_pic) ||
        type.startsWith('image')
    ) {
        return <img src={vid_pic} alt="" />;
    }

    if (/\.(mp4)$/.test(vid_pic) || type.startsWith('video')) {
        return video || <video src={vid_pic} alt="" />;
    }
};
