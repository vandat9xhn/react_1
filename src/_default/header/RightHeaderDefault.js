import { getDefaultArr } from '../_common/getDefaultArr';
import { getRandomId, getRandomNumber } from '../_common/default_id';
import { getRandomName } from '../_common/default_name';
import { getRandomContent } from '../_common/default_content';
import { getRandomUser } from '../_common/default_user';
import { getRandomBool } from '../_common/default_bool';

//
const default_message_obj = () => ({
    id: getRandomId(),
    name: getRandomName() + ' ' + getRandomName(),
    last_message: getRandomContent(),
});

export const default_message_arr = () =>
    getDefaultArr(default_message_obj, 10, 10);

//
const default_room_obj = () => ({
    room_chat: getRandomName() + getRandomId(),
    messages: [
        {
            ...getRandomUser(),
            message: 'abc def asd a dsa asd  asd a',
        },
    ],
    count_new_mess: getRandomBool() ? getRandomNumber(0, 10) : 0,
    updated_time: new Date(),
});

export const default_room_arr = () => getDefaultArr(default_room_obj, 5, 8);

//
const default_notice_obj = () => ({
    id: getRandomId(),
    link_id: getRandomId(),
    ...getRandomUser(),
    content: getRandomContent(),
    status_seen: getRandomNumber(0, 2),
    updated_time: new Date(),
});

export const default_notice_arr = () => getDefaultArr(default_notice_obj, 5, 8);
