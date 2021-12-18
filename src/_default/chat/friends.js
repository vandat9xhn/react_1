import { getRandomBool } from '../_common/default_bool';
import { getRandomPage, getRandomUser } from '../_common/default_user';
import { getDefaultArr } from '../_common/getDefaultArr';

//
const default_chat_friend_obj = () => {
    const user_type = getRandomBool() * getRandomBool() ? 'page' : 'person';

    return {
        ...(user_type == 'person'
            ? getRandomUser().user
            : getRandomPage().page_obj),
        user_type: user_type,
    };
};

export const default_chat_friend_arr = ({ min = 12, max = 12 }) => {
    return getDefaultArr(default_chat_friend_obj, min, max);
};
