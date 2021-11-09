import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { context_api } from '../../../../../../../_context/ContextAPI';
//
import VirtualScroll from '../../../../../../virtual_scroll/VirtualScroll';
//
import ChatMessReacted from '../reacted/ChatMessReacted';
import ChatMessActions from '../actions/ChatMessActions';
import ChatMessVidPic from '../vid_pic/_main/ChatMessVidPic';
import ChatMessContent from '../content/ChatMessContent';
//
import './ChatMess.scss';

//
ChatMess.propTypes = {};

ChatMess.defaultProps = {};

//
function ChatMess({ ref_bd_elm, mess_item }) {
    //
    const { user } = useContext(context_api);

    //
    const {
        id,
        profile_model,
        message,
        vid_pics,
        vid_pic_count,

        reacted_ix_arr,
        reacted_count,

        created_time,
    } = mess_item;

    //
    const is_user = profile_model == user.id;

    // -------

    //
    function chooseListTypeLike(reacted_ix) {
        console.log(reacted_ix);
    }

    //
    function handleAction(action_name = '') {
        console.log(action_name);
    }

    //
    return (
        <div className={`${is_user ? '' : 'bg-primary'}`}>
            <VirtualScroll ref_root={ref_bd_elm} rootMargin_y={400}>
                <div className="display-flex">
                    <div className="padding-7px bg-primary"></div>

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
                                chooseListTypeLike={chooseListTypeLike}
                                handleAction={handleAction}
                            />
                        </div>

                        <div className="ChatMess_mess">
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
                                        chooseListTypeLike={chooseListTypeLike}
                                    />
                                </div>
                            ) : null}
                        </div>
                    </div>

                    <div className="padding-10px bg-primary"></div>
                </div>
            </VirtualScroll>
        </div>
    );
}

export default ChatMess;
