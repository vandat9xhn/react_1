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

//
ChatOptions.propTypes = {};

//
function ChatOptions(props) {
    //
    const { closeAllZoomChat, hideAllZoomChat } = useContext(context_api);

    //
    const [option_state, setOptionState] = useState({
        open_options: false,
    });

    const { open_options } = option_state;

    //
    function toggleOptions() {
        setOptionState({
            ...option_state,
            open_options: !open_options,
        });
    }

    //
    function closeOptions() {
        open_options &&
            setOptionState({
                ...option_state,
                open_options: false,
            });
    }

    // 
    function onHideAllZoomChat() {
        hideAllZoomChat()
        closeOptions()
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
                                <div
                                    className="ChatOptions_item padding-8px hv-bg-blur cursor-pointer text-nowrap"
                                    onClick={closeAllZoomChat}
                                >
                                    <span>Close all chats</span>
                                </div>

                                <div
                                    className="ChatOptions_item padding-8px hv-bg-blur cursor-pointer text-nowrap"
                                    onClick={onHideAllZoomChat}
                                >
                                    <span>Minimise open chats</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CloseDiv>
    );
}

export default ChatOptions;
