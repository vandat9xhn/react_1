import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import { context_post } from '../../../../../_context/post/ContextPost';
//
import { getTypeVidOrPic } from '../../../../../_some_function/VideoOrImage';
//
import IconsPlayPause from '../../../../../_icons_svg/icon_play_pause/IconsPlayPause';
//
import './VidPicPostItem.scss';

//
VidPicPostItem.propTypes = {};

//
function VidPicPostItem({ count_vid_pic, index, post_ix, id, vid_pic }) {
    //
    const { zoomVidPicPost } = useContext(context_post);

    //
    const vid_pic_type = getTypeVidOrPic(vid_pic);

    // -----

    //
    function handleClick(e) {
        e.preventDefault();
        zoomVidPicPost(index, post_ix);
    }

    //
    return (
        <div
            className={`VidPicPostItem VidPics_count_${
                count_vid_pic > 4 ? 5 : count_vid_pic
            }`}
            data-length={
                index == 3 && count_vid_pic > 4 ? count_vid_pic - 4 : undefined
            }
        >
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
                            controls={count_vid_pic == 1}
                        />

                        {count_vid_pic >= 2 ? (
                            <div className="pos-abs-100 display-flex-center bg-shadow-2">
                                <IconsPlayPause size_icon="40px" />
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </Link>
        </div>
    );
}

export default VidPicPostItem;
