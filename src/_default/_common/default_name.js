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
];

//
export const getRandomName = () => getRandomFromArr(default_arr_name);
