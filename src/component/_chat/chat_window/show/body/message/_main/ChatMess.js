import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { context_api } from '../../../../../../../_context/ContextAPI';
//
import VirtualScroll from '../../../../../../virtual_scroll/VirtualScroll';
//
import ChatMessReacted from '../reacted/ChatMessReacted';
import ChatMessActions from '../actions/ChatMessActions';
import ChatMessVidPic from '../vid_pic/_main/ChatMessVidPic';
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
        <VirtualScroll rootMargin_y={400}>
            <div
                className={`ChatMess pos-rel ${
                    is_user
                        ? 'ChatMess_user flex-end'
                        : 'ChatMess_friend display-flex'
                }`}
            >
                <div className="ChatMess_mess">
                    {message ? (
                        <div className="ChatMess_content margin-left-auto width-fit-content padding-8px brs-10px bg-ccc">
                            {message}
                        </div>
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

                    <div className="ChatMess_actions pos-abs y-center">
                        <ChatMessActions
                            ref_bd_elm={ref_bd_elm}
                            chooseListTypeLike={chooseListTypeLike}
                            handleAction={handleAction}
                        />
                    </div>

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
        </VirtualScroll>
    );
}

export default ChatMess;
