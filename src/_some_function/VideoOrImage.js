import React from 'react';

//
export const type_video_or_img = (vid_pic = '', type = '') => {
    if (type) {
        if (type.startsWith('image')) {
            return 'img';
        }

        if (/\.(mp4)$/.test(vid_pic)) {
            return 'video';
        }
    }

    //
    if (/(\.(png|jpg|jpeg|svg)$|data:image)/.test(vid_pic)) {
        return 'img';
    }

    if (type.startsWith('video')) {
        return 'video';
    }
};

//
export const VideoOrImage = (vid_pic = '', type = '', video, img) => {
    if (!vid_pic) {
        return '';
    }

    const type_vid_pic = type_video_or_img(vid_pic, type);

    if (type_vid_pic == 'img') {
        return img || <img src={vid_pic} alt="" />;
    }

    if (type_vid_pic == 'video') {
        return video || <video src={vid_pic} alt="" />;
    }
};
