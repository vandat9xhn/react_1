import React from 'react';
import PropTypes from 'prop-types';
//
import GroupNoticeItem from '../notice_item/GroupNoticeItem';
// 
import './GroupNoticeList.scss';

//
GroupNoticeList.propTypes = {};

//
function GroupNoticeList({ title, notice_arr }) {
    //
    if (notice_arr.length == 0) {
        return null;
    }

    //
    return (
        <div className="GroupNoticeList padding-y-20px brs-8px-pc bg-primary box-shadow-1">
            <h2 className="GroupNoticeList_title margin-bottom-5px padding-x-16px font-600 font-20px">
                {title}
            </h2>

            <div className="GroupNoticeList_contain padding-x-8px">
                {notice_arr.map((item, ix) => (
                    <div key={item.id}>
                        <GroupNoticeItem item={item} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GroupNoticeList;
