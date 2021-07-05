import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
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
    const [like_state, setLikeState] = useState({
        like_obj: {
            [initial_type_like]: {
                has_fetched: false,
                count_like: 0,
                like_arr: [],
            },
        },
        type_like: initial_type_like,

        is_fetching: false,
    });

    const { like_obj, type_like, is_fetching } = like_state;
    const { has_fetched, count_like, like_arr } = like_obj[type_like];

    //
    useEffect(() => {
        getData_API_Like(type_like);
    }, []);

    //
    async function getData_API_Like(new_type_like) {
        setLikeState((like_state) => {
            const has_existed = like_state.like_obj[new_type_like];
            const new_like_item_obj = has_existed
                ? {}
                : {
                      [new_type_like]: {
                          like_arr: [],
                          count_like: 0,
                          has_fetched: false,
                      },
                  };

            return {
                ...like_state,
                is_fetching: true,
                type_like: new_type_like,
                like_obj: {
                    ...like_state.like_obj,
                    ...new_like_item_obj,
                },
            };
        });

        const [new_like_arr, new_count_like] = await handle_API_Like_L(
            like_obj[new_type_like]
                ? like_obj[new_type_like].like_arr.length
                : 0
        );

        setLikeState((like_state) => {
            const { has_fetched, like_arr, count_like } =
                like_state.like_obj[new_type_like];

            return {
                ...like_state,
                is_fetching: false,
                like_obj: {
                    ...like_state.like_obj,
                    [new_type_like]: {
                        like_arr: has_fetched
                            ? [...like_arr, ...new_like_arr]
                            : new_like_arr,
                        count_like: has_fetched ? count_like : new_count_like,
                        has_fetched: true,
                    },
                },
            };
        });
    }

    //
    function changeListTypeLike(new_type_like) {
        if (type_like == new_type_like) {
            return;
        }

        if (like_obj[new_type_like]) {
            setLikeState({
                ...like_state,
                type_like: new_type_like,
            });

            return;
        }

        getData_API_Like(new_type_like);
    }

    //
    function showMoreLike() {
        getData_API_Like(type_like);
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
                        type_like={type_like}
                        changeListTypeLike={changeListTypeLike}
                        closeScreen={closeScreen}
                    />
                </div>

                <div
                    className={`ScreenBlur_body ${
                        has_fetched ? '' : 'display-none'
                    }`}
                >
                    <div className="ScreenBlur_body_contain scroll-thin">
                        {like_arr.map((item, ix) => (
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
                        is_show_more={count_like > like_arr.length}
                        is_fetching={is_fetching}
                        handleShowMore={showMoreLike}
                    />
                </div>
            </div>
        </ScreenBlur>
    );
}

export default ScreenLike;
