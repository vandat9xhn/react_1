import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_Friend_L } from '../../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useDataShowMore } from '../../../../../../../../_hooks/useDataShowMore';
import { useWaitingLastAction } from '../../../../../../../../_hooks/useWaitingLastAction';
//
import ScreenBlurShowMore from '../../../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import StoryCPFriendMb from '../friend/StoryCPFriendMb';
//
import './StoryCPAddTagFriendMb.scss';

//
StoryCPAddTagFriendMb.propTypes = {};

//
function StoryCPAddTagFriendMb({ handleTagFriend }) {
    //
    const [value, setValue] = useState('');

    //
    const ref_value = useRef('');

    //
    const { data_state, refreshData_API, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Friend_L({
                c_count: c_count,
                params: {
                    search: ref_value.current,
                },
            }),
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    const { handleWaitingLastAction } = useWaitingLastAction({
        time_waiting: 500,
        callback: refreshData_API,
    });

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    function handleChange(e) {
        const new_value = e.target.value;
        setValue(new_value);

        if (new_value.trim() != ref_value.current.trim()) {
            ref_value.current = new_value;
            handleWaitingLastAction();
        }
    }

    //
    return (
        <div className="StoryCPAddTagFriendMb h-100per">
            <div className="StoryCPAddTagFriendMb_head">
                <input
                    className="StoryCPAddTagFriendMb_input border-none w-100per padding-8px"
                    type="text"
                    value={value}
                    placeholder="Search friend..."
                    onChange={handleChange}
                />
            </div>

            <div className="StoryCPAddTagFriendMb_body bg-primary overflow-y-auto">
                {data_arr.map((user) => (
                    <div key={`${user.id}`}>
                        <StoryCPFriendMb
                            user={user}
                            handleTagFriend={handleTagFriend}
                        />
                    </div>
                ))}

                <ScreenBlurShowMore
                    is_show_more={data_arr.length < count}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default StoryCPAddTagFriendMb;
