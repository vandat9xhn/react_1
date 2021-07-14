import { getRandomId } from './default_id';
import { getRandomVidPic } from './default_image';
import { getRandomName } from './default_name';

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
