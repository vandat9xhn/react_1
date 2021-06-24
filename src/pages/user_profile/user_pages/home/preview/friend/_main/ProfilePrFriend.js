import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMounted } from '../../../../../../../_custom_hooks/useMounted';

import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_Friend_L } from '../../../../../__handle_api/ProfileHandleAPI';

import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';

import ProfilePrFrSkeleton from '../skeleton/ProfilePrFrSkeleton';
import ProfilePrFrItem from '../item/ProfilePrFrItem';
//
import './ProfilePrFriend.scss';

//
ProfilePrFriend.propTypes = {};

//
function ProfilePrFriend({ id }) {
    //
    const [friend_state, setFriendState] = useState({
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

    const { friend_arr, friend_count, is_fetching } = friend_state;

    //
    ;
    const ref_component = useRef(null);

    //
    const mounted = useMounted();

    //
    useEffect(() => {
        observeToDo(ref_component.current, getData_API_FriendPreview, 0);
    }, []);

    //
    async function getData_API_FriendPreview() {
        setFriendState((friend_state) => ({
            ...friend_state,
            is_fetching: true,
        }));

        const { data, count: new_count } = await handle_API_Friend_L(
            id,
            friend_arr.length
        );

        if (mounted) {
            setFriendState({
                friend_arr: data.map((item) => item.friend),
                friend_count: new_count,
                is_fetching: false,
            });
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
                    <div>{friend_count} friends</div>

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
