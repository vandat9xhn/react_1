import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { getTypeVidOrPic } from '../../../../../_some_function/VideoOrImage';
//
import IconsPlayPause from '../../../../../_icons_svg/icon_play_pause/IconsPlayPause';
//
import MyVideo from '../../../../vid_pic/video/_main/MyVideo';
//
import './VidPicPostItem.scss';

//
VidPicPostItem.propTypes = {};

//
function VidPicPostItem({ vid_pic_count, index, post_ix, id, vid_pic }) {
    //
    const { ref_posts, zoomVidPicPost } = useContext(context_post);

    //
    const vid_pic_type = getTypeVidOrPic(vid_pic);

    // -----

    //
    function handleClick(e) {
        e.preventDefault();
        zoomVidPicPost(index, post_ix);
    }

    //
    function afterChangeZoomLv() {
        zoomVidPicPost(0, post_ix);
    }

    //
    function beforeTogglePlay() {
        const videos = ref_posts.current.getElementsByTagName('video');

        for (const video of videos) {
            if (video.played) {
                video.pause();
            }
        }
    }

    //
    return (
        <div
            className={`VidPicPostItem VidPics_count_${
                vid_pic_count > 4 ? 5 : vid_pic_count
            }`}
            data-length={
                index == 3 && vid_pic_count > 4 ? vid_pic_count - 4 : undefined
            }
        >
            {vid_pic_count == 1 && vid_pic_type == 'video' ? (
                <MyVideo
                    video={vid_pic}
                    initial_is_play={false}
                    initial_is_mute={true}
                    //
                    face_video_elm={
                        !IS_MOBILE ? null : (
                            <Link
                                className="display-block wh-100"
                                to={`/post/photos/${id}`}
                                onClick={handleClick}
                            ></Link>
                        )
                    }
                    //
                    beforeTogglePlay={beforeTogglePlay}
                    afterChangeZoomLv={afterChangeZoomLv}
                />
            ) : (
                <Link
                    className="display-block wh-100"
                    to={`/post/photos/${id}`}
                    onClick={handleClick}
                >
                    {vid_pic_type == 'img' ? (
                        <img
                            className="wh-100 object-fit-cover"
                            src={vid_pic}
                            alt=""
                        />
                    ) : vid_pic_type == 'video' ? (
                        <div className="wh-100 pos-rel">
                            <video
                                className="wh-100 object-fit-cover"
                                src={vid_pic}
                                preload="metadata"
                                controls={false}
                            />

                            <div className="pos-abs-100 display-flex-center bg-shadow-2">
                                <IconsPlayPause size_icon="40px" />
                            </div>
                        </div>
                    ) : null}
                </Link>
            )}
        </div>
    );
}

export default VidPicPostItem;
