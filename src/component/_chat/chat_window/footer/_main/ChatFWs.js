import React, { useState } from 'react';
import PropTypes from 'prop-types';
//
import Textarea from '../../../../input/textarea/Textarea';
//
import ChatMT from '../chat_more_top/ChatMT';
import ChatMB from '../chat_more_bot/ChatMB';
import ChatSd from '../chat_send/ChatSd';
import ChatPv from '../chat_preview/ChatPv';
//
import './ChatF.scss';

ChatF.propTypes = {
    text: PropTypes.string,
    more_input: PropTypes.bool,
    should_send: PropTypes.bool,
    //
    letDrawCanvas: PropTypes.func,
    handleChooseFiles: PropTypes.func,
    moreActionsIp: PropTypes.func,
    //
    sendOnInput: PropTypes.func,
    sendMessage: PropTypes.func,
    //
    current_canvas: PropTypes.string,
    urls: PropTypes.array,
    file_reading: PropTypes.bool,
    show_preview: PropTypes.bool,
    // 
    deleteAnItemPreview: PropTypes.func,
    deleteCanvasDraw: PropTypes.func,
    showPreview: PropTypes.func,
};

ChatF.defaultProps = {
    more_input: false,
};


//
function ChatF({chat_ix,
    more_input,
    should_send,
    //
    letDrawCanvas,
    handleChooseFiles,
    moreActionsIp,
    //
    current_canvas,
    urls,
    file_reading,
    show_preview,
    //
    deleteAnItemPreview,
    deleteCanvasDraw,
    showPreview,
    //
    handleSend,
    sendOnInput,}) {
    //
    const [new_text, setNewText] = useState('');

    //
    function onChangeIp(value) {
        if (new_text != '' && value == '') {
            sendOnInput(false);
        }
        if (new_text == '' && value != '') {
            sendOnInput(true);
        }
        //
        setNewText(value);
    }

    // 
    function onMoreActionsIp() {
        moreActionsIp(chat_ix)
    }

    // 
    function onChooseFiles(e) {
        handleChooseFiles(e, chat_ix)
    }

    // 
    function onLetDrawCanvas() {
        letDrawCanvas(chat_ix)
    }

    // 
    function onShowPreview() {
        showPreview(chat_ix)
    }

    // 
    function onDeleteAnItemPreview(file_ix) {
        deleteAnItemPreview(file_ix, chat_ix)
    }

    // 
    function onDeleteCanvasDraw() {
        deleteCanvasDraw(chat_ix);
    }

    //
    function onSend() {
        setNewText('');
        handleSend(chat_ix, new_text);
        if (
            document.getElementsByClassName('ChatF_textarea')[chat_ix].style
                .height != 'auto'
        ) {
            document.getElementsByClassName('ChatF_textarea')[
                chat_ix
            ].style.height = 'auto';
        }
    }

    //
    return (
        <div className="ChatF">
            <div className="ChatF_contain">
                {/* more actions top*/}
                <div
                    className={`ChatF_MT ${
                        more_input ? 'ChatF_MT-open' : 'ChatF_MT-close'
                    }`}
                >
                    <ChatMT
                        letDrawCanvas={onLetDrawCanvas}
                        handleChooseFiles={onChooseFiles}
                    />
                </div>

                <div className="ChatF_row">
                    {/* more action bottom */}
                    <div
                        className={`ChatF_MB ${
                            more_input || new_text.trim()
                                ? 'ChatF_MB-close'
                                : 'ChatF_MB-open'
                        }`}
                    >
                        <ChatMB
                            has_text={!!new_text.trim()}
                            more_input={more_input}
                            moreActionsIp={onMoreActionsIp}
                            letDrawCanvas={onLetDrawCanvas}
                            handleChooseFiles={onChooseFiles}
                        />
                    </div>

                    {/* input text*/}
                    <div className="ChatF_Ip">
                        <Textarea
                            text={new_text}
                            placeholder="Chat..."
                            textarea_class="ChatF_textarea scroll-thin"
                            onChange={onChangeIp}
                            handleSend={onSend}
                        />
                    </div>

                    {/* send */}
                    <div className="ChatF_Sd">
                        <ChatSd
                            should_send={should_send || !!new_text.trim()}
                            handleSend={onSend}
                        />
                    </div>
                </div>
            </div>

            {/* preview */}
            <div className="ChatF_preview">
                <ChatPv
                    current_canvas={current_canvas}
                    urls={urls}
                    file_reading={file_reading}
                    show_preview={show_preview}
                    //
                    letDrawCanvas={onLetDrawCanvas}
                    deleteCanvasDraw={onDeleteCanvasDraw}
                    deleteAnItemPreview={onDeleteAnItemPreview}
                    showPreview={onShowPreview}
                />
            </div>
        </div>
    );
}

export default ChatF;
