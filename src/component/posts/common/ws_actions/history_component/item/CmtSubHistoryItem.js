import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ContentMore from '../../../../../content_more/Content_more';
//
import './CmtSubHistoryItem.scss';

//
CmtSubHistoryItem.propTypes = {
    id: PropTypes.number,
    content_obj: PropTypes.object,
    vid_pic: PropTypes.string,
    created_time: PropTypes.string,
    handle_API_MoreContent: PropTypes.func,
};


//
function CmtSubHistoryItem({
    id,
    created_time,
    content_obj,
    vid_pic,
    handle_API_MoreContent,
}) {
    //
    const { content } = content_obj;

    //
    async function seeMoreContent() {
        return await handle_API_MoreContent(id);
    }

    //
    return (
        <div className="ScreenBlurItem">
            <div className="CmtSubHistoryItem_time ScreenBlurItem_time">
                Updated at {new Date(created_time).toLocaleString()}
            </div>

            <div className={content ? '' : 'display-none'}>
                <ContentMore
                    content_obj={content_obj}
                    seeMoreContent={seeMoreContent}
                />
            </div>

            <div className={vid_pic ? '' : 'display-none'}>
                <div>
                    <img src={vid_pic} alt="" width="100" height="100" />
                </div>
            </div>
        </div>
    );
}

export default CmtSubHistoryItem;
