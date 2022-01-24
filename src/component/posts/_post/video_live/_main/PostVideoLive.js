import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import VideoLive from '../../../../vid_pic/video_live/_main/VideoLive';

//
PostVideoLive.propTypes = {};

//
function PostVideoLive({ post_ix, vid_pics }) {
    //
    const { zoomVidPicPost } = useContext(context_post);

    //
    function handleClick(e) {
        e.preventDefault();
        zoomVidPicPost(0, post_ix);
    }

    //
    function afterChangeZoomLv() {
        zoomVidPicPost(0, post_ix);
    }

    //
    return (
        <div className="PostVideoLive bg-shadow-9">
            <VideoLive
                video={vid_pics[0].vid_pic}
                total_view={20}
                face_video_elm={
                    !IS_MOBILE ? null : (
                        <Link
                            className="display-block wh-100"
                            to={`/post/photos/${vid_pics[0].id}`}
                            onClick={handleClick}
                        ></Link>
                    )
                }
                //
                afterChangeZoomLv={afterChangeZoomLv}
            />
        </div>
    );
}

export default PostVideoLive;
