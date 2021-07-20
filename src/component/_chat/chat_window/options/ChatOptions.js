import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../_context/ContextAPI';
//
import IconThreeDot from '../../../../_icons_svg/icon_three_dot/IconThreeDot';
//
import CloseDiv from '../../../some_div/close_div/CloseDiv';
//
import './ChatOptions.scss';
import IconSubtract from '../../../../_icons_svg/subtract/IconSubtract';
import IconsArrow from '../../../../_icons_svg/icons_arrow/IconsArrow';
import IconsEye from '../../../../_icons_svg/icons_eye/IconsEye';

//
ChatOptions.propTypes = {};

//
function ChatOptions({ is_show_chat_hide, toggleChatInactive }) {
    //
    const { closeAllZoomChat, hideAllZoomChat } = useContext(context_api);

    //
    const [state_obj, setStateObj] = useState({
        open_options: false,
    });

    const { open_options } = state_obj;

    //
    function toggleOptions() {
        setStateObj({
            ...state_obj,
            open_options: !open_options,
        });
    }

    //
    function closeOptions() {
        open_options &&
            setStateObj({
                ...state_obj,
                open_options: false,
            });
    }

    //
    function onHideAllZoomChat() {
        hideAllZoomChat();
        closeOptions();
    }

    //
    function onToggleChatInactive() {
        setStateObj({
            open_options: false,
        });

        toggleChatInactive();
    }

    //
    return (
        <CloseDiv makeDivHidden={closeOptions}>
            <div className="padding-4px position-rel">
                <div>
                    <div>
                        <div className="ChatOptions_menu display-flex-center">
                            <div
                                className="ChatOptions_menu-contain bg-primary display-flex-center hv-bg-blur box-shadow-fb brs-50 cursor-pointer"
                                onClick={toggleOptions}
                                title="Options"
                            >
                                <IconThreeDot />
                            </div>
                        </div>
                    </div>

                    <div
                        className={`ChatOptions_list ${
                            open_options ? '' : 'display-none'
                        }`}
                    >
                        <div className="ChatOptions_list-contain padding-8px bg-primary brs-8px box-shadow-fb">
                            <div className="chat-hide-contain">
                                {[
                                    {
                                        icon: (
                                            <IconsArrow
                                                y={400}
                                                size_icon="0.75rem"
                                            />
                                        ),
                                        title: 'Close all chats',
                                        funcHandle: closeAllZoomChat,
                                    },
                                    {
                                        icon: (
                                            <IconSubtract size_icon="0.75rem" />
                                        ),
                                        title: 'Minimise open chats',
                                        funcHandle: onHideAllZoomChat,
                                    },
                                    {
                                        icon: (
                                            <IconsEye
                                                x={200}
                                                y={200}
                                                close_eye={is_show_chat_hide}
                                                size_icon="0.75rem"
                                            />
                                        ),
                                        title: is_show_chat_hide
                                            ? 'Hide'
                                            : 'Unhide',
                                        funcHandle: onToggleChatInactive,
                                    },
                                ].map((item, ix) => (
                                    <div
                                        key={`${ix}`}
                                        className="ChatOptions_item padding-8px hv-bg-blur cursor-pointer"
                                        onClick={item.funcHandle}
                                    >
                                        <div className="display-flex align-items-center">
                                            <div className="ChatOptions_item-icon display-flex-center">
                                                {item.icon}
                                            </div>

                                            <div className="text-nowrap">
                                                {item.title}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default ChatOptions;
