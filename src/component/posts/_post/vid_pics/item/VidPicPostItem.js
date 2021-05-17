import React, { useContext } from 'react';
import PropTypes from 'prop-types';
// 
import { VideoOrImage } from '../../../../../_some_function/VideoOrImage';
//
import { context_post } from '../../../__context_post/ContextPost';

// 
VidPicPostItem.propTypes = {};

// 
function VidPicPostItem(props) {
    const { count_vid_pic, index, post_ix, vid_pic } = props;
    //
    const { zoomVidPicPost } = useContext(context_post);
    // 
    function onZoomVidPicPost() {
        zoomVidPicPost(index, post_ix);
    }

    //
    return (
        <div
            className={`VidPics_count_${count_vid_pic > 4 ? 5 : count_vid_pic}`}
            onClick={onZoomVidPicPost}
            data-length={
                index == 3 && count_vid_pic > 4 ? count_vid_pic - 4 : undefined
            }
        >
            {VideoOrImage(vid_pic)}
        </div>
    );
}

export default VidPicPostItem;
