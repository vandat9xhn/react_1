import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { waitingToDoLast } from '../../../../../_some_function/waitingToDoLast';
//
import { useFriendsFriend } from '../../../../../_hooks/friends/useFriendsFriend';
//
import PostInputSearch from '../../../../../component/posts/common/input_search/PostInputSearch';
//
import FriendsAllFriend from '../friend/FriendsAllFriend';
//
import './FriendsAllLeft.scss';

//
FriendsAllLeft.propTypes = {};

//
function FriendsAllLeft({ showProfile }) {
    //
    const [value, setValue] = useState('');

    const ref_interval = useRef(null);

    //
    const {
        ref_root,
        ref_fake_elm,
        ref_params_api,
        data_state,

        refreshData_API,

        openMess,
        unFollowFriend,
        blockFriend,
        deleteFriend,
    } = useFriendsFriend({});

    const { data_arr, count } = data_state;

    // ------

    //
    function changeSearch(e) {
        const new_value = e.target.value;
        setValue(new_value);
        ref_params_api.current['search'] = new_value;

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: refreshData_API,
        });
    }

    //
    function handleAction({ action_name, user_ix }) {
        console.log(action_name, user_ix);
    }

    //
    return (
        <div className="FriendsAllLeft h-100per padding-left-8px">
            <div
                ref={ref_root}
                className="max-h-100per overflow-y-auto scroll-thin"
            >
                <div className="FriendsAllLeft_search margin-right-8px padding-top-5px padding-bottom-16px padding-x-8px border-bottom-blur">
                    <PostInputSearch
                        value={value}
                        placeholder={'Search Friends'}
                        changeSearch={changeSearch}
                    />
                </div>

                <div className="padding-x-8px padding-top-9px padding-bottom-5px font-17px font-600">
                    {count} friend{count >= 2 ? 's' : ''}
                </div>

                <div>
                    {data_arr.map((profile, ix) => (
                        <div key={profile.id}>
                            <FriendsAllFriend
                                ix={ix}
                                profile={profile}
                                handleAction={handleAction}
                                // openMess={() => openMess(ix)}
                                // unFollowFriend={() => unFollowFriend(ix)}
                                // blockFriend={() => blockFriend(ix)}
                                // deleteFriend={() => deleteFriend(ix)}
                                showProfile={() => showProfile(profile.id)}
                            />
                        </div>
                    ))}

                    <div ref={ref_fake_elm} className="padding-1px"></div>
                </div>
            </div>
        </div>
    );
}

export default FriendsAllLeft;
