import React from 'react';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
//
import './ListNotices.scss';
//
import ItemNotice from '../item/ItemNotice';

//
ListNotices.propTypes = {};

//
function ListNotices({
    notices,
    count,
    is_fetching,

    MarkAllAsRead,
    handleClickItem,
    getMoreNotice,
}) {
    //
    return (
        <div className="RightHeader_hidden-contain header_hidden-contain">
            <h2 className="margin-0 padding-8px">Notices</h2>

            <h4
                className="ListNotices_mark-all margin-0 text-blue"
                onClick={MarkAllAsRead}
            >
                Mark all as Read
            </h4>

            <div>
                {notices.map((notice, ix) => (
                    <div
                        key={`RightHeader_notice_${ix}`}
                    >
                        <ItemNotice
                            id={notice.id}
                            ix={ix}
                            user={notice.user}
                            content={notice.content}
                            is_new={notice.status_seen == 2 ? false : true}
                            updated_time={notice.updated_time}
                            handleClickItem={handleClickItem}
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
