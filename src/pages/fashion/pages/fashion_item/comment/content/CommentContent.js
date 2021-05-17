import React from 'react';
import PropTypes from 'prop-types';
// 
import { VideoOrImage } from '../../../../../../_some_function/VideoOrImage';
import PictureName from '../../../../../../component/picture_name/pic_name/PictureName';
// 
import './CommentContent.scss';

//
CommentContent.propTypes = {
    cmt_ix: PropTypes.number,
    user: PropTypes.object,
    content: PropTypes.string,
    vid_pics: PropTypes.array,
    created_time: PropTypes.oneOfType([
        PropTypes.number, PropTypes.string,
    ]),
    zoomVidPics: PropTypes.func,
};
CommentContent.defaultProps = {
    vid_pics: [],
};

//
function CommentContent(props) {
    const {
        cmt_ix,
        user,
        content,
        vid_pics,
        created_time,
        zoomVidPics,
    } = props;
    //
    function onZoomVidPics(vid_pic_ix) {
        zoomVidPics(cmt_ix, vid_pic_ix);
    }

    //
    return (
        <div className="CommentContent">
            <div className="CommentContent_contain">
                <div className="CommentContent_comment">
                    <div className="label-field">
                        <PictureName user={user}/>
                    </div>

                    <div className="CommentContent_text">
                        {content}
                    </div>
                </div>

                <div className="CommentContent_images">
                    {vid_pics.map((vid_pic, vid_pic_ix) => (
                        <div
                            key={`vid_pics${vid_pic_ix}`}
                            className="CommentContent_image"
                            onClick={() => onZoomVidPics(vid_pic_ix)}
                        >
                            {VideoOrImage(
                                vid_pic.vid_pic || vid_pic.url,
                                vid_pic.vid_pic || vid_pic.type
                            )}
                        </div>
                    ))}
                </div>

                <div className="CommentContent_time">
                    {new Date(created_time).toLocaleDateString() +
                        ' ' +
                        new Date(created_time).toLocaleTimeString()}
                </div>
            </div>
        </div>
    );
}

export default CommentContent;
