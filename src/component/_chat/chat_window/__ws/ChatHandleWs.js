import { WsSend } from '../../../../_some_function/WsSend';

/* ------------------------ WS SEND ----------------------------*/

//
export async function HandleSendMessageWs(ws, mess_id, message, vid_pics) {
    WsSend(ws, {
        type: 'mess',
        new_mess_id: mess_id,
        message: message,
        vid_pics: vid_pics,
    });
}

//
export function handleSendOnInputWs(ws, on_input) {
    WsSend(ws, {
        type: 'on_input',
        on_input: on_input,
    });
}

//
export function handleSendStatusMessageWs(ws, mess_id, status_mess) {
    WsSend(ws, {
        type: 'status_mess',
        mess_id: mess_id,
        status_mess: status_mess,
    });
}

//
export function handleSendLikeMessageWs(ws, mess_id, type_like) {
    WsSend(ws, {
        type: 'type_like_mess',
        mess_id: mess_id,
        type_like: type_like,
    });
}

//
export function handleSendDeleteMessageWs(ws, mess_id) {
    WsSend(ws, {
        type: 'delete_mess',
        mess_id: mess_id,
    });
}

//
export function handleSendAddFriendToGroupWs(ws, friend_id) {
    WsSend(ws, {
        type: 'group_notice',
        status_notice: 'add_friend',
        friend_id: friend_id,
    });
}

//
export function handleSendQuitGroupWs(ws) {
    WsSend(ws, {
        type: 'group_notice',
        status_notice: 'quit',
    });
}
//
export function handleSendForceQuitGroupWs(ws, friend_id) {
    WsSend(ws, {
        type: 'group_notice',
        status_notice: 'force_quit',
        friend_id: friend_id,
    });
}
