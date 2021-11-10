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
import FetchingDiv from '../../../../../some_div/fetching/FetchingDiv';
//
import ChatBdLastGroup from '../chat_body_last/group/ChatBdLastGroup';
import ChatBdLastSingle from '../chat_body_last/single/ChatBdLastSingle';
import ChatMess from '../message/_main/ChatMess';
import ChatBdChanges from '../changes/_main/ChatBdChanges';
import ChatBdTexting from '../texting/ChatBdTexting';
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
            <div className="ChatBd_contain_end bg-primary flex-grow-1 flex-basis-0 padding-2px"></div>

            {is_on_input ? (
                <div className="ChatBd_mess bg-primary">
                    <ChatBdTexting is_on_input={is_on_input} />
                </div>
            ) : null}

            <div className="display-flex col-reverse">
                {messages.map((mess_item, mess_ix) => (
                    <div
                        key={mess_ix}
                        className={`ChatBd_mess ChatBd_mess-${chat_ix}`}
                    >
                        <div className="padding-5px bg-primary"></div>
                        {mess_item.type == 'mess' ? (
                            <ChatMess
                                ref_bd_elm={ref_bd_elm}
                                chat_ix={chat_ix}
                                mess_ix={mess_ix}
                                mess_item={mess_item}
                                //
                                ist_last_sent={
                                    mess_ix == 0 ||
                                    mess_item.type !=
                                        messages[mess_ix - 1].type ||
                                    mess_item.user.id !=
                                        messages[mess_ix - 1].user.id
                                }
                            />
                        ) : (
                            <ChatBdChanges mess_item={mess_item} />
                        )}

                        <div className="padding-5px bg-primary"></div>
                    </div>
                ))}
            </div>

            <div className="padding-y-5px bg-primary">
                {IS_MOBILE ? (
                    <ScreenBlurShowMore
                        title={
                            <div className="text-secondary font-italic">
                                See old messages
                            </div>
                        }
                        is_show_more={count_message > messages.length}
                        is_fetching={is_fetching}
                        //
                        handleShowMore={handleShowMore}
                        FetchingComponent={FetchingDiv}
                    />
                ) : (
                    <div className="display-flex-center">
                        <FetchingDiv is_fetching={is_fetching} />
                    </div>
                )}
            </div>

            <div className="bg-primary flex-grow-1 flex-basis-0"></div>

            {messages.length >= count_message ? (
                <div className="bg-primary padding-y-20px padding-x-10px">
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
        </div>
    );
}

export default ChatBd;
