import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import observeToDo from '../../../../../../../_some_function/observerToDo';
//
import { handle_API_Friend_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useDataShowMore } from '../../../../../../../_hooks/useDataShowMore';

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
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [] || [
            {
                id: 0,
                picture: '',
                last_name: '',
            },
        ],
        handle_API_L: (c_count) =>
            handle_API_Friend_L({
                user_id: id,
                c_count: c_count,
                params: { size: 9 },
            }),
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    const ref_component = useRef(null);

    //
    useEffect(() => {
        observeToDo(ref_component.current, handleGetData_API, 0);
    }, []);

    //
    function handleGetData_API() {
        getData_API({
            handleWhenFinally: handleReady,
        });
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
                    <div>{has_fetched && count ? count : 'No'} ' friends'</div>

                    <div className="ProfilePrFriend_pic">
                        <div className="ProfilePrFriend_pic-row display-flex flex-wrap">
                            {data_arr.map((friend_obj, ix) => (
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
