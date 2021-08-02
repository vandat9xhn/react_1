import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_hooks/useMounted';

import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_Friend_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';

import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';

import ProfilePrFrSkeleton from '../skeleton/ProfilePrFrSkeleton';
import ProfilePrFrItem from '../item/ProfilePrFrItem';
//
import './ProfilePrFriend.scss';

//
ProfilePrFriend.propTypes = {};

//
function ProfilePrFriend({ id, handleReady }) {
    //
    const [state_obj, setStateObj] = useState({
        friend_arr: [
            {
                id: 0,
                picture: '',
                last_name: '',
            },
        ],
        friend_count: 0,
        is_fetching: true,
    });

    const { friend_arr, friend_count, is_fetching } = state_obj;

    //
    const ref_component = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo(ref_component.current, getData_API_FriendPreview, 0);
    }, []);

    //
    async function getData_API_FriendPreview() {
        setStateObj((state_obj) => ({
            ...state_obj,
            is_fetching: true,
        }));

        const { data, count: count } = await handle_API_Friend_L(
            id,
            friend_arr.length
        );

        if (mounted) {
            setStateObj({
                friend_arr: data.map((item) => item.friend),
                friend_count: count,
                is_fetching: false,
            });

            handleReady();
        }
    }

    //
    return (
        <div ref={ref_component}>
            <ProfilePrCommon
                title="Friends"
                sk="friend"
                is_fetching={is_fetching}
                ProfilePrSkeleton={ProfilePrFrSkeleton}
            >
                <div>
                    <div>{friend_count ? friend_count : 'No'} ' friends'</div>

                    <div className="ProfilePrFriend_pic">
                        <div className="ProfilePrFriend_pic-row display-flex flex-wrap">
                            {friend_arr.map((friend_obj, ix) => (
                                <div
                                    className="ProfilePrFriend_pic-item"
                                    key={`ProfilePrFriend_${ix}`}
                                >
                                    <ProfilePrFrItem friend_obj={friend_obj} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </ProfilePrCommon>
        </div>
    );
}

export default ProfilePrFriend;
