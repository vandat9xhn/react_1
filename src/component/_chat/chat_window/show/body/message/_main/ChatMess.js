import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { context_api } from '../../../../../../../_context/ContextAPI';
//
import IconFaceGray from '../../../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
//
import { type_likes } from '../../../../../../like/list_type_like/type_likes/TypeLikes';
//
import ChatMessageVidPic from '../vid_pic/ChatMessageVidPic';
//
import './ChatMess.scss';
import { context_chat } from '../../../../../../../_context/chat/ContextChat';
import { openChatLike } from '../../../../__screen/type/like/_main/ChatScreenLike';
import { openChatEdit } from '../../../../__screen/type/edit/ChatScreenEdit';
import { openChatLiked } from '../../../../__screen/type/user_liked/ChatScreenLiked';
import VirtualScroll from '../../../../../../virtual_scroll/VirtualScroll';

//
ChatMess.propTypes = {};

ChatMess.defaultProps = {};

//
function ChatMess({ mess_item }) {
    //
    const c_user_id = useContext(context_api).user.id;

    const { ws, openChatScreen } = useContext(context_chat);

    //
    const {
        id,
        profile_model,
        message,
        vid_pics,
        count_vid_pic,
        created_time,
        arr_distinct_user_like,
        count_user_like,
        // user_statuses,
    } = mess_item;

    //
    function onOpenActionsEdit() {
        openChatEdit({
            openChatScreen: openChatScreen,
            ws: ws,
            mess_id: mess_item.id,
        });
    }

    //
    function onOpenActionsLike() {
        openChatLike({
            openChatScreen: openChatScreen,
            ws: ws,
            mess_id: mess_item.id,
        });
    }

    //
    function onShowAllUserLiked() {
        openChatLiked({
            openChatScreen: openChatScreen,
            mess_id: mess_item.id,
        });
    }

    //
    return (
        <VirtualScroll rootMargin_y={200}>
            <div className="ChatMess">
                <div
                    className={`ChatMess_common position-rel display-flex ${
                        profile_model == c_user_id
                            ? 'ChatMess_user'
                            : 'ChatMess_Friend'
                    }`}
                >
                    <div className="ChatMess_mess">
                        <div
                            className={
                                message ? 'ChatMess_content' : 'display-none'
                            }
                        >
                            {message}
                        </div>

                        <div
                            className={`ChatMess_vid-pic bg-loader ${
                                count_vid_pic ? '' : 'display-none'
                            }`}
                            title={new Date(created_time).toLocaleString()}
                        >
                            <div className="VidPics_count">
                                {vid_pics.map((item, index) => (
                                    <div
                                        key={`VidPics_count_${index}`}
                                        className={`VidPics_count_${
                                            count_vid_pic > 4
                                                ? 5
                                                : count_vid_pic
                                        }`}
                                        data-length={
                                            count_vid_pic > 4 && index == 3
                                                ? count_vid_pic - 4
                                                : ''
                                        }
                                    >
                                        <ChatMessageVidPic
                                            id={id}
                                            ix={index}
                                            vid_pics={vid_pics}
                                            count_vid_pic={count_vid_pic}
                                            index={index}
                                            item={item}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* status send */}
                        {/* <div className="ChatMess__status display-none">
                            {user_statuses.map((user_status, user_ix) => (
                                <div key={`ChatMess__status${user_ix}`}>
                                    <img
                                        src={user_status.user.picture}
                                        alt=""
                                        width="30"
                                        height="30"
                                    />
                                </div>
                            ))}
                        </div> */}

                        {/* more */}
                        <div className="ChatMess_more display-flex align-items-center row-reverse">
                            {/* actions */}
                            {profile_model == c_user_id && (
                                <div className="ChatMess__actions hv-opacity cursor-pointer">
                                    <div
                                        className="display-flex"
                                        onClick={onOpenActionsEdit}
                                    >
                                        <div>.</div>
                                        <div>.</div>
                                        <div>.</div>
                                    </div>
                                </div>
                            )}

                            {/* like */}
                            <div className="ChatMess__like">
                                <div
                                    className="ChatMess__like-face hv-bg-blur hv-opacity brs-50 cursor-pointer"
                                    onClick={onOpenActionsLike}
                                >
                                    <IconFaceGray />
                                </div>
                            </div>
                        </div>

                        {/* felt */}
                        <div
                            className="ChatMess__felt cursor-pointer"
                            onClick={onShowAllUserLiked}
                        >
                            <div className="ChatMess__felt-row display-flex align-items-center">
                                <div
                                    className={
                                        count_user_like ? '' : 'display-none'
                                    }
                                >
                                    {count_user_like}
                                </div>

                                {arr_distinct_user_like.map(
                                    (type_like, type_like_ix) => (
                                        <div
                                            className="ChatMess__felt-elm display-flex-center"
                                            key={`ChatMess__status${type_like_ix}`}
                                        >
                                            {type_likes[type_like].component}
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </VirtualScroll>
    );
}

export default ChatMess;