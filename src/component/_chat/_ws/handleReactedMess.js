import { initial_chat_item } from '../../../_initial/chat/ChatInitial';

//
function fakeReacted({ mess_item, reacted_ix }) {
    const _reacted_count =
        mess_item.reacted_count +
        (mess_item.user_reacted_ix >= 0 && reacted_ix <= -1 ? -1 : 0) +
        (mess_item.user_reacted_ix <= -1 && reacted_ix >= 0 ? 1 : 0);

    const _reacted_ix_arr = [
        // ...mess_item.reacted_ix_arr,
        // ...(mess_item.reacted_ix_arr.includes(reacted_ix) ? [] : [reacted_ix]),
        reacted_ix,
    ]
        .filter((item, ix, arr) => arr.indexOf(item) == ix)
        .sort((a, b) => a - b)
        .slice(0, 3);

    return { _reacted_count: _reacted_count, _reacted_ix_arr: _reacted_ix_arr };
}

//
export function handleReactedMess({
    chat_item = initial_chat_item(),
    id = 0,
    reacted_ix = -1,

    user_id = 1,
    reacted_ix_arr = [0, 2],
    reacted_count = 2,
}) {
    const mess_item = chat_item.message_obj.messages.find(
        (item) => item.id == id
    );

    const { _reacted_ix_arr, _reacted_count } = fakeReacted({
        mess_item: mess_item,
        reacted_ix: reacted_ix,
    });

    user_id == 1 && (mess_item.user_reacted_ix = reacted_ix);
    mess_item.reacted_ix_arr = _reacted_ix_arr;
    mess_item.reacted_count = _reacted_count;
}
