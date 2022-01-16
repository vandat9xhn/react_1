import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_WatchList_L } from '../../../../../../../_handle_api/fb_watch/list';
//
import { useObserverShowMore } from '../../../../../../../_hooks/useObserverShowMore';
import { useBool } from '../../../../../../../_hooks/useBool';
//
import WatchLayoutLeftManage from '../manage/_main/WatchLayoutLeftManage';
import WatchLayoutLeftWatch from '../watch/_main/WatchLayoutLeftWatch';

//
const LATEST_OBJ = {
    id: 0,
    name: 'Latest',
    picture: '',
    count_new: 0,
    link_to: '/watch/latest',
    has_follow: true,
    has_notice: true,
};

//
WatchLayoutLeftList.propTypes = {};

//
function WatchLayoutLeftList({ ref_scroll_elm }) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { is_true: on_mange, toggleBool: toggleOnManage } = useBool();

    //
    const { data_state, setDataState, is_max, getData_API, observerShowMore } =
        useObserverShowMore({
            initial_arr: [],
            handle_API_L: (c_count) =>
                handle_API_WatchList_L({ c_count: c_count }),
        });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        getData_API();

        observerShowMore({
            fake_elm_end: ref_fake_elm.current,
            root: ref_scroll_elm.current,
            way_scroll: 'to_bottom',
            margin: 0,
            rootMargin: '0px',
        });
    }, []);

    // ----

    //
    function toggleMangeList() {
        toggleOnManage();
    }

    //
    function toggleNotice(ix) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[ix].has_notice = !new_data_arr[ix].has_notice;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    function handleFollowVideos(ix) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[ix].has_follow = true;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    function handleUnFollowVideos(ix) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[ix].has_follow = false;
            new_data_arr[ix].has_notice = false;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    return (
        <div className="WatchLayoutLeftList padding-y-10px border-top-blur">
            {on_mange ? (
                <WatchLayoutLeftManage
                    watch_arr={data_arr}
                    toggleMangeList={toggleMangeList}
                    toggleNotice={toggleNotice}
                    handleFollowVideos={handleFollowVideos}
                    handleUnFollowVideos={handleUnFollowVideos}
                />
            ) : (
                <WatchLayoutLeftWatch
                    watch_arr={[
                        LATEST_OBJ,
                        ...data_arr.filter((item) => item.has_follow),
                    ]}
                    toggleMangeList={toggleMangeList}
                />
            )}

            <div ref={ref_fake_elm} className="h-1px"></div>

            {is_max.current ? null : <div className="h-250px"></div>}
        </div>
    );
}

export default WatchLayoutLeftList;
