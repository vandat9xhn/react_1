import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_Friend_D } from '../../../../../api/api_django/user/user_friend/UserFriend';

import { useMounted } from '../../../../../_hooks/useMounted';

import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
import { handle_API_Friend_L } from '../../../../../_handle_api/profile/ProfileHandleAPI';

import { initial_friend } from '../../../../../_initial/profile/InitialProfile';

import ProfileFrSkeleton from '../skeleton/ProfileFrSkeleton';

import FriendEdit from '../friend_edit/FriendEdit';
//
import './ProfileFriend.scss';

//
ProfileFriend.propTypes = {};

//
function ProfileFriend() {
    //
    const id = GetIdSlug();

    //
    const [friend_obj, setFriendObj] = useState({
        friend_arr: [...initial_friend],
        count_friend: 0,
        has_fetched: false,
        is_fetching: false,
    });

    const { friend_arr, count_friend, has_fetched, is_fetching } = friend_obj;

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        getData_API_Friend({
            has_fetched: false,
            friend_arr: [],
            count_friend: 0,
        });
    }, []);

    /* --------- Get Friend -------------*/

    async function getData_API_Friend(start_obj_state = {}) {
        setFriendObj({
            ...friend_obj,
            is_fetching: true,
            ...start_obj_state,
        });

        const { data, count: new_count } = await handle_API_Friend_L(
            id,
            friend_arr.length
        );

        mounted &&
            setFriendObj({
                friend_arr: has_fetched ? [...friend_arr, ...data] : data,
                count_friend: has_fetched ? count_friend : new_count,
                has_fetched: true,
                is_fetching: false,
            });
    }

    //
    function handleShowMoreFriends() {
        getData_API_Friend();
    }

    //
    async function handelDeleteFriend(user_id) {
        await API_Friend_D(user_id);
        setFriendObj({
            ...friend_obj,
            friend_arr: friend_arr.filter((item) => item.friend.id != user_id),
        });
    }

    //
    return (
        <div className="ProfileFriend">
            <div
                className={`ProfileFriend_contain brs-8px padding-8px bg-primary margin-auto ${
                    has_fetched ? '' : 'display-none'
                }`}
            >
                <h2 className=" margin-0">Friends</h2>

                <div className="display-flex flex-wrap space-between">
                    {friend_arr.map((item, ix) => (
                        <div
                            key={`ProfileFriend_${ix}`}
                            className="ProfileFriend_item col-12 col-sm-6 col-lg-4"
                        >
                            <FriendEdit
                                ix={ix}
                                user={item.friend}
                                handelDeleteFriend={handelDeleteFriend}
                            />
                        </div>
                    ))}
                </div>
            </div>

            <ScreenBlurShowMore
                title="See more friends"
                is_show_more={count_friend > friend_arr.length}
                is_fetching={is_fetching && has_fetched}
                handleShowMore={handleShowMoreFriends}
            />

            <div className={has_fetched ? 'display-none' : ''}>
                <ProfileFrSkeleton />
            </div>
        </div>
    );
}

export default ProfileFriend;
