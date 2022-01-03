import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
export function handleDelMess({
    chat_item = initial_chat_item(),
    id = 0,
    is_for_you = false,
}) {
    const mess_ix = chat_item.message_obj.messages.findIndex(
        (item) => item.id == id
        );

    if (!is_for_you) {
        chat_item.message_obj.messages[mess_ix].unsent = true;
    } else {
        chat_item.message_obj.messages.splice(mess_ix, 1);
    }
}
