import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import { formatLocalDateTimeString } from '../../../../../_some_function/FormatDate';
//
import ContentMore from '../../../../content_more/Content_more';
//
import './PostHistoryItem.scss';
import { VideoOrImage } from '../../../../../_some_function/VideoOrImage';

//
PostHistoryItem.propTypes = {};

//
function PostHistoryItem({ his_item, handle_API_MoreContent }) {
    //
    const {
        id,
        created_time,
        content_obj,

        vid_pics_create,
        vid_pics_del,
        count_vid_pic_create,
        count_vid_pic_del,
    } = his_item;

    const { content } = content_obj;

    //
    async function seeMoreContent() {
        return await handle_API_MoreContent(id);
    }

    //
    return (
        <div className="PostHistoryItem">
            <div>
                <div className="PostHistoryItem_time ScreenBlurItem_time">
                    Updated at{' '}
                    {formatLocalDateTimeString(new Date(created_time))}
                </div>

                <div className={content ? '' : 'display-none'}>
                    <ContentMore
                        content_obj={content_obj}
                        seeMoreContent={seeMoreContent}
                    />
                </div>

                <div className={count_vid_pic_create ? '' : 'display-none'}>
                    <div>
                        <div className="PostHistoryItem__title-pic font-italic">
                            Created {count_vid_pic_create} videos / pictures:
                        </div>

                        <div className="PostHistoryItem__pic">
                            <div className="display-flex">
                                {vid_pics_create.map((item, ix) => (
                                    <div
                                        key={`PostHistoryItem_pic_create_${ix}`}
                                    >
                                        {VideoOrImage(item.vid_pic)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={count_vid_pic_del ? '' : 'display-none'}>
                    <div>
                        <div className="PostHistoryItem__title-pic font-italic">
                            Deleted {count_vid_pic_del} videos / pictures:
                        </div>

                        <div className="PostHistoryItem__pic">
                            <div className="display-flex">
                                {vid_pics_del.map((item, ix) => (
                                    <div key={`PostHistoryItem_pic_del_${ix}`}>
                                        {VideoOrImage(item.vid_pic)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostHistoryItem;
