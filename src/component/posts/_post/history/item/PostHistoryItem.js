import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import ContentMore from '../../../../content_more/Content_more';
// 
import './PostHistoryItem.scss';

//
PostHistoryItem.propTypes = {};

//
function PostHistoryItem(props) {
    const {
        his_item,
        handle_API_MoreContent,
    } = props;

    const {
        id,
        created_time,
        content_obj,

        vid_pics_create,
        vid_pics_del,
        count_vid_pic_create,
        count_vid_pic_del,
    } = his_item;

    const { content, has_more_content } = content_obj;

    // 
    const [is_fetching, setIsFetching] = useState(false)

    //
    async function seeMoreContent() {
        setIsFetching(true);
        const more_content = await handle_API_MoreContent(id);
        content_obj.content += more_content;
        content_obj.has_more_content = false;
        setIsFetching(false);
    }

    //
    return (
        <div className="PostHistoryItem ScreenBlurItem">
            <div>
                <div className="PostHistoryItem_time ScreenBlurItem_time">
                    Updated at {new Date(created_time).toLocaleString()}
                </div>

                <div className={content ? '' : 'display-none'}>
                    <ContentMore
                        content={content}
                        has_more_content={has_more_content}
                        is_fetching={is_fetching}
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
                                    <div key={`PostHistoryItem_pic_create_${ix}`}>
                                        <img src={item.vid_pic} alt="" width={100} height={100} />
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
                                        <img src={item.vid_pic} alt="" width={100} height={100} />
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
