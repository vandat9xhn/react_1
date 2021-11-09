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

//
const default_nick_name_arr = [
    'Bo',
    'Bin',
    'stupid',
    'sweet',
    'my girl',
    'brother',
    'best friend',
    'seller',
    'my developer',
    'my bank',
    'baka',
    // 'Tran Nguyen',
];

//
export const getRandomNickName = () => getRandomFromArr(default_nick_name_arr);
