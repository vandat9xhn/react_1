import { getRandomImg } from '../_common/default_image';
import { getRandomName } from '../_common/default_name';

//
export const default_define_user = {
    id: 1,
    first_name: getRandomName(),
    last_name: getRandomName(),
    picture: getRandomImg(),
};

//
export const default_login = {
    ...default_define_user,
    access: '',
    life_time: new Date().getTime(),
};
