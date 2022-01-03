import { handleWsTypes } from '../../../_some_function/WsSend';
//
import { WS_CHAT_TYPE_OBJ } from './_type';
// 
import { handleGetMessage } from './handleGetMessage';
import { handleDelMess } from './handleDelMess';
import { handleMessEmoji } from './handleMessEmoji';

import { handleChangeColour } from './handleChangeColour';
import { handleChangeEmoji } from './handleChangeEmoji';

import { handleReactedMess } from './handleReactedMess';
import { handleOnInPut } from './handleOnInPut';
import { handleStatusMessage } from './handleStatusMessage';

import { handleChangeGroupName } from './handleChangeGroupName';
import { handleAddToGroup } from './handleAddToGroup';
import { handleQuitGroup } from './handleQuitGroup';
import { handleChangeNicknames } from './handleChangeNicknames';


//
export function handleWsChat({ ws_event, chat_item }) {
    //
    console.log(ws_event.data);

    //
    handleWsTypes({
        ws_event: ws_event,
        type_arr: [
            {
                type: WS_CHAT_TYPE_OBJ.MESS,
                handleType: handleGetMessage,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.MESS_EMOJI,
                handleType: handleMessEmoji,
                data_type_obj: { chat_item: chat_item },
            },

            {
                type: WS_CHAT_TYPE_OBJ.ON_INPUT,
                handleType: handleOnInPut,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.STATUS_MESS,
                handleType: handleStatusMessage,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.REACTED_MESS,
                handleType: handleReactedMess,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.REMOVE_MESS,
                handleType: handleDelMess,
                data_type_obj: { chat_item: chat_item },
            },

            {
                type: WS_CHAT_TYPE_OBJ.NICKNAMES,
                handleType: handleChangeNicknames,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.COLOUR,
                handleType: handleChangeColour,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.EMOJI,
                handleType: handleChangeEmoji,
                data_type_obj: { chat_item: chat_item },
            },
            
            {
                type: WS_CHAT_TYPE_OBJ.GROUP_NAME,
                handleType: handleChangeGroupName,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.ADD_TO_GROUP,
                handleType: handleAddToGroup,
                data_type_obj: { chat_item: chat_item },
            },
            {
                type: WS_CHAT_TYPE_OBJ.QUIT,
                handleType: handleQuitGroup,
                data_type_obj: { chat_item: chat_item },
            },
        ],
    });
}
