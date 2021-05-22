import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { API_Friend_D } from '../../../../../api/api_django/user/user_friend/UserFriend';

import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
// 
import CircleLoading from '../../../../../component/waiting/circle_loading/CircleLoading';
// 
import { handle_API_Friend_L } from '../../../__handle_api/ProfileHandleAPI';

import FriendEdit from '../friend_edit/FriendEdit';
//
import './ProfileFriend.scss';
import { useMounted } from '../../../../../_custom_hooks/useMounted';

//
ProfileFriend.propTypes = {};

//
function ProfileFriend() {
    // 
    const {id} = GetIdSlug()

    //
    const [friend_obj, setFriendObj] = useState({
        friend_arr: [],
        count_friend: 0,
        has_fetched: false
    })

    const {friend_arr, count_friend, has_fetched} = friend_obj;

    // 
    const mounted = useMounted()

    // 
    useEffect(() => {
        getData_API_Friend()
    }, [])

    /* --------- Get Friend -------------*/

    async function getData_API_Friend() {
        const [data, new_count] = await handle_API_Friend_L(id, friend_arr.length)

        mounted && setFriendObj({
            friend_arr: [...friend_arr, ...data],
            count_friend: has_fetched ? count_friend : new_count,
            has_fetched: true,
        })
    }
    
    //
    async function handelDeleteFriend(user_id) {
        await API_Friend_D(user_id, 'DELETE');
        setFriendObj({
            ...friend_obj,
            friend_arr: friend_arr.filter(item => item.friend.id != user_id),
        })
    }

    //
    return (
        <div className="ProfileFriend">
            <div className="ProfileFriend_contain brs-8px bg-primary margin-auto">
                <div className="width-fit-content margin-auto">
                    <CircleLoading open_fetching={!has_fetched}/>
                </div>
                
                <h2 className={has_fetched ? '' : 'display-none'}>
                    Friends
                </h2>

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
        </div>
    );
}

export default ProfileFriend;
