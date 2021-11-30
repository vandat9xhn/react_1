import { getRandomFromArr } from './getRandomFromArr';

// NAME
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

export const getRandomName = () => getRandomFromArr(default_arr_name);

// NICK NAME
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

// GROUP NAME
const default_group_name_arr = [
    'Hoc excel',
    'Ae Lien minh huyen thoai HN',
    'Cong dong ke toan',
    'Group lap ra de tim game',
    'Cong dong front-end',
    'Python  Viet Nam',
    'Cung ho tieng anh',
    'Tieng nhat cho nguoi moi',
    'Naruto Viet Nam',
    'One punch man Viet Nam',
];

//
export const getRandomGroupName = () =>
    getRandomFromArr(default_group_name_arr);

// PAGE NAME
const default_page_name_arr = [
    'TopDev',
    'VTV 24',
    'The gioi di dong',
    'Cuoc song quanh ta',
    'Bao 24h',
    'Viblo',
    'The thao 247',
    'Grab',
    // '',
    // '',
    // '',
];

//
export const getRandomPageName = () =>
    getRandomFromArr(default_page_name_arr);
