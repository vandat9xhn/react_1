//
export const CHAT_ACTION_MEMBER_OBJ_1 = {
    chat: { name: 'message', title: 'Message' },
    profile: { name: 'profile', title: 'View profile' },
    block: { name: 'block', title: 'Block' },
};

export const CHAT_ACTION_MEMBER_OBJ_2 = {
    make_admin: { name: 'make_admin', title: 'Make admin' },
    remove_member: { name: 'remove_member', title: 'Remove member' },
    remove_admin: { name: 'remove_admin', title: 'Remove as admin' },
    leave_group: { name: 'leave_group', title: 'Leave group' },
};

//
export function getChatActionMemberArr({
    is_user = false,
    is_user_admin = false,
    is_member_admin = false,
}) {
    const arr_1 = [];
    const arr_2 = [];

    // ----
    if (is_user) {
        if (is_user_admin) {
            arr_2.push(CHAT_ACTION_MEMBER_OBJ_2.remove_admin);
        }

        arr_1.push(CHAT_ACTION_MEMBER_OBJ_1.profile);
        arr_2.push(CHAT_ACTION_MEMBER_OBJ_2.leave_group);

        return [arr_1, arr_2];
    }

    // ----
    if (is_user_admin) {
        if (is_member_admin) {
            arr_2.push(CHAT_ACTION_MEMBER_OBJ_2.remove_admin);
        } else {
            arr_2.push(CHAT_ACTION_MEMBER_OBJ_2.make_admin);
        }

        arr_2.push(CHAT_ACTION_MEMBER_OBJ_2.remove_member);
    }

    arr_1.push(CHAT_ACTION_MEMBER_OBJ_1.chat, CHAT_ACTION_MEMBER_OBJ_1.profile, CHAT_ACTION_MEMBER_OBJ_1.block);

    return arr_2.length ? [arr_1, arr_2] : [arr_1];
}

//
export function getInfoActionMember({ user_name_add = '', is_admin = false }) {
    if (!user_name_add) {
        return '';
    }

    return `${is_admin ? 'Admin - ' : ''}Added by ${user_name_add}`;
}
