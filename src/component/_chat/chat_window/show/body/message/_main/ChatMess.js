import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { context_api } from '../../../../../../../_context/ContextAPI';
import { context_chat } from '../../../../../../../_context/chat/ContextChat';
//
import { WsSend } from '../../../../../../../_some_function/WsSend';

import { openScreenConfirm } from '../../../../../../_screen/type/confirm/ScreenConfirm';
//
import IconSent from '../../../../../../../_icons_svg/icons_status_message/icon_sent/IconSent';
//
import VirtualScroll from '../../../../../../virtual_scroll/VirtualScroll';
//
import ChatMessReacted from '../reacted/ChatMessReacted';
import ChatMessActions from '../actions/ChatMessActions';
import ChatMessVidPic from '../vid_pic/_main/ChatMessVidPic';
import ChatMessContent from '../content/ChatMessContent';
//
import './ChatMess.scss';
import ChatMessRemove from '../remove/_main/ChatMessRemove';
import { WS_CHAT_TYPE_OBJ } from '../../../../../_ws/_type';
import ChatMessUnsent from '../unsent/_main/ChatMessUnsent';
import ChatMessEmoji from '../emoji/ChatMessEmoji';
import { IS_MOBILE } from '../../../../../../../_constant/Constant';

//
ChatMess.propTypes = {};

ChatMess.defaultProps = {};

//
function ChatMess({ ref_bd_elm, mess_item, ist_last_sent }) {
    //
    const { user: c_user, openScreenFloor } = useContext(context_api);

    const { ws, is_group } = useContext(context_chat);

    //
    const {
        id,
        user,
        unsent,
        user_seen_arr,
        user_receive_arr,

        message,
        vid_pics,
        vid_pic_count,
        emoji,

        reacted_ix_arr,
        reacted_count,

        created_time,
    } = mess_item;

    //
    const is_user = user.id == c_user.id;

    // -------

    //
    function chooseListTypeLike(reacted_ix) {
        WsSend(ws, {
            type: WS_CHAT_TYPE_OBJ.REACTED_MESS,
            id: id,
            reacted_ix: reacted_ix,
        });
    }

    // -----

    //
    function handleWsDelMess() {
        //
        const user_not_unsent = is_user && !unsent;
        let is_for_you = !is_user || unsent;

        //
        function callbackChoose(remove_ix) {
            is_for_you = remove_ix == 1;
        }

        const title = user_not_unsent
            ? 'Who do you want to remove this message for?'
            : 'Remove for you';
        const notification = user_not_unsent ? (
            <ChatMessRemove callbackChoose={callbackChoose} />
        ) : (
            'This message will be removed for you. Other chat members will still be able to see it.'
        );

        openScreenConfirm({
            openScreenFloor: openScreenFloor,

            class_main: user_not_unsent ? 'ChatMess_remove_screen' : '',
            title: title,
            title_center: !IS_MOBILE,
            notification: notification,

            title_yes: 'Remove',
            title_no: 'Cancel',

            handleConfirm: () => {
                WsSend(ws, {
                    type: WS_CHAT_TYPE_OBJ.REMOVE_MESS,
                    id: id,
                    is_for_you: is_for_you,
                });
            },
        });
    }

    //
    function handleWsForwardMess() {
        console.log('forward');
    }

    //
    function handleAction(action_name = '') {
        if (action_name == 'remove') {
            handleWsDelMess();
        }

        if (action_name == 'forward') {
            handleWsForwardMess();
        }
    }

    //
    return (
        <div className={`${is_user ? '' : 'bg-primary'}`}>
            <VirtualScroll ref_root={ref_bd_elm} rootMargin_y={400}>
                <div>
                    {is_group && !is_user ? (
                        <div className="bg-primary text-align-center line-16px font-12px text-secondary">
                            {user.last_name}
                        </div>
                    ) : null}

                    <div className="display-flex">
                        <div className="padding-left-5px padding-right-4px bg-primary">
                            {!is_user && ist_last_sent ? (
                                <div className="h-100per flex-col flex-end">
                                    <img
                                        className="border-blur brs-50 object-fit-cover"
                                        src={user.picture}
                                        alt=""
                                        width="24"
                                        height="24"
                                    />
                                </div>
                            ) : null}
                        </div>

                        <div
                            className={`ChatMess pos-rel flex-grow-1 display-flex ${
                                is_user
                                    ? 'ChatMess_user text-white'
                                    : 'ChatMess_friend row-reverse'
                            }`}
                        >
                            <div className="flex-1 bg-primary"></div>

                            <div className="ChatMess_actions display-flex-center padding-x-5px bg-primary">
                                <ChatMessActions
                                    ref_bd_elm={ref_bd_elm}
                                    unsent={unsent}
                                    chooseListTypeLike={chooseListTypeLike}
                                    handleAction={handleAction}
                                />
                            </div>

                            {unsent ? (
                                <ChatMessUnsent />
                            ) : (
                                <div
                                    className={`ChatMess_mess ${
                                        vid_pic_count ? 'flex-grow-1' : ''
                                    } ${emoji ? 'bg-primary' : ''}`}
                                >
                                    {emoji ? (
                                        <ChatMessEmoji emoji={emoji} />
                                    ) : null}

                                    {message ? (
                                        <ChatMessContent
                                            ref_bd_elm={ref_bd_elm}
                                            message={message}
                                        />
                                    ) : null}

                                    {vid_pic_count ? (
                                        <div className="ChatMess_vid_pic">
                                            <ChatMessVidPic
                                                mess_id={id}
                                                vid_pics={vid_pics}
                                                vid_pic_count={vid_pic_count}
                                            />
                                        </div>
                                    ) : null}

                                    {reacted_count ? (
                                        <div className="ChatMess_felt">
                                            <ChatMessReacted
                                                mess_id={id}
                                                reacted_count={reacted_count}
                                                reacted_ix_arr={reacted_ix_arr}
                                                chooseListTypeLike={
                                                    chooseListTypeLike
                                                }
                                            />
                                        </div>
                                    ) : null}
                                </div>
                            )}
                        </div>

                        <div className="padding-x-5px bg-primary">
                            <div className="h-100per flex-col flex-end">
                                {user_seen_arr.length ? (
                                    <div className="pos-rel brs-50 overflow-hidden">
                                        <img
                                            className="border-blur brs-50 object-fit-cover"
                                            src={user_seen_arr[0].picture}
                                            alt=""
                                            width="14"
                                            height="14"
                                        />

                                        {/* {user_count > 1 ? <div className="pos-abs-100">

                                    </div> : null} */}
                                    </div>
                                ) : user_receive_arr.length ? (
                                    <div className="ChatMess_sent display-flex-center brs-50 bg-ccc">
                                        <IconSent
                                            size_icon="14px"
                                            stroke="var(--white)"
                                        />
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                </div>
            </VirtualScroll>
        </div>
    );
}

export default ChatMess;
