import { getRandomBool } from './default_bool';
import { getRandomId } from './default_id';
import { getRandomVidPic } from './default_image';
import { getRandomGroupName, getRandomName, getRandomPageName } from './default_name';

//
export const getRandomUser = () => ({
    user: {
        id: getRandomId(),
        picture: getRandomVidPic(),
        first_name: getRandomName(),
        last_name: getRandomName(),
        is_online: false,
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
        has_tick: getRandomBool(),
    },
});
