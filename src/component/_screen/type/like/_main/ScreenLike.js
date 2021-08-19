import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
//
import { useMultiDataKey } from '../../../../../_hooks/useMultiDataKey';
//
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
import UserAdd from '../../../../user_add/UserAdd';
//
import ScreenBlur from '../../../components/frame/blur/ScreenBlur';
import ScreenBlurShowMore from '../../../components/part/foot/ScreenBlurShowMore';
//
import ScreenLikeHead from '../head/ScreenLikeHead';
//
import './ScreenLike.scss';

//
export function openScreenLike({
    openScreenFloor,
    handle_API_Like_L,
    type_like,
}) {
    openScreenFloor({
        FloorComponent: ScreenLike,
        handle_API_Like_L: handle_API_Like_L,
        type_like: type_like,
    });
}

//
ScreenLike.propTypes = {};

//
function ScreenLike({
    closeScreen,
    handle_API_Like_L,
    type_like: initial_type_like,
}) {
    //
    const { state_obj, getData_API, handleChangeKey } = useMultiDataKey({
        initial_key: initial_type_like,
        handle_API_L: handle_API_Like_L,
    });

    const { obj, c_key, is_fetching } = state_obj;
    const { data_arr, count, has_fetched } = obj[c_key];

    //
    useEffect(() => {
        getData_API(initial_type_like);
    }, []);

    //
    function showMoreLike() {
        getData_API(c_key);
    }

    //
    function handleSendAddFriend(friend_id) {
        console.log(friend_id);
    }

    //
    return (
        <ScreenBlur closeScreen={closeScreen}>
            <div className="ScreenLike">
                <div>
                    <ScreenLikeHead
                        type_like={c_key}
                        changeListTypeLike={handleChangeKey}
                        closeScreen={closeScreen}
                    />
                </div>

                <div
                    className={`ScreenBlur_body ${
                        has_fetched ? '' : 'display-none'
                    }`}
                >
                    <div className="ScreenBlur_body_contain scroll-thin">
                        {data_arr.map((item, ix) => (
                            <div
                                key={`ScreenLike_add_friend_${ix}`}
                                className="ScreenLike_add-friend"
                            >
                                <UserAdd
                                    user={item.user}
                                    handleSendAddFriend={handleSendAddFriend}
                                    content={
                                        type_likes[item.type_like].component
                                    }
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div>
                    <ScreenBlurShowMore
                        is_show_more={count > data_arr.length}
                        is_fetching={is_fetching}
                        handleShowMore={showMoreLike}
                    />
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenLike;
