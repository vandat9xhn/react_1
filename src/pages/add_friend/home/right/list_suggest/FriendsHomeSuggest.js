import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { initial_profile } from '../../../../../_initial/profile/InitialProfile';
//
import { handle_API_ProfileInfo_L } from '../../../../../_handle_api/profile/info';
//
import { useObserverShowMore } from '../../../../../_hooks/useObserverShowMore';
//
import AddFriendSuggest from '../../../../../component/add_friend_add/suggest/AddFriendSuggest';
//
import FriendHomeFriendList from '../list/_main/FriendHomeFriendList';

//
FriendsHomeSuggest.propTypes = {};

//
function FriendsHomeSuggest(props) {
    //
    const ref_fake_elm = useRef(null);

    //
    const { data_state, is_max, setDataState, getData_API, observerShowMore } =
        useObserverShowMore({
            initial_arr: [] || [{ ...initial_profile(), sent: false }],
            handle_API_L: handle_API_L,
        });

    const { data_arr } = data_state;

    //
    useEffect(() => {
        getData_API({
            handleWhenFinally: () => {
                if (!is_max.current) {
                    observerShowMore({
                        fake_elm_end: ref_fake_elm.current,
                        way_scroll: 'to_bottom',
                        rootMargin: '0px 0px 1000px 0px',
                    });
                }
            },
        });
    }, []);

    // ------- API

    //
    async function handle_API_L(c_count = 0) {
        const res = await handle_API_ProfileInfo_L({
            c_count: c_count,
            type: 'suggest',
        });

        return {
            ...res,
            data: res.data.map((item) => {
                return {
                    ...item,
                    sent: false,
                };
            }),
        };
    }

    // -----

    //
    function addFriendRequest(suggest_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];
            new_data_arr[suggest_ix].sent = true;

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    function removeFriendRequest(suggest_ix = -1) {
        setDataState((data_state) => {
            const new_data_arr = [...data_state.data_arr];

            if (new_data_arr[suggest_ix].sent) {
                new_data_arr[suggest_ix].sent = false;
            } else {
                new_data_arr.splice(suggest_ix, 1);
            }

            return {
                ...data_state,
                data_arr: new_data_arr,
            };
        });
    }

    //
    return (
        <div
            className={`FriendsHomeSuggest ${
                data_arr.length == 0 ? 'display-none' : ''
            }`}
        >
            <FriendHomeFriendList
                title="People you may know"
                link_to_all="/friends/suggestions"
                profile_arr={data_arr}
            >
                <div>
                    <div className="display-flex flex-wrap">
                        {data_arr.map((profile, ix) => (
                            <div
                                key={profile.id}
                                className="friend-home-right-item"
                            >
                                <AddFriendSuggest
                                    profile={profile}
                                    sent={profile.sent}
                                    addFriend={() => addFriendRequest(ix)}
                                    removeFriend={() => removeFriendRequest(ix)}
                                />
                            </div>
                        ))}
                    </div>

                    <div ref={ref_fake_elm} className="padding-1px"></div>
                </div>
            </FriendHomeFriendList>
        </div>
    );
}

export default FriendsHomeSuggest;
