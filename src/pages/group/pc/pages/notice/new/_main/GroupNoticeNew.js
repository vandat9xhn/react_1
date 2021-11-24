import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupNotice_L } from '../../../../../../../_handle_api/fb_group/notifications';
//
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';
//
import GroupNoticeList from '../../_components/list/GroupNoticeList';

//
GroupNoticeNew.propTypes = {};

//
function GroupNoticeNew({ handleGetNewDone }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            handle_API_L: (c_count) =>
                handle_API_GroupNotice_L({
                    c_count: c_count,
                    params: { time: 'new' },
                }),
        });

    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            rootMargin: '0px 0px 250px 0px',
            way_scroll: 'to_bottom',
            margin: 250,
        });
    }, []);

    //
    useEffect(() => {
        if (is_max.current) {
            handleGetNewDone();
        }
    }, [is_max.current]);

    //
    return (
        <div className="GroupNoticeNew">
            <GroupNoticeList title="New" notice_arr={data_state.data_arr} />

            <div ref={ref_fake_elm} className="padding-1px"></div>
        </div>
    );
}

export default GroupNoticeNew;
