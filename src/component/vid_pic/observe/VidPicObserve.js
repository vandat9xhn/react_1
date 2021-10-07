import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useObserveVidPic } from '../../../_hooks/useObserveVidPic';
//
import { getTypeVidOrPic } from '../../../_some_function/VideoOrImage';

//
VidPicObserve.propTypes = {
    vid_pic: PropTypes.string,
    type: PropTypes.string,
    video_props: PropTypes.object,
    img_props: PropTypes.object,
};

VidPicObserve.defaultProps = {
    video_props: {},
    img_props: {},
};

//
function VidPicObserve({ vid_pic, type, video_props, img_props }) {
    //
    const type_vid_pic = getTypeVidOrPic(vid_pic, type);

    //
    const ref_vid_pic = useRef(null);

    //
    const class_vid_pic = useObserveVidPic(ref_vid_pic);

    //
    useEffect(() => {
        if (ref_vid_pic.current && ref_vid_pic.current.src) {
            ref_vid_pic.current.src = vid_pic;
        }
    }, [vid_pic]);

    //
    return type_vid_pic == 'img' ? (
        <img
            ref={ref_vid_pic}
            className={`${class_vid_pic}`}
            data-src={vid_pic}
            alt=""
            {...img_props}
        />
    ) : type_vid_pic == 'video' ? (
        <video
            ref={ref_vid_pic}
            className={`${class_vid_pic}`}
            data-src={vid_pic}
            {...video_props}
        />
    ) : null;
}

export default VidPicObserve;
