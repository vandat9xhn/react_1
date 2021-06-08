import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import { context_api } from '../../../../../_context/ContextAPI';
import { VideoOrImage } from '../../../../../_some_function/VideoOrImage';
//
import IconFaceGray from '../../../../../_icons_svg/icons_like/_Icon_face_gray/IconFaceGray';
import { type_likes } from '../../../../like/list_type_like/type_likes/TypeLikes';
//
import './ChatMess.scss';

//
function ChatMess({
    zoom_chat,
    chat_ix,
    mess_ix,
    mess_item,

    openZoomVidPics,
    openActionsMess,
}) {
    //
    const c_user_id = useContext(context_api).user.id;

    //
    const {
        id,
        profile_user,
        message,
        vid_pics,
        count_vid_pic,
        created_time,
        arr_distinct_user_like,
        count_user_like,
        // user_statuses,
    } = mess_item;

    //
    function onOpenActionsMess(type) {
        openActionsMess(type, {
            chat_ix: chat_ix,
            mess_ix: mess_ix,
            mess_id: id,
        });
    }

    //
    function onOpenActionsEdit() {
        onOpenActionsMess('edit');
    }
    //
    function onOpenActionsLike() {
        onOpenActionsMess('like');
    }
    
    //
    function onShowAllUserLikes() {
        onOpenActionsMess('user_liked');
    }

    //
    return (
        <div className="ChatMess">
            <div
                className={`ChatMess_common ${
                    profile_user == c_user_id
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
                                        count_vid_pic > 4 ? 5 : count_vid_pic
                                    }`}
                                    data-length={
                                        count_vid_pic > 4 && index == 3
                                            ? count_vid_pic - 4
                                            : ''
                                    }
                                    onClick={() =>
                                        openZoomVidPics(
                                            zoom_chat,
                                            id,
                                            vid_pics,
                                            count_vid_pic,
                                            index
                                        )
                                    }
                                >
                                    {VideoOrImage(
                                        item.vid_pic || item.url,
                                        item.type
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* status send */}
                    {/* <div className="ChatMess__status">
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
                    <div className="ChatMess_more">
                        {/* actions */}
                        {profile_user == c_user_id && (
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
                        onClick={onShowAllUserLikes}
                    >
                        <div className="ChatMess__felt-row">
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
                                        className="ChatMess__felt-elm"
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
    );
}

ChatMess.propTypes = {};

ChatMess.defaultProps = {};

export default ChatMess;
