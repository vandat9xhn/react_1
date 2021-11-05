import React, { useContext, useLayoutEffect, useRef } from 'react';
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
import ChatBdLastGroup from '../chat_body_last/group/ChatBdLastGroup';
import ChatBdLastSingle from '../chat_body_last/single/ChatBdLastSingle';
import ChatMess from '../message/_main/ChatMess';
//
import './ChatBd.scss';

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

    // ------

    //
    function handleShowMore() {
        getData_API();
    }

    //
    return (
        <div
            ref={ref_bd_elm}
            className="ChatBd_contain display-flex col-reverse scroll-thin h-100per"
            onScroll={handleScroll}
        >
            <div>
                {messages.length >= count_message ? (
                    <div className="margin-top-15px">
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
                ) : null}

                {IS_MOBILE ? (
                    <div className="margin-auto width-fit-content">
                        <ScreenBlurShowMore
                            title="See old messages"
                            is_show_more={count_message > messages.length}
                            is_fetching={is_fetching}
                            //
                            handleShowMore={handleShowMore}
                            FetchingComponent={FetchingDiv}
                        />
                    </div>
                ) : null}

                <div className="display-flex col-reverse">
                    {messages.map((mess_item, mess_ix) => (
                        <div
                            key={mess_ix}
                            className={`ChatBd_mess ChatBd_mess-${chat_ix}`}
                        >
                            <ChatMess
                                ref_bd_elm={ref_bd_elm}
                                chat_ix={chat_ix}
                                mess_ix={mess_ix}
                                mess_item={mess_item}
                            />
                        </div>
                    ))}
                </div>

                <div className="ChatBd_mess">
                    <div
                        className={`ChatBd_texting w-50per brs-10px border-blur ${
                            is_on_input
                                ? 'ChatBd_texting-show'
                                : 'ChatBd_texting-hide'
                        }`}
                    >
                        {is_on_input ? (
                            <WaitingBall is_fetching={is_on_input} />
                        ) : null}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatBd;
