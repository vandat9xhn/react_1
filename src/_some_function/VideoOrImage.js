import React from 'react';

//
export const getTypeVidOrPic = (vid_pic = '', type = '') => {
    // 
    if (type) {
        if (type.startsWith('image')) {
            return 'img';
        }

        if (type.startsWith('video')) {
            return 'video';
        }
    }

    // 
    if (/(\.(mp4)$|data:video)/.test(vid_pic)) {
        return 'video';
    }

    //
    if (/(\.(png|jpg|jpeg|svg)$|data:image)/.test(vid_pic)) {
        return 'img';
    }
};

//
export const VideoOrImage = (vid_pic = '', type = '', video, img) => {
    if (!vid_pic) {
        return '';
    }

    const type_vid_pic = getTypeVidOrPic(vid_pic, type);

    if (type_vid_pic == 'img') {
        return img || <img src={vid_pic} alt="" />;
    }

    if (type_vid_pic == 'video') {
        return video || <video src={vid_pic} alt="" />;
    }
};
