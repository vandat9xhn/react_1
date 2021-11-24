import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { initial_fb_group_notice_obj } from '../../../../../../../../_initial/group/notice';
//
import { handle_API_GroupNotice_L } from '../../../../../../../../_handle_api/fb_group/notifications';
//
import GroupNoticeList from '../../../../../_components/notice_list/GroupNoticeList';

//
GroupFeedCenterNew.propTypes = {};

//
function GroupFeedCenterNew(props) {
    //
    const [notice_arr, setNoticeArr] = useState(
        [] || initial_fb_group_notice_obj()
    );

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ----

    //
    async function getData_API() {
        const { data } = await handle_API_GroupNotice_L({
            c_count: 0,
            params: { time: 'new' },
        });

        setNoticeArr(data.slice(0, 1));
    }

    //
    return (
        <div className="GroupFeedCenterNew">
            <GroupNoticeList title="New for you" notice_arr={notice_arr} />
        </div>
    );
}

export default GroupFeedCenterNew;
