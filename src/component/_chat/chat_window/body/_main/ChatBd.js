import React from 'react';
import PropTypes, { func } from 'prop-types';
//
import ScreenBlurShowMore from '../../../../_screen/components/part/foot/ScreenBlurShowMore';
import WaitingBall from '../../../../waiting/waiting_ball/WaitingBall';
import FetchingDiv from '../../../../some_div/fetching/FetchingDiv';
//
import './ChatBd.scss';
//
import ChatBdLastGroup from '../chat_body_last/group/ChatBdlastGroup';
import ChatBdLastSingle from '../chat_body_last/single/ChatBdLastSingle';
import ChatMess from '../message/ChatMess';

//
ChatBd.propTypes = {};

//
function ChatBd({
    zoom_chat,
    chat_ix,
    messages,
    count_message,
    fetching_message,
    is_on_input,

    is_group,
    zoom_users,
    zoom_creator,

    handleScroll,
    handleMouseLeave,

    getMoreMessages,
    openZoomVidPics,
    openActionsMess,
}) {
    //
    const is_mobile = localStorage.is_mobile == 1;

    // 
    function onScroll(e) {
        handleScroll(e, chat_ix)
    }

    // 
    function onGetMoreMessages() {
        getMoreMessages(chat_ix)
    }

    // 
    function onMouseLeave(e) {
        handleMouseLeave(e, chat_ix)
    }

    //
    return (
        <div
            className="ChatWd_body-contain display-flex col-reverse scroll-thin"
            onScroll={is_mobile ? undefined : onScroll}
            onMouseLeave={is_mobile ? undefined : onMouseLeave}
        >
            <div>
                <div
                    className={`ChatWd_body-last ${
                        messages.length >= count_message ? '' : 'display-none'
                    }`}
                >
                    {is_group ? (
                        <ChatBdLastGroup
                            zoom_users={zoom_users}
                            zoom_creator={zoom_creator}
                        />
                    ) : (
                        <ChatBdLastSingle
                            friend_user={zoom_users[0].user}
                            is_friend={zoom_users[0].is_friend}
                        />
                    )}
                </div>

                <div className="ChatWd_body-fetching margin-auto width-fit-content">
                    <ScreenBlurShowMore
                        title="See old messages"
                        is_show_more={
                            is_mobile && count_message > messages.length
                        }
                        is_fetching={fetching_message}
                        //
                        handleShowMore={onGetMoreMessages}
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
                                zoom_chat={zoom_chat}
                                chat_ix={chat_ix}
                                mess_ix={mess_ix}
                                mess_item={mess_item}
                                //
                                openZoomVidPics={openZoomVidPics}
                                openActionsMess={openActionsMess}
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
