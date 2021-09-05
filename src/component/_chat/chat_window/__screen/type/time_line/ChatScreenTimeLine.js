import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
//
import { handle_API_ChatTimeLine_L } from '../../../../../../_handle_api/chat/ChatHandleAPI';
//
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
//
import './ChatScreenTimeLine.scss';

//
export function openChatTimeLine({ openChatScreen, time_line_arr, room_chat }) {
    openChatScreen({
        ChatFloorComponent: ChatScreenTimeLine,
        time_line_arr: time_line_arr,
        room_chat: room_chat,
    });
}

//
ChatScreenTimeLine.propTypes = {};

//
function ChatScreenTimeLine({ time_line_arr, room_chat }) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: time_line_arr,
        handle_API_L: (c_count) =>
            handle_API_ChatTimeLine_L(room_chat, c_count),
    });

    const { data_arr, count, is_fetching } = data_state;

    // 
    useEffect(() => {
        getData_API()
    }, [])

    //
    function handleWhenFinally() {}

    //
    function handleShowMore() {
        getData_API({ handleWhenFinally: handleWhenFinally });
    }

    //
    return (
        <div className="chat-screen-list">
            <div>
                {data_arr.map((item, item_ix) => (
                    <div
                        key={`ActionsChat_time_line_${item_ix}`}
                        className="ChatScreenTimeLine_item"
                    >
                        <div className="padding-8px">
                            <span className="font-500">
                                {item.user.first_name} {item.user.last_name}
                            </span>

                            <span className="ChatScreenTimeLine_status font-italic">
                                {item.status}
                            </span>

                            <span className="font-500">
                                {item.friend.first_name} {item.friend.last_name}
                            </span>
                        </div>
                    </div>
                ))}

                <ScreenBlurShowMore
                    title="Show more..."
                    is_show_more={count > data_arr.length}
                    is_fetching={is_fetching}
                    handleShowMore={handleShowMore}
                />
            </div>
        </div>
    );
}

export default ChatScreenTimeLine;
