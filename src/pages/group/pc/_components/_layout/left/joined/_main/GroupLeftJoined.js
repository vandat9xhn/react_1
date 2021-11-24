import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_GroupJoined_L } from '../../../../../../../../_handle_api/fb_group/joined';
//
import { useObserverShowMore } from '../../../../../../../../_hooks/useObserverShowMore';
//
import GroupLeftJoinedItem from '../item/GroupLeftJoinedItem';
//
import './GroupLeftJoined.scss';

//
GroupLeftJoined.propTypes = {};

//
function GroupLeftJoined({ ref_scroll }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            handle_API_L: (c_count) =>
                handle_API_GroupJoined_L({
                    c_count: c_count,
                }),
        });

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll.current,
            rootMargin: '0px 0px 200px 0px',
            way_scroll: 'to_bottom',
            margin: 200,
        });
    }, []);

    //
    return (
        <div className="GroupLeftJoined margin-x-8px padding-y-12px border-top-blur">
            <h2 className="margin-bottom-5px padding-x-8px font-17px font-600">
                Group you've joined
            </h2>

            {data_state.data_arr.map((item, ix) => (
                <div key={item.id}>
                    <GroupLeftJoinedItem item={item} />
                </div>
            ))}

            {is_max.current ? null : (
                <div className="GroupLeftJoined_fake"></div>
            )}

            <div ref={ref_fake_elm} className="padding-1px"></div>

            {is_max.current ? null : (
                <div className="GroupLeftJoined_fake"></div>
            )}
        </div>
    );
}

export default GroupLeftJoined;
