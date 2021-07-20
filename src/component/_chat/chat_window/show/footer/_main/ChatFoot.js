import React, { useContext, useRef, useState } from 'react';
import PropTypes from 'prop-types';
//
import { context_api } from '../../../../../../_context/ContextAPI';
import { context_chat } from '../../../../../../_context/chat/ContextChat';
//
import { handle_API_ChatMessage_C } from '../../../../../../_handle_api/chat/ChatHandleAPI';
//
import { openScreenCanvas } from '../../../../../_screen/type/canvas/_main/CanvasFixed';
//
import { useForceUpdate } from '../../../../../../_hooks/UseForceUpdate';
//
import { WsSend } from '../../../../../../_some_function/WsSend';
//
import Textarea from '../../../../../input/textarea/Textarea';
//
import ChatMT from '../chat_more_top/ChatMT';
import ChatMB from '../chat_more_bot/_main/ChatMB';
import ChatSd from '../chat_send/ChatSd';
import ChatPv from '../chat_preview/ChatPv';
//
import './ChatFoot.scss';

//
ChatF.propTypes = {};

ChatF.defaultProps = {};

//
function ChatF({ canvas_obj, input_obj }) {
    //
    const { openScreenFloor } = useContext(context_api);
    const { room_chat, ws } = useContext(context_chat);

    //
    const { text, files, urls } = input_obj;
    const { current_canvas } = canvas_obj;

    //
    const [foot_state, setFootState] = useState({
        file_reading: false,
        more_input: false,
    });

    const { file_reading, more_input } = foot_state;

    //
    const ref_ip_text_elm = useRef(null);

    //
    const forceUpdate = useForceUpdate();

    /* ---------- MORE ------------ */

    //
    function handleMoreInput() {
        setFootState({
            ...foot_state,
            more_input: !more_input,
        });
    }

    /* ---------- INPUT ------------ */
    //
    function handleChangeIp(value) {
        if (text.trim() && !value.trim()) {
            handleHasText(false);
        }
        if (!text.trim() && value.trim()) {
            handleHasText(true);
        }

        input_obj.text = value;
        forceUpdate();
    }

    //
    function handleHasText(has_text = false) {
        WsSend(ws, { type: 'on_input', on_input: has_text });
    }

    //
    function handleStartLoadFile() {
        setFootState({
            ...foot_state,
            file_reading: true,
        });
    }

    //
    function handleChooseFiles(data_files) {
        const { files: new_files, vid_pics } = data_files;

        files.push(...new_files);
        urls.push(...vid_pics);

        setFootState({
            ...foot_state,
            file_reading: false,
        });
    }

    function deleteAnItemPreview(delete_ix) {
        files.splice(delete_ix, 1);
        urls.splice(delete_ix, 1);

        forceUpdate();
    }

    function resetInput() {
        input_obj.text = '';
        input_obj.files = [];
        input_obj.urls = [];
    }

    /* -------------- CANVAS --------------- */

    //
    function resetCanvas() {
        canvas_obj.current_canvas = '';
        canvas_obj.list_canvas = [''];
        canvas_obj.c_step = 0;
        canvas_obj.bg = '#ffffff';
        canvas_obj.color = '#000000';
        canvas_obj.stroke_width = 1;
    }

    //
    function completeCanvas(canvas_data) {
        for (const key in canvas_data) {
            canvas_obj[key] = canvas_data[key];
        }

        forceUpdate();
    }

    //
    function letDrawCanvas() {
        openScreenCanvas({
            openScreenFloor: openScreenFloor,
            completeCanvas: completeCanvas,
            canvas_draws: canvas_obj,
        });
    }

    //
    function deleteCanvasDraw() {
        resetCanvas();
    }

    /* ------------- */

    //
    async function handleSend() {
        if (!text.trim() && !urls.length && !current_canvas) {
            return;
        }

        const data_send = [text, current_canvas, JSON.stringify(files)];

        resetCanvas();
        resetInput();
        forceUpdate();

        const textarea =
            ref_ip_text_elm.current.getElementsByTagName('textarea')[0];

        if (textarea.style.height != 'auto') {
            textarea.style.height = 'auto';
        }

        const data = await handle_API_ChatMessage_C(room_chat, ...data_send);

        console.log('data_send: ', data_send, ', data: ', data);

        const { id, message, vid_pics } = data;
        const new_vid_pics = vid_pics.map((item) => item.vid_pic);

        WsSend(ws, {
            type: 'message',
            id: id,
            vid_pics: new_vid_pics,
            message: message,
            current_canvas: current_canvas,
        });
    }

    //
    return (
        <div className="ChatF position-rel">
            <div className="ChatF_contain">
                <div
                    className={`ChatF_MT ${
                        more_input ? 'ChatF_MT-open' : 'ChatF_MT-close'
                    }`}
                >
                    <ChatMT
                        letDrawCanvas={letDrawCanvas}
                        handleChooseFiles={handleChooseFiles}
                    />
                </div>

                <div className="ChatF_row">
                    <div
                        className={`ChatF_MB ${
                            more_input || text.trim()
                                ? 'ChatF_MB-close'
                                : 'ChatF_MB-open'
                        }`}
                    >
                        <ChatMB
                            has_text={!!text.trim()}
                            more_input={more_input}
                            moreActionsIp={handleMoreInput}
                            letDrawCanvas={letDrawCanvas}
                            handleStartLoadFile={handleStartLoadFile}
                            handleChooseFiles={handleChooseFiles}
                        />
                    </div>

                    <div className="ChatF_Ip" ref={ref_ip_text_elm}>
                        <Textarea
                            text={text}
                            placeholder="Chat..."
                            textarea_class="ChatF_textarea scroll-thin"
                            onChange={handleChangeIp}
                            handleSend={handleSend}
                        />
                    </div>

                    <div className="ChatF_Sd">
                        <ChatSd
                            should_send={
                                !!current_canvas ||
                                files.length > 0 ||
                                !!text.trim()
                            }
                            handleSend={handleSend}
                        />
                    </div>
                </div>
            </div>

            <div className="ChatF_preview">
                {current_canvas || urls.length ? (
                    <ChatPv
                        current_canvas={current_canvas}
                        urls={urls}
                        file_reading={file_reading}
                        //
                        letDrawCanvas={letDrawCanvas}
                        deleteCanvasDraw={deleteCanvasDraw}
                        deleteAnItemPreview={deleteAnItemPreview}
                    />
                ) : null}
            </div>
        </div>
    );
}

export default ChatF;
