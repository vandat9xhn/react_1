import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_Friend_L } from '../../../../../../../_handle_api/profile/ProfileHandleAPI';
// 
import { useDataShowMore } from '../../../../../../../_hooks/useDataShowMore';
//
import ScreenBlurShowMore from '../../../../../../_screen/components/part/foot/ScreenBlurShowMore';
import NoItem from '../../../../../../some_div/no_item/NoItem';
//
import ActionsFriendUser from '../item/ChatScreenAddFriendItem';

//
export function openChatAddFriend({ openChatScreen, ws, room_user_id_arr }) {
    openChatScreen({
        ChatFloorComponent: ChatAddFriend,
        ws: ws,
        room_user_id_arr: room_user_id_arr,
    });
}

//
ChatAddFriend.propTypes = {};

//
function ChatAddFriend({ ws, room_user_id_arr }) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Friend_L({
                c_count: c_count,
                params: {
                    exclude_ids: room_user_id_arr,
                },
            }),
    });

    const { data_arr: friend_arr, is_fetching, count } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div className="chat-screen-list">
            <div>
                {friend_arr.map((user, ix) => (
                    <div key={`${user.id}`}>
                        <ActionsFriendUser user={user} ws={ws} />
                    </div>
                ))}

                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count > friend_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />

                <div className="display-flex-center">
                    <NoItem
                        no_item={
                            friend_arr.length == 0 && !is_fetching && count == 0
                        }
                        title="No Friend"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatAddFriend;
