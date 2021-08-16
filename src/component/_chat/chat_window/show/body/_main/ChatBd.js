import React, { useContext, useEffect, useLayoutEffect, useRef } from 'react';
import PropTypes from 'prop-types';
//
import { IS_MOBILE } from '../../../../../../_constant/Constant';
// 
import { context_chat } from '../../../../../../_context/chat/ContextChat';
//
import { useChatScrollUp } from '../../../../../../_hooks/chat/useChatScrollUp';
//
import ScreenBlurShowMore from '../../../../../_screen/components/part/foot/ScreenBlurShowMore';
import WaitingBall from '../../../../../waiting/waiting_ball/WaitingBall';
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import './ChatBd.scss';
//
import ChatBdLastGroup from '../chat_body_last/group/ChatBdlastGroup';
import ChatBdLastSingle from '../chat_body_last/single/ChatBdLastSingle';
import ChatMess from '../message/_main/ChatMess';



//
ChatBd.propTypes = {};

//
function ChatBd({
    chat_ix,
    message_obj,
    is_on_input,

    room_users,
    room_creator,
}) {
    //
    const { room_chat, is_group, scroll_y } = useContext(context_chat);

    //
    const { messages, count_message } = message_obj;

    //
    const ref_bd_elm = useRef(null);

    //
    const { is_fetching, getData_API, handleScroll } = useChatScrollUp({
        ref_elm: ref_bd_elm,
        room_chat: room_chat,
        message_obj: message_obj,
    });

    //
    useLayoutEffect(() => {
        ref_bd_elm.current.scrollTop = scroll_y;
    }, []);

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div
            ref={ref_bd_elm}
            className="ChatWd_body_contain display-flex col-reverse scroll-thin"
            onScroll={IS_MOBILE ? undefined : handleScroll}
        >
            <div>
                <div
                    className={`ChatWd_body-last ${
                        messages.length >= count_message ? '' : 'display-none'
                    }`}
                >
                    {is_group ? (
                        <ChatBdLastGroup
                            room_users={room_users}
                            room_creator={room_creator}
                        />
                    ) : (
                        <ChatBdLastSingle
                            friend_user={room_users[0].user}
                            is_friend={room_users[0].is_friend}
                        />
                    )}
                </div>

                <div className="margin-auto width-fit-content">
                    <ScreenBlurShowMore
                        title="See old messages"
                        is_show_more={
                            IS_MOBILE && count_message > messages.length
                        }
                        is_fetching={is_fetching}
                        //
                        handleShowMore={handleShowMore}
                        FetchingComponent={FetchingDiv}
                    />
                </div>

                <div className="display-flex col-reverse">
                    {messages.map((mess_item, mess_ix) => (
                        <div
                            className={`ChatWd_body-mess ChatWd_body-mess-${chat_ix}`}
                            key={`ChatWd_body_${mess_ix}`}
                        >
                            <ChatMess
                                chat_ix={chat_ix}
                                mess_ix={mess_ix}
                                mess_item={mess_item}
                            />
                        </div>
                    ))}
                </div>

                <div className="ChatWd_body-mess">
                    <div
                        className={`ChatWd_friend-texting ${
                            is_on_input ? '' : 'ChatWd_friend-texting_close'
                        }`}
                    >
                        <WaitingBall is_fetching={is_on_input} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBd;
