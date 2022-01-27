import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
//
import VirtualScroll from '../../../../../virtual_scroll/VirtualScroll';
//
import HeaderNoticeItem from '../item/_main/HeaderNoticeItem';
// 
import './HeaderNoticeList.scss';

//
HeaderNoticeList.propTypes = {};

//
function HeaderNoticeList({
    ref_scroll_elm,
    notices,
    title,
    link_to_all,

    handleClickItem,
    handleAction,
}) {
    //
    return (
        <div className="HeaderNoticeList">
            <div className="flex-between-center padding-8px">
                <h2 className="font-600 font-17px">{title}</h2>

                {link_to_all ? <Link to={link_to_all}>See All</Link> : null}
            </div>

            <div>
                {notices.map((notice, ix) => (
                    <div key={ix}>
                        <VirtualScroll
                            ref_root={ref_scroll_elm}
                            rootMargin_y={1000}
                        >
                            <HeaderNoticeItem
                                ref_scroll_elm={ref_scroll_elm}
                                ix={ix}
                                //
                                id={notice.id}
                                user={notice.user}
                                content={notice.content}
                                is_new={
                                    notice.status_seen == 'received'
                                        ? true
                                        : false
                                }
                                updated_time={notice.updated_time}
                                //
                                handleClickItem={handleClickItem}
                                handleAction={handleAction}
                            />
                        </VirtualScroll>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeaderNoticeList;
