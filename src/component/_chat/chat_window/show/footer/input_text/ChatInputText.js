import React from 'react';
import PropTypes from 'prop-types';
//
import { useForceUpdate } from '../../../../../_hooks/UseForceUpdate';
//
import Textarea from '../../../../input/textarea/Textarea';

//
ChatInputText.propTypes = {};

//
function ChatInputText({ input_obj, handleHasText, handleSend }) {
    //
    const { text } = input_obj;

    //
    const forceUpdate = useForceUpdate();

    //
    function onChangeIp(value) {
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
    return (
        <Textarea
            text={text}
            placeholder="Chat..."
            textarea_class="ChatF_textarea scroll-thin"
            onChange={onChangeIp}
            handleSend={handleSend}
        />
    );
}

export default ChatInputText;
