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
CmtSubHistoryItem.defaultProps = {
    id: 1,
    content_obj: {},
    vid_pic: '',
    created_time: '',
};

//
function CmtSubHistoryItem(props) {
    const {
        id,
        created_time,
        content_obj,
        vid_pic,
        handle_API_MoreContent,
    } = props;

    const { content, has_more_content } = content_obj;

    //
    const [is_fetching, setIsFetching] = useState(false);

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
        <div className="ScreenBlurItem">
            <div className="CmtSubHistoryItem_time ScreenBlurItem_time">
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

            <div className={vid_pic ? '' : 'display-none'}>
                <div>
                    <img src={vid_pic} alt="" width="100" height="100" />
                </div>
            </div>
        </div>
    );
}

export default CmtSubHistoryItem;
