import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { handle_API_AddFriend_L } from '../../../../../_handle_api/add_friend/AddFriendHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import AddFriendRequestedItem from '../requested/AddFriendRequestedItem';

//
AddFriendRequested.propTypes = {};

//
function AddFriendRequested() {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) => handle_API_AddFriend_L('requested', c_count),
    });

    const { data_arr, count, has_fetched, is_fetching } = data_state;

    //
    const ref_main_elm = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_main_elm.current, getData_API, 0);
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div ref={ref_main_elm}>
            <div className="add-friend-row">
                {data_arr.map((item) => (
                    <div key={`${item.friend.id}`} className="add-friend-item">
                        <AddFriendRequestedItem {...item.friend} />
                    </div>
                ))}
            </div>

            <div>
                <ScreenBlurShowMore
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default AddFriendRequested;
