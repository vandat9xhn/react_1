import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
//
import { handle_API_ChatEmoji_L } from '../../../../../../_handle_api/chat/emoji';
//
import { useDataShowMore } from '../../../../../../_hooks/useDataShowMore';
import { useMakeBodyHidden } from '../../../../../../_hooks/useMakeBodyHidden';
//
import ScreenBlurHead from '../../../../../_screen/components/part/head/ScreenBlurHead';
//
import ChatEmojiScreenCurrent from '../current/ChatEmojiScreenCurrent';
import ChatEmojiScreenList from '../list/ChatEmojiScreenList';

//
ChatEmojiScreen.propTypes = {};

//
function ChatEmojiScreen({
    emoji,

    removeEmoji,
    changeEmoji,
    handleClose,
}) {
    //
    const { data_state, getData_API } = useDataShowMore({
        initial_arr: [] || [{ title: '', emoji_row_arr: [[{ name: '' }]] }],
        handle_API_L: handle_API_ChatEmoji_L,
    });

    const { data_arr } = data_state;

    //
    useMakeBodyHidden({ use_z_index: true, screen_z_index: 41 });

    //
    useEffect(() => {
        getData_API();
    }, []);

    //
    return (
        <div className="ChatEmojiScreen screen">
            <div className="ChatEmojiScreen_contain screen-contain w-360px">
                <div>
                    <ScreenBlurHead
                        title="Emoji"
                        is_center={true}
                        closeScreenBlur={handleClose}
                    />
                </div>

                <div className="padding-20px">
                    {emoji.name != 'like' ? (
                        <div className="margin-bottom-10px">
                            <ChatEmojiScreenCurrent
                                emoji={emoji}
                                removeEmoji={removeEmoji}
                            />
                        </div>
                    ) : null}

                    <div>
                        {data_arr.map((item, ix) => (
                            <div key={ix}>
                                <ChatEmojiScreenList
                                    title={item.title}
                                    emoji_row_arr={item.emoji_row_arr}
                                    changeEmoji={changeEmoji}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatEmojiScreen;
