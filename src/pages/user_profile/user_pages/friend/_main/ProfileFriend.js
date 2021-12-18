import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../_constant/Constant';
// 
import observeToDo from '../../../../../_some_function/observerToDo';
import { waitingToDoLast } from '../../../../../_some_function/waitingToDoLast';
//
import { initial_friend } from '../../../../../_initial/profile/InitialProfile';
//
import { handle_API_Friend_L } from '../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import ProfileFrSkeleton from '../skeleton/ProfileFrSkeleton';
import ProfileFriendHead from '../head/_main/ProfileFriendHead';
import PrFriendFilter from '../filter/_main/PrFriendFilter';
import FriendEdit from '../friend_edit/_main/FriendEdit';
//
import './ProfileFriend.scss';

//
ProfileFriend.propTypes = {};

//
function ProfileFriend({ user_id }) {
    //
    const [value_search, setValueSearch] = useState('');

    //
    const ref_component = useRef(null);

    const ref_value_search = useRef('');
    const ref_interval = useRef(null);

    //
    const { data_state, setDataState, getData_API, refreshData_API } =
        useDataShowMore({
            initial_arr: [] || [
                {
                    ...initial_friend(),
                    is_friend: false,
                    can_add_friend: false,
                    sent_request: false,
                },
            ],
            handle_API_L: (c_count) =>
                handle_API_Friend_L({
                    user_id: user_id,
                    c_count: c_count,
                    params: { size: 20, search: ref_value_search.current },
                }),
        });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    useEffect(() => {
        observeToDo({ elm: ref_component.current, callback: refreshData_API });
    }, [location.href]);

    // -------

    //
    function changeSearch(e) {
        const new_value = e.target.value;

        ref_value_search.current = new_value;
        setValueSearch(new_value);

        waitingToDoLast({
            ref_interval: ref_interval,
            time: 500,
            callback: () => {
                refreshData_API();
            },
        });
    }

    //
    function handleShowMoreFriends() {
        getData_API();
    }

    //
    function handleAction(params) {
        console.log(params);
    }

    //
    function toggleAddFriend(ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[ix].sent_request = !new_data_arr[ix].sent_request;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    return (
        <div
            ref={ref_component}
            className="ProfileFriend profile-route-contain padding-y-16px"
        >
            <div className="margin-bottom-10px">
                <ProfileFriendHead
                    value_search={value_search}
                    changeSearch={changeSearch}
                />
            </div>

            {IS_MOBILE ? null : (
                <div className="margin-bottom-10px">
                    <PrFriendFilter user_id={user_id} />
                </div>
            )}

            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <div className="display-flex flex-wrap space-between">
                    {data_arr.map((friend_obj, ix) => (
                        <div
                            key={friend_obj.id}
                            className="ProfileFriend_item col-12 col-sm-6 col-lg-4"
                        >
                            <FriendEdit
                                ix={ix}
                                friend_obj={friend_obj}
                                handleAction={handleAction}
                                toggleAddFriend={toggleAddFriend}
                            />
                        </div>
                    ))}
                </div>

                <div className="padding-y-10px">
                    <ScreenBlurShowMore
                        title="See more friends"
                        is_show_more={count > data_arr.length}
                        is_fetching={is_fetching && has_fetched}
                        handleShowMore={handleShowMoreFriends}
                    />
                </div>
            </div>

            <div className={has_fetched ? 'display-none' : ''}>
                <ProfileFrSkeleton />
            </div>
        </div>
    );
}

export default ProfileFriend;
