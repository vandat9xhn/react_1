import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../../../_some_function/FormatDate';
//
import PictureName from '../../../../../../../component/picture_name/pic_name/PictureName';
import ContentMore from '../../../../../../../component/content_more/Content_more';
//
import { handle_API_FashionContentComment_R } from '../../../../../../../_handle_api/fashion/FashionItemCmtHandleAPI';
//
import FsICmtVidPic from '../vid_pic/_main/FsICmtVidPic';
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
function FashionItemCmtItem({ ix, item }) {
    //
    const { id, user, content_obj, vid_pics, count_vid_pic, created_time } =
        item;

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

            <div>
                <FsICmtVidPic
                    id={id}
                    vid_pics={vid_pics}
                    count_vid_pic={count_vid_pic}
                />
            </div>

            <div className="text-align-end font-italic font-11px">
                {formatLocalDateTimeString(new Date(created_time))}
            </div>
        </div>
    );
}

export default FashionItemCmtItem;
