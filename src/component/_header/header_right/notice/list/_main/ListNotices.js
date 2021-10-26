import React, { useRef } from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import './ListNotices.scss';
//
import ItemNotice from '../item/_main/ItemNotice';

//
ListNotices.propTypes = {};

//
function ListNotices({
    notices,
    count,
    is_fetching,

    MarkAllAsRead,
    handleClickItem,
    handleAction,
    getMoreNotice,
}) {
    //
    const ref_scroll_elm = useRef(null);

    //
    return (
        <div
            ref={ref_scroll_elm}
            className="RightHeader_hidden_contain header_hidden_contain"
        >
            <h2 className="margin-0 padding-8px">Notices</h2>

            <h4
                className="ListNotices_mark-all text-blue font-500"
                onClick={MarkAllAsRead}
            >
                Mark all as Read
            </h4>

            <div>
                {notices.map((notice, ix) => (
                    <div key={ix}>
                        <ItemNotice
                            ref_scroll_elm={ref_scroll_elm}
                            ix={ix}
                            // 
                            id={notice.id}
                            user={notice.user}
                            content={notice.content}
                            is_new={notice.status_seen == 2 ? false : true}
                            updated_time={notice.updated_time}
                            // 
                            handleClickItem={handleClickItem}
                            handleAction={handleAction}
                        />
                    </div>
                ))}
            </div>

            <div className="RightHeader_hidden_show-more">
                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count > notices.length}
                    handleShowMore={getMoreNotice}
                    is_fetching={is_fetching}
                />
            </div>
        </div>
    );
}

export default ListNotices;
