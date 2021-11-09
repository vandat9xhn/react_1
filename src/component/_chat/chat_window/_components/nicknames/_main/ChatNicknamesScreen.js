import React from 'react';
import PropTypes from 'prop-types';
//
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
// 
import ScreenBlurHead from '../../../../../_screen/components/part/head/ScreenBlurHead';
//
import ChatNicknamesScreenItem from '../item/ChatNicknamesScreenItem';
// 
import './ChatNicknamesScreen.scss';

//
ChatNicknamesScreen.propTypes = {};

//
function ChatNicknamesScreen({ room_users, changeNickName, handleClose }) {
    // 
    useMakeBodyHidden({ use_z_index: true, screen_z_index: 41 });

    //
    return (
        <div className="ChatNicknamesScreen screen">
            <div className="ChatNicknamesScreen_contain screen-contain w-550px">
                <div>
                    <ScreenBlurHead
                        title="Nicknames"
                        is_center={true}
                        closeScreenBlur={handleClose}
                    />
                </div>

                <div className="ChatNicknamesScreen_list padding-8px">
                    {room_users.map((item, ix) => (
                        <div key={item.id}>
                            <ChatNicknamesScreenItem
                                ix={ix}
                                user={item.user}
                                nickname={item.nickname}
                                changeNickName={changeNickName}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChatNicknamesScreen;
