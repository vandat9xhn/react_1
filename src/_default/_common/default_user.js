import { getRandomBool } from './default_bool';
import { getRandomId, getRandomNumber } from './default_id';
import { getRandomVidPic } from './default_image';
import {
    getRandomGroupName,
    getRandomName,
    getRandomPageName,
} from './default_name';

//
export const getRandomTimeOnline = ({ max = 3000 }) =>
    getRandomBool() ? 0 : getRandomNumber(0, max);

//
export const getRandomUser = () => ({
    user: {
        id: getRandomId(),
        picture: getRandomVidPic(),
        first_name: getRandomName(),
        last_name: getRandomName(),
        time_online: getRandomTimeOnline({}),
        has_new_story: getRandomBool() * getRandomBool(),
    },
});

export const getRandomGroup = () => ({
    group_obj: {
        id: getRandomId(),
        picture: getRandomVidPic(),
        name: getRandomGroupName(),
    },
});

export const getRandomPage = () => ({
    page_obj: {
        id: getRandomId(),
        picture: getRandomVidPic(),
        name: getRandomPageName(),
        time_online: getRandomTimeOnline({}),
        has_tick: getRandomBool(),
        has_new_story: getRandomBool() * getRandomBool(),
    },
});
