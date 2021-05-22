import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_Friend_L } from '../../../../../__handle_api/ProfileHandleAPI';

import ProfilePrCommon from '../../_common/preview_common/ProfilePrCommon';

import ProfilePrFrSkeleton from '../skeleton/ProfilePrFrSkeleton';
import ProfilePrFrItem from '../item/ProfilePrFrItem';
//
import './ProfilePrFriend.scss';
import { useMounted } from '../../../../../../../_custom_hooks/useMounted';

//
ProfilePrFriend.propTypes = {};

//
function ProfilePrFriend(props) {
    //
    const { id, onClickSk } = props;

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
    });
    const [is_fetching, setIsFetching] = useState(false);

    const { friend_arr, friend_count } = friend_state;

    // 
    const mounted = useMounted()

    //
    useEffect(() => {
        getData_API_FriendPreview();
    }, [id]);

    //
    async function getData_API_FriendPreview() {
        setIsFetching(true);

        const [data, new_count] = await handle_API_Friend_L(
            id,
            friend_arr.length
        );
        
        if (mounted) {
            setFriendState({
                friend_arr: data.map((item) => item.friend),
                friend_count: new_count,
            });
            setIsFetching(false);
        }
    }

    //
    return (
        <ProfilePrCommon
            title="Friends"
            sk="friend"
            onClickSk={onClickSk}
            is_fetching={is_fetching}
            ProfileSkeleton={ProfilePrFrSkeleton}
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
    );
}

export default ProfilePrFriend;
