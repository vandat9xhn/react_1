import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { GetIdSlug } from '../../../../../_some_function/GetIdSlug';
import observeToDo from '../../../../../_some_function/observerToDo';
//
import { initial_friend } from '../../../../../_initial/profile/InitialProfile';
//
import { API_Friend_D } from '../../../../../api/api_django/user/user_friend/UserFriend';
import { handle_API_Friend_L } from '../../../../../_handle_api/profile/ProfileHandleAPI';
//
import { useDataShowMore } from '../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../component/_screen/components/part/foot/ScreenBlurShowMore';
//
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
    const { data_state, setDataState, getData_API } = useDataShowMore({
        initial_arr: [] || [initial_friend()],
        handle_API_L: (c_count) =>
            handle_API_Friend_L({
                user_id: id,
                c_count: c_count,
                params: { size: 20 },
            }),
    });

    const { data_arr, count, is_fetching, has_fetched } = data_state;

    //
    const ref_component = useRef(null);

    //
    useEffect(() => {
        observeToDo({ elm: ref_component.current, callback: getData_API });
    }, []);

    //
    function handleShowMoreFriends() {
        getData_API();
    }

    //
    async function handelDeleteFriend(friend_id_del) {
        await API_Friend_D(friend_id_del);

        setDataState((data_state) => ({
            ...data_state,
            data_arr: data_arr.filter((item) => item.id != friend_id_del),
        }));
    }

    //
    return (
        <div
            ref={ref_component}
            className="ProfileFriend padding-8px brs-8px-md bg-primary box-shadow-1"
        >
            <div className={`${has_fetched ? '' : 'display-none'}`}>
                <h2 className="padding-8px">Friends</h2>

                <div className="display-flex flex-wrap space-between">
                    {data_arr.map((item, ix) => (
                        <div
                            key={`${item.id}`}
                            className="ProfileFriend_item col-12 col-sm-6 col-lg-4"
                        >
                            <FriendEdit
                                ix={ix}
                                user={item}
                                handelDeleteFriend={handelDeleteFriend}
                            />
                        </div>
                    ))}
                </div>

                <ScreenBlurShowMore
                    title="See more friends"
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching && has_fetched}
                    handleShowMore={handleShowMoreFriends}
                />
            </div>

            <div className={has_fetched ? 'display-none' : ''}>
                <ProfileFrSkeleton />
            </div>
        </div>
    );
}

export default ProfileFriend;
