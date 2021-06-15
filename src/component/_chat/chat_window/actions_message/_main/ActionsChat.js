import React, { useContext } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../_context/ContextAPI';
//
import IconsArrow from '../../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ActionsChat.scss';
//
import ActionsEdit from '../edit/ActionsEdit';
import ActionsLike from '../like/_main/ActionsLikesWs';
import ZoomUser from '../zoom_user/ZoomUser';
import ActionsFriendUserList from '../friend_user_to_add/_main/ActionsFriendUserList';
import ActionsTimeLineList from '../time_line/ActionsTimeLineList';
import ActionsUserLikedList from '../user_liked/ActionsUserLikedList';

//
ActionsChat.propTypes = {};

//
function ActionsChat({
    chat_ix,
    is_group,
    //
    zoom_users,
    zoom_owner,
    //
    actions_obj,
    //
    sendDeleteMessageWs,
    sendLikeMessageWs,
    sendForceUserQuit,
    sendAddFriendToGroupWs,
    //
    getMoreTimeLineGroup,
    getMoreUserLiked,
    getMoreFriendsAddToGroup,
    //
    closeActionsMess,
}) {
    //
    const { id: c_user_id } = useContext(context_api).user;

    //
    const {
        type: action_type,
        like,
        user_liked,
        time_line,
        add_user,
    } = actions_obj;

    //
    function onCloseActionsMess() {
        closeActionsMess(chat_ix);
    }

    //
    function onGetMoreTimeLineGroup() {
        getMoreTimeLineGroup(chat_ix);
    }

    //
    function onGetMoreUserLiked() {
        getMoreUserLiked(chat_ix);
    }

    //
    function onGetMoreFriendsAddToGroup() {
        getMoreFriendsAddToGroup(chat_ix);
    }

    //
    return (
        <div className="ActionsChat">
            <div
                className="ActionsChat_bg bg-loader"
                // onClick={closeActionsMess}
            ></div>

            <div
                className="ActionsChat_close close-icon-small brs-50 hv-opacity cursor-pointer"
                onClick={onCloseActionsMess}
            >
                <IconsArrow y={400} />
            </div>

            <div className="ActionsChat_pos scroll-thin bg-primary">
                <div className="ActionsChat_contain">
                    {action_type == 'like' && (
                        <ActionsLike
                            chat_ix={chat_ix}
                            chooseBdTypeLike={sendLikeMessageWs}
                            user_like={like.user_like}
                            is_active={action_type == 'like'}
                        />
                    )}

                    {action_type == 'edit' && (
                        <ActionsEdit
                            chat_ix={chat_ix}
                            delBdMessage={sendDeleteMessageWs}
                        />
                    )}

                    {action_type == 'user_liked' && (
                        <ActionsUserLikedList
                            user_liked={user_liked}
                            getMoreUserLiked={onGetMoreUserLiked}
                        />
                    )}

                    {is_group && (
                        <div className="ActionsChat_item">
                            {action_type == 'zoom_user' &&
                                zoom_users.map((zoom_user, user_ix) => (
                                    <ZoomUser
                                        key={`ActionsChat_user_${user_ix}`}
                                        c_user_id={c_user_id}
                                        zoom_owner={zoom_owner}
                                        zoom_user={zoom_user}
                                        sendForceUserQuit={sendForceUserQuit}
                                    />
                                ))}

                            {action_type == 'add_user' && (
                                <ActionsFriendUserList
                                    add_user={add_user}
                                    sendAddFriendToGroupWs={
                                        sendAddFriendToGroupWs
                                    }
                                    getMoreFriendsAddToGroup={
                                        onGetMoreFriendsAddToGroup
                                    }
                                />
                            )}

                            {action_type == 'time_line' && (
                                <ActionsTimeLineList
                                    time_line={time_line}
                                    getMoreTimeLineGroup={
                                        onGetMoreTimeLineGroup
                                    }
                                />
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ActionsChat;
