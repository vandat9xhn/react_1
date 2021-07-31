import { getRandomFromArr } from './getRandomFromArr';

//
const default_arr_name = [
    'Harry',
    'Potter',
    'Clark',
    'Nguyen',
    'Saitama',
    'Naruto',
    'Hinata',
    'Tran',
    'Hai',
    'My',
    'Ngoc',
    'Tran Nguyen',
    'Tran Le',
    'Nguyen Le',
    'Le Nguyen',
];

//
export const getRandomName = () => getRandomFromArr(default_arr_name);
