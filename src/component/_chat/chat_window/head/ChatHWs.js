import React from 'react';
import PropTypes from 'prop-types';
//
import PictureName from '../../../picture_name/pic_name/PictureName';
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
//
import './ChatH.scss';

//
function ChatH(props) {
    const {
        chat_ix,
        is_group,
        zoom_users,
        is_hide,
        count_user,
        hideShowMessage,
        closeMessage,
        openActionsMess,
    } = props;
    //
    const some_user_pics = zoom_users
        .sort((item) => item.is_friend)
        .slice(0, 3)
        .map((item) => item.user.picture);
    //
    function onHideShowMessage() {
        hideShowMessage(chat_ix);
    }
    //
    function onCloseMessage() {
        closeMessage(chat_ix);
    }

    //
    function onShowAllUsers() {
        if (!is_hide) {
            openActionsMess('zoom_user', {
                chat_ix: chat_ix,
            });
        }
    }

    //
    return (
        <div className="ChatH">
            <div className="ChatH_row">
                {is_group && (
                    <div
                        className="ChatH_user display-flex cursor-pointer"
                        onClick={onShowAllUsers}
                    >
                        {some_user_pics.map((pic, pic_ix) => (
                            <div
                                className="ChatH_user-pic"
                                key={`ChatH_user_pic_${pic_ix}`}
                            >
                                <img
                                    className="brs-50"
                                    src={pic}
                                    alt=""
                                    width="30"
                                    height="30"
                                />
                            </div>
                        ))}
                        <div
                            className={
                                count_user > some_user_pics.length
                                    ? ''
                                    : 'display-none'
                            }
                        >
                            + {count_user - some_user_pics.length}
                        </div>
                    </div>
                )}

                {!is_group && (
                    <div className="ChatH_user">
                        <PictureName user={zoom_users[0].user} />
                    </div>
                )}

                <div className="ChatH_actions">
                    <div className="ChatH_actions-row">
                        <div
                            className={`ChatH_actions_btn brs-5px hv-opacity ${
                                is_hide
                                    ? 'ChatH_actions_btn-hide_active'
                                    : 'ChatH_actions_btn-hide'
                            }`}
                            onClick={onHideShowMessage}
                            title={is_hide ? 'Show' : 'Hide'}
                        >
                            <IconsArrow size_icon="0.75rem" />
                        </div>

                        <div
                            className="ChatH_actions_btn brs-5px hv-opacity"
                            onClick={onCloseMessage}
                            title="Close chat"
                        >
                            <IconsArrow y={400} size_icon="0.75rem" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

ChatH.propTypes = {
    friend_user: PropTypes.object,
    is_hide: PropTypes.bool,
    hideShowMessage: PropTypes.func,
    closeMessage: PropTypes.func,
};

ChatH.defaultProps = {
    is_hide: false,
};

export default ChatH;
