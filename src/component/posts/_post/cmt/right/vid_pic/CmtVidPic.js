import React from 'react';
import PropTypes from 'prop-types';
//
import { VideoOrImage } from '../../../../../../_some_function/VideoOrImage';
//
import CmtReacted from '../reacted/_main/CmtReacted';
//
import './CmtVidPic.scss';

//
CmtVidPic.propTypes = {};

//
function CmtVidPic({
    vid_pic,
    reacted_ix_arr,
    reacted_count,

    on_API_LikeAll_L,
    onOpenDetailLikeAll,
    handleClick,
}) {
    //
    return (
        <div className="CmtVidPic">
            <div className="CmtVidPic_contain pos-rel bg-vid-pic">
                <div
                    className="CmtVidPic_pic width-fit-content margin-auto overflow-hidden cursor-pointer"
                    onClick={handleClick}
                >
                    {VideoOrImage(vid_pic)}
                </div>

                <div className="pos-abs right-0 top-100per trans-y--50per z-index-1 padding-right-2px">
                    <CmtReacted
                        reacted_ix_arr={reacted_ix_arr}
                        reacted_count={reacted_count}
                        on_API_LikeAll_L={on_API_LikeAll_L}
                        onOpenDetailLikeAll={onOpenDetailLikeAll}
                    />
                </div>
            </div>
        </div>
    );
}

export default CmtVidPic;
