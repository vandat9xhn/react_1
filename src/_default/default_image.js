import white_person from '../../image/white_person.svg';
import naruto_x_hinata from '../../image/naruto_x_hinata.jpg';
import banner_laptop_phone from '../../image/banner_laptop_phone.jpg';
import banner_phone from '../../image/banner_phone.jpg';
import banner_laptop from '../../image/banner_laptop.png';
import contact_phone from '../../image/contact phone.png';
import giay_the_thao from '../../image/giay_the_thao.jpg';
import phone_jpg from '../../image/phone_jpg.jpg';

//
export const default_vid_pic_arr = [
    white_person,
    naruto_x_hinata,
    banner_laptop,
    banner_laptop_phone,
    banner_phone,
    contact_phone,
    giay_the_thao,
    phone_jpg,
];

//
export const getRandomVidPic = () =>
    default_vid_pic_arr[
        Math.round(Math.random() * (default_vid_pic_arr.length - 1))
    ];
