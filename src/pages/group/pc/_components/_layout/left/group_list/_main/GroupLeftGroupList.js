import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { useObserverShowMore } from '../../../../../../../../_hooks/useObserverShowMore';
//
import GroupLeftGroupItem from '../item/GroupLeftGroupItem';
//
import './GroupLeftGroupList.scss';
import VirtualScroll from '../../../../../../../../component/virtual_scroll/VirtualScroll';

//
GroupLeftGroupList.propTypes = {};

//
function GroupLeftGroupList({ ref_scroll, title, handle_API_L }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            handle_API_L: handle_API_L,
        });

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll.current,
            rootMargin: '0px',
            way_scroll: 'to_bottom',
            margin: 0,
        });
    }, []);

    //
    if (is_max.current && data_state.data_arr.length == 0) {
        return null;
    }

    //
    return (
        <div className="GroupLeftGroupList margin-x-8px padding-y-12px border-top-blur">
            <h2 className="margin-bottom-5px padding-x-8px font-17px font-600">
                {title}
            </h2>

            {data_state.data_arr.map((item, ix) => (
                <div key={item.id}>
                    <VirtualScroll ref_root={ref_scroll}>
                        <GroupLeftGroupItem item={item} />
                    </VirtualScroll>
                </div>
            ))}

            <div ref={ref_fake_elm} className="padding-1px"></div>

            {is_max.current ? null : (
                <div className="GroupLeftGroupList_fake"></div>
            )}
        </div>
    );
}

export default GroupLeftGroupList;
