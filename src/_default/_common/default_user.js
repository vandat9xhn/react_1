import { getRandomBool } from './default_bool';
import { getRandomId, getRandomNumber } from './default_id';
import { getRandomImg } from './default_image';
import {
    getRandomGroupName,
    getRandomName,
    getRandomPageName,
} from './default_name';
import { getRandomFromArr } from './getRandomFromArr';

//
export const getRandomTimeOnline = ({ max = 3000 }) =>
    getRandomBool() ? 0 : getRandomNumber(0, max);

//
export const getRandomUser = () => {
    const has_new_story = getRandomBool() * getRandomBool();

    return {
        user: {
            id: getRandomId(),
            picture: getRandomImg(),
            first_name: getRandomName(),
            last_name: getRandomName(),
            sex: getRandomFromArr(['male', 'female', 'other']),

            time_online: getRandomTimeOnline({}),
            has_new_story: has_new_story,
            has_seen_story: has_new_story && getRandomBool(),
        },
    };
};

export const getRandomGroup = () => ({
    group_obj: {
        id: getRandomId(),
        picture: getRandomImg(),
        name: getRandomGroupName(),
    },
});

export const getRandomPage = () => {
    const has_new_story = getRandomBool() * getRandomBool();
    // const has_new_story = true;

    return {
        page_obj: {
            id: getRandomId(),
            picture: getRandomImg(),
            name: getRandomPageName(),

            time_online: getRandomTimeOnline({}),
            has_tick: getRandomBool(),
            has_new_story: has_new_story,
            has_seen_story: has_new_story && getRandomBool(),
        },
    };
};
