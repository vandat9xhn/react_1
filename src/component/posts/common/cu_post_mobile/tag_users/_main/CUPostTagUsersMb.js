import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../../_some_function/waitingToDoLast';
//
import { handle_API_Friend_L } from '../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
//
import CUPTagSearchMb from '../search/CUPTagSearchMb';
import CUPTagSeletedMb from '../selected/CUPTagSeletedMb';
import CUPTagFriendsMb from '../friends/CUPTagFriendsMb';

//
CUPostTagUsersMb.propTypes = {};

//
function CUPostTagUsersMb({ tag_user_arr }) {
    //
    const [value, setValue] = useState('');
    const [selected_arr, setSelectedArr] = useState(
        tag_user_arr.map((item) => {
            return {
                ...item,
                checked: true,
            };
        })
    );

    //
    const ref_interval = useRef(null);

    //
    const { data_state, setDataState, getData_API, refreshData_API } =
        useDataShowMore({
            initial_arr: [],
            handle_API_L: handle_API_L,
        });

    const { data_arr, count, is_fetching } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ----- API

    //
    async function handle_API_L(c_count) {
        const res = await handle_API_Friend_L({
            c_count: c_count,
            params: {
                tag_user: 1,
                user_name: value,
            },
        });

        const new_data = res.data.map((item) => {
            return {
                ...item,
                checked: false,
            };
        });

        return { ...res, data: new_data };
    }

    // -----

    //
    function handleChange(e) {
        setValue(e.target.value);

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => {
                refreshData_API();
            },
        });
    }

    //
    function handleCheckedSelected(ix) {
        setSelectedArr((selected_arr) => {
            const new_selected_arr = [...selected_arr];
            new_selected_arr[ix].checked = !new_selected_arr[ix].checked;

            return new_selected_arr;
        });
    }

    //
    function handleCheckedFriend(ix) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[ix].checked = !new_data_arr[ix].checked;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div className="CUPostTagUsersMb">
            <div>
                <CUPTagSearchMb value={value} handleChange={handleChange} />
            </div>

            <div>
                <CUPTagSeletedMb
                    selected_arr={selected_arr}
                    handleCheckedUser={handleCheckedSelected}
                />
            </div>

            <div>
                <CUPTagFriendsMb
                    friend_arr={data_arr}
                    has_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                    handleCheckedUser={handleCheckedFriend}
                />
            </div>
        </div>
    );
}

export default CUPostTagUsersMb;
