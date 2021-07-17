import React from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../../../../_some_function/VideoOrImage';
import { formatLocalDateTimeString } from '../../../../../../_some_function/FormatDate';
//
import PictureName from '../../../../../../component/picture_name/pic_name/PictureName';
import ContentMore from '../../../../../../component/content_more/Content_more';
//
import { handle_API_FashionContentComment_R } from '../../../../../../_handle_api/fashion/FashionItemCmtHandleAPI';
//
import './FashionItemCmtItem.scss';

//
FashionItemCmtItem.propTypes = {
    ix: PropTypes.number,
    item: PropTypes.object,
    zoomVidPics: PropTypes.func,
};
FashionItemCmtItem.defaultProps = {};

//
function FashionItemCmtItem({ ix, item, zoomVidPics }) {
    const { id, user, content_obj, vid_pics, created_time } = item;

    //
    function onZoomVidPics(vid_pic_ix) {
        zoomVidPics(ix, vid_pic_ix);
    }

    //
    function on_API_FashionContentComment_R() {
        return handle_API_FashionContentComment_R({ comment_model: id });
    }

    //
    return (
        <div className="FashionItemCmtItem">
            <div className="FashionItemCmtItem_comment">
                <div className="label-field width-fit-content">
                    <PictureName user={user} />
                </div>

                <div className="FashionItemCmtItem_text">
                    <ContentMore
                        content_obj={content_obj}
                        seeMoreContent={on_API_FashionContentComment_R}
                    />
                </div>
            </div>

            <div className="FashionItemCmtItem_images">
                {vid_pics.map((vid_pic, vid_pic_ix) => (
                    <div
                        key={`vid_pics${vid_pic_ix}`}
                        className="FashionItemCmtItem_image"
                        onClick={() => onZoomVidPics(vid_pic_ix)}
                    >
                        {VideoOrImage(
                            vid_pic.vid_pic || vid_pic.url,
                            vid_pic.vid_pic || vid_pic.type
                        )}
                    </div>
                ))}
            </div>

            <div className="text-align-end font-italic font-11px">
                {formatLocalDateTimeString(new Date(created_time))}
            </div>
        </div>
    );
}

export default FashionItemCmtItem;
