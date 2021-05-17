import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
//
import ScreenBlurShowMore from '../../../../../_screen_blur/_component/foot/ScreenBlurShowMore';
// 
import ItemNotice from '../item/ItemNotice';
// 
import './ListNotices.scss';

//
ListNotices.propTypes = {};

//
function ListNotices(props) {
    const {
        notices,
        count_notice,
        is_fetching_notice,
        //
        MarkAllAsRead,
        handleClickNoticeItem,
        getMoreNotice,
    } = props;

    //
    return (
        <div className="RightHeader_hidden-contain header_hidden-contain">
            <div className="RightHeader_hidden-title">
                <div className="label-field">Notices</div>
            </div>

            <div className="ListNotices_mark-all" onClick={MarkAllAsRead}>
                Mark all as Read
            </div>

            <div>
                {notices.map((notice, ix) => (
                    <Link
                        key={`RightHeader_notice_${ix}`}
                        to={'/posts/' + notice.link_id}
                    >
                        <ItemNotice
                            id={notice.id}
                            ix={ix}
                            user={notice.user}
                            content={notice.content}
                            updated_time={notice.updated_time}
                            is_new={notice.status_seen == 2 ? false : true}
                            handleClickItem={handleClickNoticeItem}
                        />
                    </Link>
                ))}
            </div>

            <div className="RightHeader_hidden_show-more">
                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count_notice > notices.length}
                    handleShowMore={getMoreNotice}
                    is_fetching={is_fetching_notice}
                />
            </div>
        </div>
    );
}

export default ListNotices;
