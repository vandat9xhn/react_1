import { getRandomFromArr } from './getRandomFromArr';

// HASH TAG
const default_arr_hash_tag = [
    'challenge',
    'try_hard',
    'racing',
    'harry_potter',
    'lmht',
    'garena',
    'cf',
];

//
export const getRandomHashTag = () => getRandomFromArr(default_arr_hash_tag);
