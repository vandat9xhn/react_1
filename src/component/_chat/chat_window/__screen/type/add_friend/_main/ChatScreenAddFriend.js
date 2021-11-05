import React, { useEffect, useRef, useState } from 'react';
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
import IconsArrow from '../../../../../../../_icons_svg/icons_arrow/IconsArrow';
import PostInputSearch from '../../../../../../posts/common/input_search/PostInputSearch';
import { waitingToDoLast } from '../../../../../../../_some_function/waitingToDoLast';

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
function ChatAddFriend({ ws, room_user_id_arr, closeChatScreen }) {
    //
    const [value, setValue] = useState('');

    //
    const ref_value = useRef('');
    const ref_interval = useRef(null);

    //
    const { data_state, getData_API, refreshData_API } = useDataShowMore({
        initial_arr: [],
        handle_API_L: (c_count) =>
            handle_API_Friend_L({
                c_count: c_count,
                params: {
                    search: ref_value.current,
                    exclude_ids: room_user_id_arr,
                },
            }),
    });

    const { data_arr, is_fetching, count } = data_state;

    //
    useEffect(() => {
        getData_API();
    }, []);

    // ------

    //
    function changeSearch(e) {
        const new_value = e.target.value;
        ref_value.current = new_value;
        setValue(new_value);

        waitingToDoLast({
            ref_interval: ref_interval,
            callback: () => {
                refreshData_API();
            },
        });
    }

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div className="chat-screen-list">
            <div className="flex-between-center padding-10px border-bottom-blur">
                <div className="font-500">Add people</div>

                <div
                    className="btn-icon-36px cursor-pointer hv-bg-hv"
                    onClick={closeChatScreen}
                >
                    <IconsArrow y={400} size_icon="20px" />
                </div>
            </div>

            <div className="padding-10px border-bottom-blur">
                <PostInputSearch
                    value={value}
                    placeholder="Search friends"
                    changeSearch={changeSearch}
                />
            </div>

            <div>
                {data_arr.map((user, ix) => (
                    <div key={user.id}>
                        <ActionsFriendUser user={user} ws={ws} />
                    </div>
                ))}

                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />

                <div className="display-flex-center">
                    <NoItem
                        no_item={
                            data_arr.length == 0 && !is_fetching && count == 0
                        }
                        title="No Friend"
                    />
                </div>
            </div>
        </div>
    );
}

export default ChatAddFriend;
