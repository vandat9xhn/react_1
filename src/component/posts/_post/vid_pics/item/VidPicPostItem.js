import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../../../_some_function/VideoOrImage';
//
import { context_post } from '../../../__context_post/ContextPost';

//
VidPicPostItem.propTypes = {};

//
function VidPicPostItem({ count_vid_pic, index, post_ix, id, vid_pic }) {
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
            // onClick={onZoomVidPicPost}
            data-length={
                index == 3 && count_vid_pic > 4 ? count_vid_pic - 4 : undefined
            }
        >
            <Link to={`/post/photos/${id}`}>{VideoOrImage(vid_pic)}</Link>
        </div>
    );
}

export default VidPicPostItem;
